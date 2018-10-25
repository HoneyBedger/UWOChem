import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MathJax from 'react-mathjax';
import {Link, NavLink} from 'react-router-dom';
import {Container, Row, Col, Breadcrumb, BreadcrumbItem, ListGroup, ListGroupItem,
  Form, FormGroup, Input, Button, Label} from 'reactstrap';
import Questions from './Questions';
import Question from './Question';
import Loading from '../Loading.jsx';
import LoadingError from '../LoadingError.jsx';
import Results from './Results';


class PracticeExam extends Component {

  constructor(props) {
    super(props);
    this.state = {
        isLoading: true,
        errorLoading: false,
        resultsModalOpen: false
      };
    this.checkAnswer = this.checkAnswer.bind(this);
    this.toggleResultsModal = this.toggleResultsModal.bind(this);
    this.selectQuestion = this.selectQuestion.bind(this);
    this.saveProgress = this.saveProgress.bind(this);
    this.tryAgain = this.tryAgain.bind(this);
  }

  toggleResultsModal() {
    this.setState({resultsModalOpen: !this.state.resultsModalOpen});
  }

  fetchQuestions() {
    let query;
    if (this.props.type === "exam") {
      query = `/questions?courseId=${this.props.courseId}&examName=${this.props.examName}`;
    } else if (this.props.type === "chapter") {
      query = `/questions?courseId=${this.props.courseId}&chapterId=${this.props.id}`;
    } else {
      let searchString = this.props.search;
      query = `/questions?search=${searchString}`;
    }
    return fetch(query)
    .then(response => {
      return response.json();
    })
    .catch((err) => {
      this.setState({
        isLoading: false,
        errorLoading: true
      });
    });
  }

  getSavedAnswers(questions) {
    //the questions already answered are written to the user object in the DB and also locally
    let user = window.localStorage.getItem('user') && JSON.parse(window.localStorage.getItem('user'));
    let savedAnswers = new Map();
    if (user && user.questionsAnswered) {
      let questionIds = questions.map(q => q._id);
      for (let question of user.questionsAnswered) {
        if (questionIds.indexOf(question.questionId) !== -1) {
            savedAnswers.set(question.questionId,
              {examId: question.examId, correct: question.correct, studentAnswer: question.studentAnswer});
          }
      }
    }
    return savedAnswers;
  }

  setQuestions(questions) {
    let savedAnswers = this.getSavedAnswers(questions);
    console.log(savedAnswers);


    //all the random variables of the questions are set here
    questions.forEach((question) => {
      question.questionBody = new Function('React', 'MathJax', question.questionBody)(React, MathJax);
    });
    if (this.props.type !== "search") questions.sort((q1, q2) => (q1.idInExam - q2.idInExam));
    this.setState({
      isLoading: false,
      questions: questions,
      selectedQuestion: questions[0],
      questionsAnswered: savedAnswers // key = questionId, value = {correct: true/false, studentAnswer: String}
    });
  }

