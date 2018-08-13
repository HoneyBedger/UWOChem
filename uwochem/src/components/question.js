import React, {Component} from 'react';
import {Form, FormGroup, Input, Button, Label} from 'reactstrap';


class Question extends Component {

  render() {
    return (
      <div className="col-9">
        <div>{this.props.question.description}</div>
        <Form>
          <FormGroup>
            <Label htmlFor="answer">{this.props.question.ansLabel} = </Label>
            <Input valid={!(this.props.correct === undefined) && this.props.correct}
              invalid={!(this.props.correct === undefined) && !this.props.correct}
              type="text" name="answer" id="answer" placeholder="Your answer"
              innerRef={(input) => this.answer = input}>
            </Input>
            <Button type="button" value="submit" color="primary"
              onClick={(studentAnswer) => this.props.checkAnswer(this.answer.value)}>Submit</Button>
            <div id="ansLabel"></div>
          </FormGroup>
        </Form>
        <div>{this.props.question.feedback}</div>
      </div>
    );
  }
}

export default Question;
