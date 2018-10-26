import React from 'react';
import {Nav, NavItem, Container, Row, Col} from 'reactstrap';
import {NavLink} from 'react-router-dom';

function Footer() {
  return (
    <footer id="footer">
      <Nav>
        <Container>
          <Row>
            <Nav className="col">
              <NavItem>
                <NavLink to="/home">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/practice/1301">Practice 1301</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/practice/1302">Practice 1302</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/tutorials/1301">Tutorials 1301</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/tutorials/1302">Tutorials 1302</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/about">About</NavLink>
              </NavItem>
            </Nav>
          </Row>
        </Container>
      </Nav>
      <Container>
        <Row className="mt-3 mb-3">
          <Col>
            <a href="https://www.facebook.com/daryakomsa">
              <span className="fa fa-facebook" style={{fontSize: "1.5rem"}}/> Facebook
            </a>
            <a href="https://www.linkedin.com/in/darya-komsa-692997115/">
              <span className="fa fa-linkedin" style={{fontSize: "1.5rem"}}/> Linkedin
            </a>
            <a href="https://github.com/HoneyBedger">
              <span className="fa fa-github" style={{fontSize: "1.5rem"}}/> Github
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
