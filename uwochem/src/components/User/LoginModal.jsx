import React, {Component} from 'react';
import {Input, Button, Label, FormGroup, FormFeedback,
  Row, Col, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import {GoogleLogin} from 'react-google-login';
import TwitterLogin from 'react-twitter-auth';
import config from '../../config';
import SignupModal from './SignupModal';
import ValidatedForm from '../ValidatedForm';


class LoginModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      signUp: false,
      errorMsg: ''
    };
    this.loginWithPassword = this.loginWithPassword.bind(this);
    this.loginWithGoogle = this.loginWithGoogle.bind(this);
    this.loginWithFacebook = this.loginWithFacebook.bind(this);
    this.loginWithTwitter = this.loginWithTwitter.bind(this);
    this.onLoginFailure = this.onLoginFailure.bind(this);
    this.afterLogin = this.afterLogin.bind(this);
    this.signUp = this.signUp.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isOpen !== this.props.isOpen) {
      this.setState({signUp: false, errorMsg: ''});
    }
  }

  alreadyLoggedIn() {
    if (window.localStorage.getItem('userToken')) {
      this.afterLogin({success: true, err: null});
      return true;
    }
    return false;
  }

  afterLogin(result)  {
    if (result.err) this.setState({errorMsg: result.err.message});
    else this.props.toggle();
  }

  loginWithPassword(username, password) {
    console.log("logging in with password");
    if (this.alreadyLoggedIn()) return;
    fetch('/users/login/', {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({username, password})})
    .then(res => this.props.login(res, this.afterLogin));
  }

  loginWithFacebook(res) {
    if (this.alreadyLoggedIn()) return;
    console.log("facebook login:", res);
    const options = {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({access_token: res.accessToken}),
      model: 'cors'
    };
    fetch('/users/facebook', options)
    .then(res => this.props.login(res, this.afterLogin));
  }

  loginWithGoogle(res) {
    if (this.alreadyLoggedIn()) return;
    console.log("google login:", res.tokenObj.id_token);
    const options = {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({id_token: res.tokenObj.id_token}),
      model: 'cors'
    };
    fetch('/users/google', options)
    .then(res => this.props.login(res, this.afterLogin));
  }

  loginWithTwitter(res) {
    res.json()
    .then(res => this.props.login(res, this.afterLogin));
  };

  onLoginFailure(err) {
    this.setState({errorMsg: err.message});
  }

  signUp() {
    this.setState({signUp: true});
  }

  render() {
    if (this.state.signUp) {
      return (
        <SignupModal toggle={this.props.toggle} isOpen={this.props.isOpen}
          loginWithPassword={this.loginWithPassword}/>
      );
    } else {
      return (
        <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} backdrop={true}>
          <ModalHeader toggle={this.props.toggle}>Login</ModalHeader>
          <ModalBody className="mt-3 mb-3 pl-5 pr-5">
            <ValidatedForm submit={() => this.loginWithPassword(this.username.value, this.password.value)}>
              <Row>
                <Col className="mb-2 pl-0 error pl-3">{this.state.errorMsg}</Col>
              </Row>
              <FormGroup row>
                <Label for="username" sm={2}>Username</Label>
                <Col sm={10}>
                  <Input className="input-oneline" type="text" name="username"
                    placeholder="Username" innerRef={input => {this.username = input}}
                    required />
                  <FormFeedback className="ml-2"/>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="password" sm={2}>Password</Label>
                <Col sm={10}>
                  <Input className="input-oneline" type="password" name="password"
                    placeholder="Password" innerRef={input => {this.password = input}}
                    required/>
                  <FormFeedback className="ml-2"/>
                </Col>
              </FormGroup>
              <Row>
                <Col sm={{size: 10, offset: 2}} xs={{size: 12, offset: 0}} className="mt-4 pl-4">
                  <Button color="primary" type="submit">Sign in</Button>{' '}
                  <Button outline color="secondary" onClick={this.props.toggle}>Cancel</Button>
                </Col>
              </Row>
            </ValidatedForm>
            <Row className="mt-5">
              <Col xs={{size: 10, offset: 2}} className="mb-3">
                <p>Or sign in with</p>
              </Col>
              <Col xs={{size: 3, offset: 2}} >
                <FacebookLogin appId={config.oAuth.facebook.clientId} autoLoad={false}
                  fields="name,picture" callback={this.loginWithFacebook}
                  onClick={() => {}}
                  render={renderProps => (
                    <button className="btn-social-icon btn-facebook btn-lg"
                      onClick={renderProps.onClick}>
                      <span className="fa fa-facebook"></span>
                    </button>)} />
              </Col>
              <Col xs={3}>
                <GoogleLogin clientId={config.oAuth.google.clientId}
                  onSuccess={this.loginWithGoogle} onFailure={this.onLoginFailure}
                  scope="profile email"
                  className="btn-social-icon btn-google btn-lg"
                  onRequest={()=> console.log("loading...")} offline={false}
                  approvalPrompt="force" responseType="id_token"
                  prompt={"consent"}>
                  <span className="fa fa-google"></span>
                </GoogleLogin>
              </Col>
              <Col xs={3}>
                <TwitterLogin loginUrl="https://localhost:3363/users/twitter"
                  requestTokenUrl="https://localhost:3363/users/twitter/reverse"
                  onSuccess={this.loginWithTwitter} onFailure={this.onLoginFailure}
                  className="btn-social-icon btn-twitter btn-lg"
                  text="" children={<span className="fa fa-twitter"></span>}/>
              </Col>
            </Row>
          </ModalBody>
          <ModalFooter className="pt-1 pb-0 pl-5 pr-5">
            <Row>
              <Col xs={12}>
                <p>Do not have an account? <Button color="link" onClick={this.signUp}>Sign up</Button></p>
              </Col>
            </Row>
          </ModalFooter>
        </Modal>
      );
    }
  }

}

export default LoginModal;
