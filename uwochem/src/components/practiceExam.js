import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import {Breadcrumb, BreadcrumbItem, ListGroup, ListGroupItem,
  Form, FormGroup, Input, Button, Label} from 'reactstrap';
import {QUESTIONS} from '../shared/questions';


class PracticeExam extends Component {

  constructor(props) {
    super(props);

    console.log(window);

    this.state = {
      questions: QUESTIONS,
      question: Function('React', QUESTIONS[0].question.join('\n'))(React),
      correct: undefined
    };
    this.checkAnswer = this.checkAnswer.bind(this);
  }

  checkAnswer(event) {
    //TODO: this is just the numeric type. Do string and MC
    let studentAnswer = Number.parseFloat(this.answer.value);
    let correctAnswer = Number.parseFloat(this.state.question.answer);
    let error = Math.abs(studentAnswer - correctAnswer)/correctAnswer;
    let ansLabel = null;
    if (error < 0.02) { //correct
      this.setState({correct: true});
      ansLabel = "fa fa-check fa-lg";
    } else {
      this.setState({correct: false});
      ansLabel = "fa fa-times fa-lg";
    }
    ReactDOM.render(<span className={ansLabel}></span>, document.getElementById("ansLabel"));
    event.preventDefault();
  }

  render() {

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
            <ListGroupItem active tag="a" href="#" action>Question 1</ListGroupItem>
            <ListGroupItem disabled tag="a" href="#" action>Question 2</ListGroupItem>
          </ListGroup>
          </div>
          <div className="col-9">
            <div>{this.state.question.description}</div>
            <Form onSubmit={this.checkAnswer}>
              <FormGroup>
                <Label htmlFor="answer">m = </Label>
                <Input valid={!(this.state.correct === undefined) && this.state.correct}
                  invalid={!(this.state.correct === undefined) && !this.state.correct}
                  type="text" name="answer" id="answer" placeholder="Your answer"
                  innerRef={(input) => this.answer = input}>
                </Input>
                <Button type="submit" value="submit" color="primary">Submit</Button>
                <div id="ansLabel"></div>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default PracticeExam;
