import React from 'react';
import {Container, Row, Col, Jumbotron, Button} from 'reactstrap';
import Practice from './Practice/Practice';
import About from './About';

function Home() {
  return (
    <React.Fragment>
      <Jumbotron className="mt-5 p-0">
        <Col className="background m-0 p-0">
          <Col className="shade">
            <Container>
              <Row>
                <Col xs="12">
                  <h2 className="display-2">UWO Chemistry</h2>
                </Col>
                <Col xs="12">
                  <h3 className="display-3">1301 &amp; 1302</h3>
                </Col>
                <Col xs="12" md="8">
                  <h3>Practice solving test questions with detailed feedback and
                    step-by-step solutions, find useful tutorial links.
                    Get 100% ready for the exam!</h3>
                </Col>
                <Col xs="12" md="3">
                  <Button color="primary" size="lg" block
                    onClick={() => {
                      let practice = document.getElementById("practice");
                      practice.scrollIntoView({behavior: "smooth"});
                    }}>
                    <b>Start &raquo;</b>
                  </Button>
                </Col>
              </Row>
            </Container>
          </Col>
        </Col>
      </Jumbotron>
      <Practice />
      <About />
    </React.Fragment>
  );
}

export default Home;
