import React, {Component} from 'react';
import {Form, FormGroup, Input, Button, Label, InputGroup, InputGroupAddon} from 'reactstrap';


class FieldString extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentAnswer: this.props.studentAnswer
    }
  }

  //update the value of the input if a new question is selected
  componentDidUpdate(prevProps) {
    if (this.props.studentAnswer !== prevProps.studentAnswer) {
      this.setState({
        studentAnswer: this.props.studentAnswer
      });
    }
  }

  render() {
    return (
      <Form inline>
        <FormGroup className="mr-2">
          {this.props.answer.label ? <Label htmlFor="answer">{this.props.answer.label} = </Label> : null}
          <InputGroup>
            <Input valid={!(this.props.correct === undefined) && this.props.correct}
              invalid={!(this.props.correct === undefined) && !this.props.correct}
              type="text" placeholder="Your answer"
              value={this.state.studentAnswer}
              onChange={(event) => this.setState({studentAnswer: event.target.value})}>
            </Input>
          </InputGroup>
          <Button type="button" value="submit" color="primary"
            onClick={() => this.props.checkAnswer(this.props.answer.answer, this.state.studentAnswer)}>Submit</Button>
        </FormGroup>
      </Form>
    );
  }
}

export default FieldString;
