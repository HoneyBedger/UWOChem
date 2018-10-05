import React from 'react';
import {NavLink} from 'react-router-dom';
import {Container, Row, Col, Card, CardTitle, CardBody, CardText,
  Form, FormGroup, Input, Label} from 'reactstrap';

function About() {
  return (
    <Container id="about" className="mt-5 mb-5">
      <Row>
        <Card className="pt-5 pb-4">
          <CardTitle className="pl-4">About this website</CardTitle>
          <CardBody>
            <Row>
              <Col lg={10} md={9} xs={6}>
                <CardText>
                  This website was created as a pet project by a former
                  MSc chemistry student at Western. I used to do computational chemistry
                  research and tutor Chem 1301 and 1302,
                  but now I&#8217;m switching to web-development.<br/>
                  Hope you find this stuff useful &#x1F600;<br/>
                  If you have any comments or request, please send them in the feedback form
                  below.
                </CardText>
              </Col>
              <Col lg={2} md={3} xs={6}>
                <img src={require("../images/darya.jpg")} style={{maxWidth: "100%"}}
                  alt="Darya Komsa"/>
              </Col>
            </Row>
            <Form className="mt-5">
              <FormGroup row>
                <Label for="feedback" sm={2} xs={12} className="text-right"
                  style={{color: "#2c9118"}}><b>Your Feedback</b></Label>
                <Col sm={10} xs={12}>
                  <Input type="textarea" name="feedback" id="feedback" rows="5"/>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="email" sm={2} xs={12} className="text-right"
                  style={{color: "#2c9118"}}><b>Email</b><br/><i>(optional)</i></Label>
                <Col sm={10} xs={12}>
                  <Input type="email" name="email" id="email"/>
                </Col>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>
      </Row>
    </Container>
  );
}

export default About;
