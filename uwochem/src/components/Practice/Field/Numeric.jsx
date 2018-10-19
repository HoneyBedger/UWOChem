import React, {Component} from 'react';
import {Col, FormGroup, Input, Button, Label, InputGroup, InputGroupAddon} from 'reactstrap';
import CheckAnswerButton from './CheckAnswerButton';


class FieldNumeric extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let answer = this.props.answer;
    let disabled = !!this.props.studentAnswer;
    return (
      <React.Fragment>
        {(Math.abs(answer.answer) < 1e-4 || Math.abs(answer.answer) > 1e4) &&
        <p><i>You can enter the answer in scientific notation: 1.0e5 is equivalent to 100000.</i></p>}
        <FormGroup row>
          <Label for="answer" lg={2} md={3} xs={4} className="text-right">{answer.label}&#160;=&#160;</Label>
          <Col lg={4} md={6} xs={8} className="p-0">
            <InputGroup>
              <Input valid={this.props.correct} invalid={this.props.incorrect}
                className="m-0" disabled={disabled} type="number" placeholder="Your answer"
                value={this.props.studentAnswer || this.state.newStudentAnswer}
                onChange={(event) => this.setState({newStudentAnswer: event.target.value})}>
              </Input>
              {answer.units &&
                <InputGroupAddon addonType="append">{answer.units}</InputGroupAddon>}
            </InputGroup>
          </Col>
        </FormGroup>
        <CheckAnswerButton size={{lg: {offset: 2}, md: {offset: 3}, xs: {offset: 4}}}
          submit={() => this.props.checkAnswer(answer.answer, this.state.newStudentAnswer)}
          disabled={disabled} correct={this.props.correct} incorrect={this.props.incorrect}/>
      </React.Fragment>
    );
  }
}

export default FieldNumeric;
