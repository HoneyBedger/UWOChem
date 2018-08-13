import React from 'react';
import {Link} from 'react-router-dom';
import {Container, Row, Col, Jumbotron} from 'reactstrap';

function HomePage() {
  return (
    <Jumbotron className="p-0 m-0">
      <Container fluid>
        <Row className="m-5 p-5">
          <Col xs="12">
            <h2 className="display-2">UWO Chemistry</h2>
          </Col>
          <Col xs="12">
            <h3 className="display-3">1301 &amp; 1302</h3>
          </Col>
          <Col xs="12" md="8">
            <h3>Practice solving test questions with detailed feedback and step-by-step solutions, find useful tutorial links.
              Get 100% ready for the exam!</h3>
          </Col>
          <Col xs="12" md="3">
            <Link to="/practice" className="btn btn-primary btn-lg" role="button">Start practicing &raquo;</Link>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default HomePage;
