import React, {Component} from 'react';
import {Input, Button, Label, FormGroup, FormFeedback,
  FormText, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import ValidatedForm from '../ValidatedForm';

class UserSignupModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repeatPasswordTouched: false,
      repeatPasswordErr: ''
    };
    this.signUp = this.signUp.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleRepeatBlur = this.handleRepeatBlur.bind(this);
  }

  signUp() {
    console.log("signing up");
    if (!(this.password && this.repeatPassword && this.password.value === this.repeatPassword.value)) {
      this.repeatPassword.classList.add("is-invalid");
      this.setState({repeatPasswordErr: 'The passwords do not match.'});
      return;
    }
    fetch('/users/signup/', {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(
        {username: this.username.value, password: this.password.value, name: this.name.value})
      })
    .then(res => {
      if (!res.ok) {
        res.json().then(res => {
          if (res.err) this.setState({errorMsg: res.err.message});
          else this.setState({errorMsg: "Sorry, something went wrong. Please try again later."});
        });
      } else {
        this.props.loginWithPassword(this.username.value, this.password.value);
      }})
    .catch(err => this.setState({errorMsg: err.message}));
  }

  handlePasswordChange() {
    if (this.state.repeatPasswordTouched && this.password.value !== this.repeatPassword.value) {
      this.repeatPassword.classList.add("is-invalid");
      this.setState({repeatPasswordErr: 'The passwords do not match.'});
    } else {
      if (this.repeatPassword.classList.contains("is-invalid")) this.repeatPassword.classList.remove("is-invalid");
    }
  }

  handleRepeatBlur() {
    this.setState({repeatPasswordTouched: true}, this.handlePasswordChange);
  }

  render() {
    return (
      <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} backdrop={true}>
        <ModalHeader toggle={this.props.toggle}>Sign Up</ModalHeader>
        <ValidatedForm submit={this.signUp}>
          <ModalBody className="mt-3 mb-3 pl-5 pr-5">
            <Row>
              <Col className="mb-2 pl-0 error">{this.state.errorMsg}</Col>
            </Row>
            <FormGroup row>
              <Label for="username" sm={2}>Username</Label>
              <Col sm={10}>
                <Input className="input-oneline" type="text" name="username"
                  placeholder="Username" innerRef={input => {this.username = input}}
                  required minLength="4"/>
                <FormFeedback className="ml-2"/>
                <FormText className="ml-2">Minimum 4 characters.</FormText>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="name" sm={2}>Name (optional)</Label>
              <Col sm={10}>
                <Input className="input-oneline" type="text" name="name"
                  placeholder="Name" innerRef={input => {this.name = input}}/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="password" sm={2}>Password</Label>
              <Col sm={10}>
                <Input className="input-oneline" type="password" name="password"
                  placeholder="Password" innerRef={input => {this.password = input}}
                  required minLength="6" pattern="(?=.*?[0-9])(?=.*?[A-Za-z]).+"
                  onChange={this.handlePasswordChange}/>
                <FormFeedback className="ml-2"/>
                <FormText className="ml-2">Minimum 6 characters, at least one number and one letter.</FormText>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="password" sm={2}>Repeat Password</Label>
              <Col sm={10}>
                <Input className="input-oneline" type="password" name="repeatPassword"
                  placeholder="Password" required innerRef={input => {this.repeatPassword = input}}
                  onChange={this.handlePasswordChange} onBlur={this.handleRepeatBlur}/>
                <FormFeedback className="ml-2">{this.state.repeatPasswordErr}</FormFeedback>
              </Col>
            </FormGroup>
        </ModalBody>
        <ModalFooter className="pl-5 pr-5">
          <Row>
            <Col sm={{size: 10, offset: 2}} xs={{size: 12, offset: 0}} className="pl-4">
              <Button color="primary" type="submit">Sign up</Button>{' '}
              <Button outline color="secondary" onClick={this.props.toggle}>Cancel</Button>
            </Col>
          </Row>
        </ModalFooter>
      </ValidatedForm>
      </Modal>
    );
  }
}

export default UserSignupModal;
