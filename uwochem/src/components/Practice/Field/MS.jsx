import React, {Component} from 'react';
import {FormGroup, Input, Label} from 'reactstrap';
import CheckAnswerButton from './CheckAnswerButton';

class FieldMS extends Component {
  constructor(props) {
    super(props);
    console.log("MS studentAnswer", this.props.studentAnswer);
    this.state = {
      newStudentAnswer: []
    };
    if (!this.props.studentAnswer) this.shuffleOptions();
    this.changeAnswer = this.changeAnswer.bind(this);
  }

  changeAnswer(id) {
    let idString = String(id);
    let newStudentAnswer = this.state.newStudentAnswer;
    if (!newStudentAnswer.includes(idString)) {
      this.setState({newStudentAnswer: newStudentAnswer.concat(idString)});
    } else {
      let idx = newStudentAnswer.indexOf(idString);
      this.setState(
        {newStudentAnswer: newStudentAnswer.slice(0, idx).concat(newStudentAnswer.slice(idx + 1))});
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
    let disabled = !!this.props.studentAnswer;
    return (
      <React.Fragment>
        <p><i>Select all that apply.</i></p>
        <FormGroup tag="fieldset">
          {this.props.options.map(option => {
            console.log("this.props.studentAnswer", this.props.studentAnswer);
            let checked = (this.props.studentAnswer && this.props.studentAnswer.includes(String(option.id))) ||
              (this.state.newStudentAnswer.includes(String(option.id)));
            return (
              <FormGroup key={this.props.options.indexOf(option)} check disabled={disabled}>
                <Label check>
                  <Input type="checkbox" disabled={disabled}
                    id={option.id} value={option.id} checked={checked}
                    onClick={() => this.changeAnswer(option.id)} />
                  <span className={"form-check-input" +
                    (this.props.correct ? " is-valid" : "") +
                    (this.props.incorrect ? " is-invalid" : "")} />{' '}
                  {option.text}
                </Label>
              </FormGroup>
            );
          })}
          <FormGroup check disabled={disabled}>
            <Label check>
              <Input type="radio" disabled={disabled}
                checked={(this.props.studentAnswer && this.props.studentAnswer.length === 0) ||
                  (!this.props.studentAnswer && this.state.newStudentAnswer.length === 0)}
                onChange={() => {this.setState({newStudentAnswer: []})}} />
              <span className={"form-check-input" +
                (this.props.correct ? " is-valid" : "") +
                (this.props.incorrect ? " is-invalid" : "")} />{' '}
              <p>None of the above.</p>
            </Label>
          </FormGroup>
          <CheckAnswerButton
            submit={() => this.props.checkAnswer(this.props.options, this.state.newStudentAnswer)}
            disabled={disabled} correct={this.props.correct} incorrect={this.props.incorrect}/>
        </FormGroup>
      </React.Fragment>
    );
  }
}

export default FieldMS;
