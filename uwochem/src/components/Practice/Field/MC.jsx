import React, {Component} from 'react';
import {FormGroup, Input, Label} from 'reactstrap';
import CheckAnswerButton from './CheckAnswerButton';

class FieldMC extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    if (!this.props.studentAnswer) this.shuffleOptions();
    this.changeAnswer = this.changeAnswer.bind(this);
  }

  changeAnswer(id) {
    this.setState({newStudentAnswer: String(id)});
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
    let disabled = !!this.props.studentAnswer || this.props.correct || this.props.incorrect;
    return (
      <FormGroup tag="fieldset">
          {this.props.options.map(option => {
            let checked = this.props.studentAnswer && this.props.studentAnswer === String(option.id);
            return (
              <FormGroup key={this.props.options.indexOf(option)} check disabled={disabled}>
                <Label check>
                  <Input type="radio" name="answer" disabled={disabled}
                    value={option.id} defaultChecked={checked}
                    onClick={() => this.changeAnswer(option.id)} />
                  <span className={"form-check-input" +
                    (this.props.correct ? " is-valid" : "") +
                    (this.props.incorrect ? " is-invalid" : "")} />{' '}
                  {option.text}
                </Label>
              </FormGroup>
            );
          })}
          <CheckAnswerButton
            submit={() => this.props.checkAnswer(this.props.options.filter(option => option.correct)[0].id, this.state.newStudentAnswer)}
            disabled={disabled} correct={this.props.correct} incorrect={this.props.incorrect}/>
      </FormGroup>
    );
  }
}

export default FieldMC;
