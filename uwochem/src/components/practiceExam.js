import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MathJax from 'react-mathjax';
import {Link, NavLink} from 'react-router-dom';
import {Breadcrumb, BreadcrumbItem, ListGroup, ListGroupItem,
  Form, FormGroup, Input, Button, Label} from 'reactstrap';
import {newQuestions} from '../shared/newQuestions';
import Question from './question';
import {Loading} from './loading';


class PracticeExam extends Component {

  constructor(props) {
    super(props);
    this.state = {
        isLoading: true,
        errorLoading: false,
      };
    this.checkAnswer = this.checkAnswer.bind(this);
  }

  fetchQuestions() {
    return fetch('http://localhost:3000/questions')
    .then(response => {
      return response.json();
    })
    .catch((err) => {
      this.setState({
        isLoading: false,
        errorLoading: true,
        errorMgs: "Something went wrong when loading questions..."
      });
    });
  }

  componentDidMount() {
    //TODO: what is the proper way of error handling here?
    /*this.fetchQuestions()
    .then(questions => {
      //filter the questions and, for each one, execute its guestionBody function so that
      //all the random values are set
      let questionsFiltered = questions.filter((question) => {
        if (question.courseId === this.props.courseId) {
          return this.props.type === "exam" ? this.props.examName === question.examName : this.props.id === question.chapterId;
        }
        return false;
      });
      questionsFiltered.forEach((question => {
        question.questionBody = new Function('React', 'MathJax', question.questionBody)(React, MathJax);
      }))
      this.setState({
        isLoading: false,
        questions: questionsFiltered,
        selectedQuestion: questionsFiltered[0]
      });
    })
    .catch((err) => {
      console.log(err);
      this.setState({
        isLoading: false,
        errorLoading: true
      });
    });*/
    if (!newQuestions || newQuestions.length === 0) {
      this.setState({
        isLoading: false,
        errorLoading: true,
        errorMgs: "Sorry, didn&#8217;t find any questions..."
      });
    } else { //everything is OK
      let questionsFiltered = newQuestions.filter((question) => {
        if (question.courseId === this.props.courseId) {
          return this.props.type === "exam" ? this.props.examName === question.examName : this.props.id === question.chapterId;
        }
        return false;
      });
      this.setState({
        isLoading: false,
        questions: questionsFiltered,
        selectedQuestion: questionsFiltered[0],
        selectedQuestionCorrect: undefined,
        questionsAnswered: new Map() // key = questionId, value = {correct: true/false, studentAnswer: String}
      });
    }
  }

  selectQuestion(question) {
    //if the selected question was already answered, look up if it was correct,
    //otherwise correct is undefined
    let correct = undefined;
    if (this.state.questionsAnswered.has(question._id)) {
      correct = this.state.questionsAnswered.get(question._id).correct;
    }
    this.setState({
      selectedQuestion: question,
      selectedQuestionCorrect: correct
    });
  }

  checkAnswer(correctAnswer, studentAnswer) {
    let correct;
    if (this.state.selectedQuestion.type === "numeric") {
      correct = this.checkNumeric(correctAnswer, studentAnswer);
    } else if (this.state.selectedQuestion.type === "string") {
      correct = this.checkString(correctAnswer, studentAnswer);
    } else if (this.state.selectedQuestion.type === "MC") {
      correct = this.checkMC(correctAnswer, studentAnswer);
    } else if (this.state.selectedQuestion.type === "MS") {
      correct = this.checkMS(correctAnswer, studentAnswer);
    } else if (this.state.selectedQuestion.type === "order") {
      correct = this.checkOrder(correctAnswer, studentAnswer);
    }
    this.setState({
      questionsAnswered: this.state.questionsAnswered.set(this.state.selectedQuestion._id, {correct, studentAnswer}),
      selectedQuestionCorrect: correct
    });
  };

  checkNumeric(correctAnswer, studentAnswer) {
    let error = Math.abs(Number.parseFloat(studentAnswer) - correctAnswer)/correctAnswer;
    return (error < 0.02) ? true : false;
  }

  checkString(correctAnswer, studentAnswer) {
    return studentAnswer.match(correctAnswer);
  }

