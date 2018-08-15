import React, {Component} from 'react';
import {Form, FormGroup, Input, Button, Label, Col,
  InputGroup, InputGroupAddon} from 'reactstrap';


class Question extends Component {

  constructor(props) {
    super(props);
    this.state = {
      studentAnswer: this.props.studentAnswer
    }
  }

  //update the value of the input if a new question is selected
  componentDidUpdate(prevProps) {
    if (this.props.question != prevProps.question) {
      this.setState({
        studentAnswer: this.props.studentAnswer
      });
    }
  }

  render() {
    const feedback = (
      <div className="mt-5">
        <h4>Solution</h4>
        {this.props.question.feedback}
      </div>
    );

    //label the answer as correct/incorrect or nothing
    let correctLabel = null;
    if (this.props.correct !== undefined) {
      correctLabel = this.props.correct ? (<span className="fa fa-check fa-lg"></span>) : (<span className="fa fa-times fa-lg"></span>);
    }

    return (
      <div className="col-9">
        <div>{this.props.question.description}</div>
        <Form inline>
          <FormGroup className="mr-2">
            <Label htmlFor="answer">{this.props.question.answer.label} = </Label>
            <InputGroup>
              <Input valid={!(this.props.correct === undefined) && this.props.correct}
                invalid={!(this.props.correct === undefined) && !this.props.correct}
                type="text" name="answer" id="answer" placeholder="Your answer"
                value={this.state.studentAnswer}
                onChange={(event) => this.setState({studentAnswer: event.target.value})}>
              </Input>
              {this.props.question.answer.units ?
                <InputGroupAddon addonType="append">{this.props.question.answer.units}</InputGroupAddon>
                : null}
              <InputGroupAddon addonType="append">
                <Button type="button" value="submit" color="primary"
                  onClick={() => this.props.checkAnswer(this.state.studentAnswer)}>Submit</Button>
              </InputGroupAddon>
            </InputGroup>
            {correctLabel}
          </FormGroup>
        </Form>
        {this.props.correct === undefined ? null : feedback}
      </div>
    );
  }
}

export default Question;
