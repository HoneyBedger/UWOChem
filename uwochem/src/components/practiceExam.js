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
    //questions: QUESTIONS,
    //question: Function('React', QUESTIONS[0].question.join('\n'))(React),
    let questionsFiltered = newQuestions.filter((question) => {
      if (this.props.courseId === question.courseId) {
        return this.props.type === "exam" ? this.props.examName === question.exam : this.props.chapter === question.chapter;
      }
      return false;
    });
    this.state = {
      questions: questionsFiltered,
      selectedQuestion: questionsFiltered[0],
      selectedQuestionCorrect: undefined,
      questionsAnswered: new Map() // key = questionId, value = {correct: true/false, studentAnswer: String}
    };
    this.checkAnswer = this.checkAnswer.bind(this);
  }

  selectQuestion(question) {
    //if the selected question was already answered, look up if it was correct,
    //otherwise correct is undefined
    let correct = undefined;
    if (this.state.questionsAnswered.has(question.id)) {
      correct = this.state.questionsAnswered.get(question.id).correct;
    }
    this.setState({
      selectedQuestion: question,
      selectedQuestionCorrect: correct
    });
  }

  checkAnswer(studentAnswer) {
    //TODO: this is just the numeric type. Do string and MC
    let studentAnswerNumeric = Number.parseFloat(studentAnswer);
    let correctAnswer = this.state.selectedQuestion.question.answer.answer;
    let error = Math.abs(studentAnswerNumeric - correctAnswer)/correctAnswer;
    //assume correct
    let correct = (error < 0.02) ? true : false;

    this.setState({
      questionsAnswered: this.state.questionsAnswered.set(this.state.selectedQuestion.id, {correct, studentAnswer}),
      selectedQuestionCorrect: correct
    });
  };


  render() {
    const questionList = this.state.questions.map(question => {
      return (<ListGroupItem key={question.id} active={this.state.selectedQuestion.id === question.id}
        tag="button" onClick={() => this.selectQuestion(question)}
        action>Question {question.idInExam} {this.props.type === "chapter" ? "("+question.exam+")" : ""}</ListGroupItem>);
    });
    return (
      <div className="container mt-5">
        <Breadcrumb>
          <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
          <BreadcrumbItem><Link to="/practice">Practice</Link></BreadcrumbItem>
          <BreadcrumbItem><Link to={`/practice/${this.props.courseId}`}>{this.props.courseId}</Link></BreadcrumbItem>
          <BreadcrumbItem active>{this.props.type === "exam" ? this.props.examName : this.props.chapterName}</BreadcrumbItem>
        </Breadcrumb>
        <div className="row">
          <div className="col-3">
            <ListGroup>
              {questionList}
            </ListGroup>
          </div>
          <Question question={this.state.selectedQuestion.question}
            checkAnswer={this.checkAnswer} correct={this.state.selectedQuestionCorrect}
            studentAnswer={(this.state.questionsAnswered.has(this.state.selectedQuestion.id) &&
                    this.state.questionsAnswered.get(this.state.selectedQuestion.id).studentAnswer)
                    || ""} />
        </div>
      </div>
    );
  }
}

export default PracticeExam;
