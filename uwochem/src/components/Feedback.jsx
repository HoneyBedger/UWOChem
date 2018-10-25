import React, {Component} from 'react';
import {Row, Col, FormGroup, Input, Label, Button, FormFeedback} from 'reactstrap';
import ValidatedForm from './ValidatedForm';

class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {feedbackMsg: "", feedbackFailed: false};
    this.submitFeedback = this.submitFeedback.bind(this);
  }

  submitFeedback() {
    fetch('/feedback', {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({content: this.feedback.value, email: this.email.value})})
    .then(res => {
      if (res.ok) {
        this.setState({
          feedbackMsg: "Thanks for the feedback!",
          feedbackFailed: false
        });
      } else {
        this.setState({
          feedbackMsg: "Sorry, something went wrong when submitting your feedback.",
          feedbackFailed: true
        });
      }
    });
  }

  render() {
    return (
      <ValidatedForm className="mt-5" submit={this.submitFeedback}>
        <FormGroup row>
          <Label for="feedback" lg={2} md={3} xs={12} className="text-right"
            style={{color: "rgb(110,146,120)"}}><b>Your Feedback</b></Label>
          <Col lg={8} md={9} xs={12}>
            <Input innerRef={input => {this.feedback = input}}
              type="textarea" name="feedback" id="feedback" rows="5"
              required />
            <FormFeedback className="ml-2" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="email" lg={2} md={3} xs={12} className="text-right"
            style={{color: "rgb(110,146,120)"}}><b>Email</b><br/><i>(optional)</i></Label>
          <Col lg={8} md={9} xs={12}>
            <Input type="email" name="email" id="email"
              innerRef={input => {this.email = input}}
              placeholder="sendme@response.ca"/>
            <FormFeedback className="ml-2" />
          </Col>
        </FormGroup>
        <Col lg={{size: 2, offset: 2}} md={{size: 3, offset: 3}} xs={{size: 5, offset: 0}}>
          <Button block className="btn-background" size="lg">Send</Button>
        </Col>
        {this.state.feedbackMsg ?
          <Row className="mt-3"><Col lg={{offset: 2}} md={{offset: 3}}>
            <span className={this.state.feedbackFailed ? "incorrect ml-4" : "correct ml-4"}>{this.state.feedbackMsg}</span>
          </Col></Row> :
          null
        }
      </ValidatedForm>
    );
  }

}

export default Feedback;
