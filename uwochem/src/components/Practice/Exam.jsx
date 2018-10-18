import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MathJax from 'react-mathjax';
import {Link, NavLink} from 'react-router-dom';
import {Container, Row, Col, Breadcrumb, BreadcrumbItem, ListGroup, ListGroupItem,
  Form, FormGroup, Input, Button, Label} from 'reactstrap';
import Questions from './Questions';
import Question from './Question';
import {Loading} from '../Loading';
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
    let query = (this.props.type === "exam") ?
      `/questions?courseId=${this.props.courseId}&examName=${this.props.examName}` :
      `/questions?courseId=${this.props.courseId}&chapterId=${this.props.id}`;
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
    //TODO: do I actually need to fetch a user from DB? or ok to use local obj?
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


    //all the random values are set here
    questions.forEach((question) => {
      question.questionBody = new Function('React', 'MathJax', question.questionBody)(React, MathJax);
    });
    questions.sort((q1, q2) => (q1.idInExam - q2.idInExam));
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


  selectQuestion(questionId) {
    this.setState({
      selectedQuestion: this.state.questions.filter(q => q._id === questionId)[0]
    });
  }

  checkAnswer(correctAnswer, studentAnswer) {
    let correct;
    if (this.state.selectedQuestion.type === "numeric") {
      let error = Math.abs((Number.parseFloat(studentAnswer) - correctAnswer)/correctAnswer);
      correct = (error < 0.03) ? true : false;
    } else if (this.state.selectedQuestion.type === "string") {
      correct = !!studentAnswer.match(correctAnswer);
    } else if (this.state.selectedQuestion.type === "MC") {
      correct = correctAnswer === Number.parseInt(studentAnswer) ? true : false;
    } else if (this.state.selectedQuestion.type === "MS") {
      console.log("correctAnswer", correctAnswer);
      console.log("studentAnswer", studentAnswer);
      correct = true;
      for (let option of correctAnswer) {
        let id = String(option.id);
        if (option.correct && !studentAnswer.includes(id) ||
            !option.correct && studentAnswer.includes(id)) {
          correct = false;
        }
      }
    } else if (this.state.selectedQuestion.type === "order") {
      correct = true;
      for (let i = 0; i < correctAnswer.length; i++) {
        if (studentAnswer[i] !== correctAnswer[i]) correct = false;
      }
    }
    let examId = `${this.state.selectedQuestion.courseId}_${this.state.selectedQuestion.examName.replace(/\s/, '')}`;
    this.setState({
      questionsAnswered: this.state.questionsAnswered.set(this.state.selectedQuestion._id, {examId, correct, studentAnswer})
    }, () => {
      if (this.state.questionsAnswered.size === this.state.questions.length) {
        this.setState({resultsModalOpen: true});}
    });
    this.saveUserAnswer(this.state.selectedQuestion._id, examId, correct, studentAnswer.toString());
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
    if (window.localStorage.getItem('userToken')) return;
    this.props.setSaveProgress(true);
    this.props.toggleLoginModal();
  }

  tryAgain() {
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
      return (
        <div className="row">
          <h4 className="error">Something went wrong when loading questions...</h4>
        </div>
      );
    } else { //everything was loaded ok
      let numCorrect = 0;
      let questionsAnswered = this.state.questionsAnswered;
      questionsAnswered.forEach(ans => {
        if (ans.correct) numCorrect++;
      });
      let questionNames = this.state.questions.map(question => {
        return {
          _id: question._id,
          name: `Question ${question.idInExam} ${this.props.type === "chapter" ? "("+question.examName+")" : ""}`
        };
      });

      return (
        <React.Fragment>
          <Questions questions={questionNames} questionsAnswered={this.state.questionsAnswered}
            selectedQuestion={this.state.selectedQuestion} checkAnswer={this.checkAnswer}
            selectQuestion={this.selectQuestion} loggedIn={this.props.loggedIn}
            saveProgress={this.saveProgress}/>
          <Results score={numCorrect/questionsAnswered.size*100}
            tryAgain={this.tryAgain}
            elseLink={`/practice/${this.props.courseId}`}
            isOpen={this.state.resultsModalOpen} toggle={this.toggleResultsModal}/>
        </React.Fragment>
      );
    }
  }



  render() {
    return (
      <Container className="mt-5 pt-3 mb-5">
        <Breadcrumb>
          <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
          <BreadcrumbItem><Link to="/practice">Practice</Link></BreadcrumbItem>
          <BreadcrumbItem><Link to={`/practice/${this.props.courseId}`}>{this.props.courseId}</Link></BreadcrumbItem>
          <BreadcrumbItem active>{this.props.type === "exam" ? this.props.examName : this.props.chapterName}</BreadcrumbItem>
        </Breadcrumb>
        {this.renderQuestions()}
      </Container>
    );
  }
}

export default PracticeExam;