  checkMC(options, studentAnswer) {
    let correctAnswer = options.filter(option => option.correct)[0].id;
    return correctAnswer === Number.parseInt(studentAnswer) ? true : false;
  }

  checkMS(options, studentAnswers) {
    for (let option of options) {
      if (option.correct && (studentAnswers.indexOf(option.id) === -1) ||
          !option.correct && (studentAnswers.indexOf(option.id) !== -1)) {
        return false;
      }
    }
    return true;
  }

  checkOrder(correctOrder, studentAnswer) {
    for (let i = 0; i < correctOrder.length; i++) {
      if (studentAnswer[i] !== correctOrder[i]) return false;
    }
    return true;
  }


  renderQuestions() {
    if (this.state.isLoading) {
      return (<Loading />);
    } else if (this.state.errorLoading) {
      return (
        <div className="row">
          <h4 className="error">{this.state.errorMgs}</h4>
        </div>
      );
    } else { //everything was loaded ok
      //calculate how many correctly answered questions
      let numCorrect = 0;
      this.state.questionsAnswered.forEach(ans => {
        if (ans.correct) numCorrect ++;
      })
      //if all the questions are answered, go to results page
      if (this.state.questionsAnswered.size === this.state.questions.length){
        return this.renderResults(numCorrect, this.state.questionsAnswered.size);
      }

      return (
        <React.Fragment>
          <div className="row">
            <div className="col-12 col-sm-5 col-md-3">
              <p className="pl-4">Answered: {this.state.questionsAnswered.size}/{this.state.questions.length}</p>
            </div>
            <div className="col-12 col-sm-5 col-md-4">
              <p><span className="correct">correct: {numCorrect}</span> /
                <span className="incorrect"> incorrect: {this.state.questionsAnswered.size - numCorrect}</span></p>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <ListGroup>
                {this.state.questions.map(question => {
                  return (<ListGroupItem key={question._id} active={this.state.selectedQuestion._id === question._id}
                    tag="button" onClick={() => this.selectQuestion(question)}
                    action>Question {question.idInExam} {this.props.type === "chapter" ? "("+question.examName+")" : ""}
                  {this.renderCorrectnessLabel(question._id)}</ListGroupItem>);
                })}
              </ListGroup>
            </div>
            <Question questionBody={this.state.selectedQuestion.questionBody}
              questionType={this.state.selectedQuestion.type}
              checkAnswer={this.checkAnswer} correct={this.state.selectedQuestionCorrect}
              studentAnswer={(this.state.questionsAnswered.has(this.state.selectedQuestion._id) &&
                      this.state.questionsAnswered.get(this.state.selectedQuestion._id).studentAnswer)
                      || ""} />
          </div>
        </React.Fragment>
      );
    }
  }

  renderCorrectnessLabel(questionId) {
    if(this.state.questionsAnswered.get(questionId)) {
      return this.state.questionsAnswered.get(questionId).correct ?
        <span className="fa fa-check correct"></span> :
        <span className="fa fa-times incorrect"></span>
    }
    return null;
  }

  renderResults(numCorrect, total) {
    return (
      <div className="row">
        <div className="col-12 mt-5 mb-5">
          <h4 className="text-center">Congrats! You answered all the questions.</h4>
          <h4 className="text-center">Score: <b>{numCorrect/total*100}%</b></h4>
        </div>
        <div className="col-sm-6 col-12">
          <div className="link-button">
            <NavLink to={`/practice/${this.props.courseId}/${this.props.type}/${this.props.id}`}>Try again</NavLink>
          </div>
        </div>
        <div className="col-sm-6 col-12">
          <div className="link-button">
            <NavLink to={`/practice/${this.props.courseId}`}>Practice something else</NavLink>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="container mt-5">
        <Breadcrumb>
          <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
          <BreadcrumbItem><Link to="/practice">Practice</Link></BreadcrumbItem>
          <BreadcrumbItem><Link to={`/practice/${this.props.courseId}`}>{this.props.courseId}</Link></BreadcrumbItem>
          <BreadcrumbItem active>{this.props.type === "exam" ? this.props.examName : this.props.chapterName}</BreadcrumbItem>
        </Breadcrumb>
        {this.renderQuestions()}
      </div>
    );
  }
}

export default PracticeExam;
