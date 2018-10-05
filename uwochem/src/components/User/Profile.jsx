import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';

class UserProfile extends Component {
  render() {
    let user = JSON.parse(window.localStorage.getItem('user'));
    let name = user.name || user.username;

    return (
      <Container className="mt-5">
        <Row>
          <Col xs={12} className="profile-header p-0">
            <div>
              <h3>Welcome, {name}!</h3>
            </div>
          </Col>
          <Col md={6} xs={12}>
            <h4>In Progress</h4>
            <ListGroup flush>
              <ListGroupItem>Exam 1</ListGroupItem>
              <ListGroupItem>Exam 2</ListGroupItem>
            </ListGroup>
          </Col>
          <Col md={6} xs={12}>
            <h4>Completed</h4>
            <ListGroup flush>
              <ListGroupItem>Exam 1</ListGroupItem>
              <ListGroupItem>Exam 2</ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Container>);
  }
}

export default UserProfile;
