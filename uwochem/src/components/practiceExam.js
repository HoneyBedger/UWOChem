import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import {Breadcrumb, BreadcrumbItem, ListGroup, ListGroupItem,
  Form, FormGroup, Input, Button, Label} from 'reactstrap';
import {QUESTIONS} from '../shared/questions';
import {newQuestions} from '../shared/newQuestions';
import Question from './question';


class PracticeExam extends Component {

  constructor(props) {
    super(props);

    this.state = {
      //questions: QUESTIONS,
      //question: Function('React', QUESTIONS[0].question.join('\n'))(React),
      questions: newQuestions,
      selectedQuestion: newQuestions[0],
      selectedQuestionCorrect: undefined
    };
    this.checkAnswer = this.checkAnswer.bind(this);
  }

  selectQuestion(questionId) {
    this.setState({
      selectedQuestion: this.state.questions[questionId]
    });
  }

  checkAnswer(studentAnswerString) {
    console.log("Checking answer");
    //TODO: this is just the numeric type. Do string and MC
    let studentAnswer = Number.parseFloat(studentAnswerString);
    let correctAnswer = this.state.selectedQuestion.question.answer;
    let error = Math.abs(studentAnswer - correctAnswer)/correctAnswer;
    let ansLabel = null;
    if (error < 0.02) { //correct
      this.setState({selectedQuestionCorrect: true});
      ansLabel = "fa fa-check fa-lg";
    } else {
      this.setState({selectedQuestionCorrect: false});
      ansLabel = "fa fa-times fa-lg";
    }
    //TODO: this shouldn't be handelled via ReactDOM!
    ReactDOM.render(<span className={ansLabel}></span>, document.getElementById("ansLabel"));
  };


  render() {
    let selectedId = this.state.selectedQuestion.id;
    const questionList = this.state.questions.map(question => {
      return (<ListGroupItem key={question.id} active={selectedId === question.id}
        tag="button" onClick={(questionId) => this.selectQuestion(question.id)}
        action>Question {question.idInExam}</ListGroupItem>);
    });
    return (
      <div className="container mt-5">
        <Breadcrumb>
          <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
          <BreadcrumbItem><Link to="/practice">Practice</Link></BreadcrumbItem>
          <BreadcrumbItem><Link to={`/practice/${this.props.courseId}`}>{this.props.courseId}</Link></BreadcrumbItem>
          <BreadcrumbItem active>{this.props.examName}</BreadcrumbItem>
        </Breadcrumb>
        <div className="row">
          <div className="col-3">
            <ListGroup>
              {questionList}
            </ListGroup>
          </div>
          <Question question={this.state.selectedQuestion.question}
            checkAnswer={this.checkAnswer} correct={this.state.selectedQuestionCorrect}/>
        </div>
      </div>
    );
  }
}

export default PracticeExam;
