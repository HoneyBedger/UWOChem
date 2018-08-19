import React, {Component} from 'react';
import {Form, FormGroup, Input, Button, Label, InputGroup, FormFeedback} from 'reactstrap';

class FieldMC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentAnswer: this.props.studentAnswer
    }
    this.shuffleOptions();
    this.changeStudentAnswer = this.changeStudentAnswer.bind(this);
  }

  //update the value of the input if a new question is selected
  componentDidUpdate(prevProps) {
    if (this.props.studentAnswer !== prevProps.studentAnswer) {
      this.setState({
        studentAnswer: this.props.studentAnswer
      });
    }
  }

  changeStudentAnswer(id) {
    if (!this.state.studentAnswer || this.state.studentAnswer.indexOf(id) === -1) {
      this.setState({studentAnswer: this.state.studentAnswer.concat(id)});
    } else {
      let idx = this.state.studentAnswer.indexOf(id);
      this.setState(
        {studentAnswer: this.state.studentAnswer.slice(0, idx).concat(this.state.studentAnswer.slice(idx+1))});
    }
  }

  shuffleOptions() { //Fisher-Yates shuffle
    for (let i = this.props.options.length - 1; i > 0; i--) {
      let randIdx = Math.floor(Math.random()*(i + 1));
      let tmp = this.props.options[i];
      this.props.options[i] = this.props.options[randIdx];
      this.props.options[randIdx] = tmp;
    }
  }

  render() {
    return (
      <FormGroup tag="fieldset">
        {this.props.options.map(option => {
          return (
            <FormGroup key={this.props.options.indexOf(option)} check>
              <Label check>
                <Input type="checkbox"
                  id={option.id} value={option.id}
                  checked={this.state.studentAnswer.indexOf(option.id) !== -1}
                  valid={!(this.props.correct === undefined) && this.props.correct}
                  invalid={!(this.props.correct === undefined) && !this.props.correct}
                  onClick={(event) => this.changeStudentAnswer(option.id)} />{' '}
                {option.text}
              </Label>
              <FormFeedback valid>Correct!</FormFeedback>
            </FormGroup>
          );
        })}
        <FormGroup check>
          <Label check>
            <Input type="radio"
              checked={!this.state.studentAnswer || this.state.studentAnswer.length === 0}
              onClick={(event) => {this.setState({studentAnswer: []})}} />{' '}
            None of the above.
          </Label>
        </FormGroup>
        <Button type="button" value="submit" color="primary" className="mt-3"
          onClick={() => this.props.checkAnswer(this.props.options, this.state.studentAnswer)}>Submit</Button>
      </FormGroup>
    );
  }
}

export default FieldMC;
