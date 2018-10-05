import React, {Component} from 'react';
import {Input, InputGroup, InputGroupAddon, Button, Label, FormGroup, Form,
  Row, Col, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {Link, Redirect} from 'react-router-dom';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import {GoogleLogin} from 'react-google-login';
import TwitterLogin from 'react-twitter-auth';
import config from '../../config';


class LoginModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      touched: {
        username: false,
        password: false
      }
    };
    this.login = this.login.bind(this);
    this.loginWithPassword = this.loginWithPassword.bind(this);
  }

  loginWithPassword(username, password) {
    fetch('/users/login/', {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({username, password})})
    .then(res => this.login(res));
  }

  facebookCallback = (res) => {
    console.log(res);
    const options = {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({access_token: res.accessToken}),
      model: 'cors'
    };
    fetch('/users/facebook', options)
    .then(res => this.login(res));
  }

  googleCallback = (res) => {
    console.log(res.tokenObj.id_token);
    const options = {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({id_token: res.tokenObj.id_token}),
      model: 'cors'
    };
    fetch('/users/google', options)
    .then(res => this.login(res));
  }

  twitterCallback = (res) => {
    res.json()
    .then(res => this.login(res));
  }

  onFailure = (err) => {
    console.log(err);
    this.setState({errorMgs: err.message});
  }

  login = (res) => {
    if (res.status === 401) {
      this.setState({errorMsg: "Sorry, your credentials do not match our data."});
    } else if (!res.ok) {
      this.setState({errorMsg: "Sorry, something went wrong. Please try again later."});
    } else {
      console.log(res);
      res.json()
      .then(res => {
        if (res.err) {
          this.setState({errorMgs: res.err});
        } else {
          window.localStorage.setItem('user', JSON.stringify(res.user));
          window.localStorage.setItem('userToken', res.user.token);
          this.props.loginMain();
        }
      })
      .catch(err => {
        this.setState({errorMgs: err.message});
      });
    }
  }

  render() {
    console.log("redirecting to " + this.props.redirectTo);
    if (this.props.loggedIn) {
      console.log("logged in");
      if (this.props.redirectTo) {
        console.log("redirecting to " + this.props.redirectTo);
        return <Redirect to={this.props.redirectTo} />;
      } else if (this.props.isOpen) {
        this.props.toggle();
      }
    }

    return (
      <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} backdrop={true}>
        <ModalHeader toggle={this.props.toggle}>Login</ModalHeader>
        <ModalBody className="mt-4 mb-5 pl-5 pr-5">
          <Col style={{height: "1.5em", color: "#d60e0e"}} className="mb-2 pl-0">{this.state.errorMgs}</Col>
          <Form>
            <FormGroup row>
              <Label for="username" sm={2}>Username</Label>
              <Col sm={10}>
                <Input className="input-oneline" type="text" name="username"
                  placeholder="Username" innerRef={input => {this.username = input}} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="password" sm={2}>Password</Label>
              <Col sm={10}>
                <Input className="input-oneline" type="password" name="password"
                  placeholder="Password" innerRef={input => {this.password = input}} />
              </Col>
            </FormGroup>
          </Form>
          <Row className="mt-5">
            <Col xs={{size: 10, offset: 2}} className="mb-3">
              <p>Or sign in with</p>
            </Col>
            <Col xs={{size: 3, offset: 2}} >
              <FacebookLogin appId={config.oAuth.facebook.clientId} autoload={false}
                fields="name,picture" callback={this.facebookCallback}
                render={renderProps => (
                  <button className="btn-social-icon btn-facebook btn-lg"
                    onClick={renderProps.onClick}>
                    <span className="fa fa-facebook"></span>
                  </button>)} />
            </Col>
            <Col xs={3}>
              <GoogleLogin clientId={config.oAuth.google.clientId}
                onSuccess={this.googleCallback} onFailure={this.onFailure}
                scope="profile email"
                className="btn-social-icon btn-google btn-lg">
                <span className="fa fa-google"></span>
              </GoogleLogin>
            </Col>
            <Col xs={3}>
              <TwitterLogin loginUrl="https://localhost:3363/users/twitter"
                requestTokenUrl="https://localhost:3363/users/twitter/reverse"
                onSuccess={this.twitterCallback} onFailure={this.onFailure}
                className="btn-social-icon btn-twitter btn-lg"
                text="" children={<span className="fa fa-twitter"></span>}/>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter className="pl-5 pr-5">
          <div className="row">
            <div className="col-12">
              <Button color="primary" onClick={() => this.loginWithPassword(this.username.value, this.password.value)}>Sign in</Button>{' '}
              <Button outline color="secondary" onClick={this.props.toggle}>Cancel</Button>
            </div>
            <div className="col-12 mt-3">
              <p>Do not have an account? <Link to="#">Sign up</Link></p>
            </div>
          </div>
        </ModalFooter>
      </Modal>
    );
  }

}

export default LoginModal;