  componentDidMount() {
    this.fetchQuestions()
    .then(questions => {
      this.setQuestions(questions);
    })
    .catch((err) => {
      console.log(err);
      this.setState({
        isLoading: false,
        errorLoading: true
      });
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.type !== this.props.type || prevProps.search !== this.props.search) {
      //need different questions, so refetch them
      this.setState({isLoading: true, errorLoadin: false}, () => {
        this.fetchQuestions()
        .then(questions => {
          this.setQuestions(questions);
        })
        .catch((err) => {
          console.log(err);
          this.setState({
            isLoading: false,
            errorLoading: true
          });
        });
      });
    }
  }

  selectQuestion(questionId) {
    this.setState({
      selectedQuestion: this.state.questions.filter(q => q._id === questionId)[0]
    });
  }

  checkAnswer(correctAnswer, studentAnswer) {
    let type = this.state.selectedQuestion.type;
    let correct;
    if (type === "numeric") {
      let error = Math.abs((Number.parseFloat(studentAnswer) - correctAnswer)/correctAnswer);
      correct = (error < 0.03) ? true : false;
    } else if (type === "string") {
      correct = studentAnswer && !!studentAnswer.match(correctAnswer);
    } else if (type === "MC") {
      correct = correctAnswer === Number.parseInt(studentAnswer) ? true : false;
    } else if (type === "MS") {
      correct = true;
      for (let option of correctAnswer) {
        let id = String(option.id);
        if (option.correct && !studentAnswer.includes(id) ||
            !option.correct && studentAnswer.includes(id)) {
          correct = false;
        }
      }
    } else if (type === "order") {
      correct = true;
      for (let i = 0; i < correctAnswer.length; i++) {
        if (studentAnswer[i] !== correctAnswer[i]) {
          correct = false;
          break;
        }
      }
    } else if (type === "bins") {
      correct = true;
      for (let i = 0; i < correctAnswer.length; i++) {
        if (studentAnswer[i] !== correctAnswer[i].binId) {
          correct = false;
          break;
        }
      }
    }
    let questionsAnswered = this.state.questionsAnswered;
    let selectedQuestion = this.state.selectedQuestion;
    let examId = `${selectedQuestion.courseId}_${selectedQuestion.examName.replace(/\s/, '')}`;
    studentAnswer = studentAnswer ? studentAnswer.toString() : "";
    this.setState({
      questionsAnswered: questionsAnswered.set(selectedQuestion._id, {examId, correct, studentAnswer})
    }, () => {
      if (questionsAnswered.size === this.state.questions.length) {
        this.setState({resultsModalOpen: true});}
    });
    this.saveUserAnswer(selectedQuestion._id, examId, correct, studentAnswer);
  };

  saveUserAnswer(questionId, examId, correct, studentAnswer) {
    let user = window.localStorage.getItem('user') ?
      JSON.parse(window.localStorage.getItem('user')) :
      {};
    if (!user.questionsAnswered) user.questionsAnswered = [];
    let questionExists = user.questionsAnswered.filter(q => q.questionId === questionId)[0];
    if (questionExists) {
      let idx = user.questionsAnswered.indexOf(questionExists);
      user.questionsAnswered.splice(idx, 1, {questionId, examId, correct, studentAnswer});
    } else user.questionsAnswered.push({questionId, examId, correct, studentAnswer});
    console.log(user.questionsAnswered);
    window.localStorage.setItem('user', JSON.stringify(user));
    console.log("set user", window.localStorage.getItem('user'));
    this.saveToDB([{questionId, examId, correct, studentAnswer}]);
  }

  saveToDB(questions) {
    if (window.localStorage.getItem('userToken')) {
      console.log(window.localStorage.getItem('user'));
      let username = JSON.parse(window.localStorage.getItem('user')).username;
      let jwtToken = window.localStorage.getItem('userToken');
      console.log("username", username);
      console.log("token", jwtToken);
      fetch('/users/questions', {
        method: 'post',
        headers: {'Content-Type':'application/json', 'Authorization': 'bearer ' + jwtToken},
        body: JSON.stringify({username, questions})})
      .then(res => {
        res.text().then(res => console.log(res));
        if (!res.ok) {
          this.setState({
            saveFailed: true
          });
        }
      });
    }
  }

  saveProgress() {
    //make sure to push the answers to DB once the user logs in
    if (window.localStorage.getItem('userToken')) return;
    this.props.setSaveProgress(true);
    this.props.toggleLoginModal();
  }

  tryAgain() {
    //reset all the answers for a given test/chapter
    let user = window.localStorage.getItem('user') && JSON.parse(window.localStorage.getItem('user'));
    let questionsAnswered = user && user.questionsAnswered;
    if (!questionsAnswered || questionsAnswered.length === 0) {
      this.toggleResultsModal();
      return;
    }
    //reset locally
    for (let i = 0; i < questionsAnswered.length; i++) {
      let q = questionsAnswered[i];
      if (this.state.questionsAnswered.has(q.questionId))  {
        questionsAnswered.splice(i, 1);
        i--;
      }
    }
    console.log("after reset questionsAnswered", questionsAnswered);
    user.questionsAnswered = questionsAnswered;
    window.localStorage.setItem('user', JSON.stringify(user));
    //reset in DB
    let jwtToken = window.localStorage.getItem('userToken');
    let questionIds = Array.from(this.state.questionsAnswered.keys());
    console.log("questionIds", questionIds);
    fetch('/users/questions', {
      method: 'delete',
      headers: {'Content-Type':'application/json', 'Authorization': 'bearer ' + jwtToken},
      body: JSON.stringify({username: user.username, questionIds})})
    .then(res => {
      res.text().then(res => console.log(res));
    });
    this.setState({questionsAnswered: new Map()});
    this.toggleResultsModal();
  }

  renderQuestions() {
    if (this.state.isLoading) {
      return (<Loading />);
    } else if (this.state.errorLoading) {
      return (<LoadingError/>);
    } else { //everything was loaded ok
      let numCorrect = 0;
      let questionsAnswered = this.state.questionsAnswered;
      questionsAnswered.forEach(ans => {
        if (ans.correct) numCorrect++;
      });
      let questionNames = this.state.questions.map(question => {
        return {
          _id: question._id,
          name: `Question ${question.idInExam} ${this.props.type !== "exam" ? "("+question.examName+")" : ""}`
        };
      });

      return (
        <React.Fragment>
          {this.state.questions.length === 0 ?
            (<Row>
              <Col xs={12}>
                <h5>Sorry, could not find anything matching your query.</h5>
              </Col>
            </Row>) :
            <Questions questions={questionNames} questionsAnswered={this.state.questionsAnswered}
              selectedQuestion={this.state.selectedQuestion} checkAnswer={this.checkAnswer}
              selectQuestion={this.selectQuestion} loggedIn={this.props.loggedIn}
              saveProgress={this.saveProgress} repositionFooter={this.props.repositionFooter}/>
          }
          <Results score={numCorrect/questionsAnswered.size*100}
            tryAgain={this.tryAgain}
            elseLink={this.props.type === "search" ? "/home" : `/practice/${this.props.courseId}`}
            isOpen={this.state.resultsModalOpen} toggle={this.toggleResultsModal}/>
        </React.Fragment>
      );
    }
  }



  render() {
    return (
      <Container className="mt-5 pt-3 mb-5" id="exam">
        <Breadcrumb>
          {this.props.type === "search" ?
          <h5>Search Results for <i>{this.props.search}</i>:</h5> :
          (<React.Fragment>
              <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
              <BreadcrumbItem><Link to="/practice">Practice</Link></BreadcrumbItem>
              <BreadcrumbItem><Link to={`/practice/${this.props.courseId}`}>{this.props.courseId}</Link></BreadcrumbItem>
              <BreadcrumbItem active>{this.props.type === "exam" ? this.props.examName : this.props.chapterName}</BreadcrumbItem>
            </React.Fragment>)
          }
        </Breadcrumb>
        {this.renderQuestions()}
      </Container>
    );
  }
}

export default PracticeExam;
