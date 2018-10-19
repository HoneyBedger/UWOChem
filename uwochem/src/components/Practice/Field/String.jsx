import React, {Component} from 'react';
import {Col, FormGroup, Input, Button, Label, InputGroup, InputGroupAddon} from 'reactstrap';
import CheckAnswerButton from './CheckAnswerButton';


class FieldString extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let answer = this.props.answer;
    let disabled = !!this.props.studentAnswer;
    return (
      <React.Fragment>
        <FormGroup row>
          {answer.label &&
            <Label for="answer" lg={2} md={3} xs={4} className="text-right">{answer.label} = </Label>}
          <Col lg={4} md={6} xs={8} className={answer.label && "p-0"}>
            <InputGroup>
              <Input valid={this.props.correct} invalid={this.props.incorrect}
                className="m-0" disabled={disabled} type="text" placeholder="Your answer"
                value={this.props.studentAnswer || this.state.newStudentAnswer}
                onChange={(event) => this.setState({newStudentAnswer: event.target.value})}>
              </Input>
              {answer.units &&
                <InputGroupAddon addonType="append">{answer.units}</InputGroupAddon>}
            </InputGroup>
          </Col>
        </FormGroup>
        <CheckAnswerButton size={answer.label && {lg: {offset: 2}, md: {offset: 3}, xs: {offset: 4}}}
          submit={() => this.props.checkAnswer(answer.answer, this.state.newStudentAnswer)}
          disabled={disabled} correct={this.props.correct} incorrect={this.props.incorrect}/>
      </React.Fragment>
    );
  }
}

export default FieldString;
