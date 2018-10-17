import React from 'react';
import {NavLink} from 'react-router-dom';
import {Container, Row, Col, Modal, ModalHeader, ModalBody, Button} from 'reactstrap';

function PracticeResults(props) {

  return (
    <Modal id="results" isOpen={props.isOpen} toggle={props.toggle} backdrop={true}>
      <ModalHeader toggle={props.toggle}></ModalHeader>
      <ModalBody>
        <Row id="congrats" className="pb-4 m-0">
          <Col className="text-center">
            <h3>Congrats!</h3>
            <h3>You answered all the questions.</h3>
            <h3>Score: <b>{props.score}%</b></h3>
          </Col>
        </Row>
        <Row id="buttons" className="p-0 m-0">
          <Row className="shade m-0 pt-5 pb-5 pl-0 pr-0">
            <Col sm={6} xs={12}>
              <Button color="primary" className="btn-lg btn-block"
                onClick={props.tryAgain}>Try again</Button>
            </Col>
            <Col sm={6} xs={12}>
              <NavLink role="button" className="btn btn-primary btn-lg btn-block"
                to={props.elseLink}>Practice something else</NavLink>
            </Col>
          </Row>
        </Row>
      </ModalBody>
    </Modal>
  );
}

export default PracticeResults;
