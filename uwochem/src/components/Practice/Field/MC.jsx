import React, {Component} from 'react';
import {Form, FormGroup, Input, Button, Label, InputGroup, InputGroupAddon} from 'reactstrap';

class FieldMC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentAnswer: this.props.studentAnswer
    }
    this.shuffleOptions();
    this.changeAnswer = this.changeAnswer.bind(this);
  }

  //update the value of the input if a new question is selected
  componentDidUpdate(prevProps) {
    if (this.props.studentAnswer === undefined) this.shuffleOptions();
    if (this.props.studentAnswer !== prevProps.studentAnswer) {
      this.setState({
        studentAnswer: this.props.studentAnswer
      });
    }
  }

  changeAnswer(id) {
    this.setState({studentAnswer: id});
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
                  <Input type="radio" name="answer"
                    value={option.id}
                    checked={this.state.studentAnswer === option.id}
                    valid={!(this.props.correct === undefined) && this.props.correct}
                    invalid={!(this.props.correct === undefined) && !this.props.correct}
                    onClick={() => this.changeAnswer(option.id)} />{' '}
                  {option.text}
                </Label>
              </FormGroup>
            );
          })}
          <Button type="button" value="submit" color="primary" className="mt-3"
            onClick={() => this.props.checkAnswer(this.props.options, this.state.studentAnswer)}>Submit</Button>
      </FormGroup>
    );
  }
}

export default FieldMC;
