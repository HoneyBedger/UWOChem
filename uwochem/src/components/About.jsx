import React from 'react';
import {Container, Row, Col, Card, CardTitle, CardBody, CardText} from 'reactstrap';
import Feedback from './Feedback';

function About(props) {

  return (
    <Container id="about" className="mt-5 pt-5 mb-5">
      <Row>
        <Card className="pt-5 pb-4">
          <CardTitle className="pl-4">About this website</CardTitle>
          <CardBody>
            <Row>
              <Col lg={10} md={9} xs={7}>
                <CardText>
                  This website was created as a pet project by a former
                  MSc chemistry student from Western. I used to do computational
                  chemistry research and tutor Chem 1301 and 1302,
                  but now I&#8217;m switching to web-development.<br/>
                  Hope you find this stuff useful &#x1F600;<br/>
                  If you have any comments or requests, please send them in the feedback form
                  below.
                </CardText>
              </Col>
              <Col lg={2} md={3} xs={5}>
                <img src={require("../images/darya.jpg")} style={{maxWidth: "100%"}}
                  alt="Darya Komsa"/>
              </Col>
            </Row>
            <Feedback />
          </CardBody>
        </Card>
      </Row>
    </Container>
  );

}

export default About;
