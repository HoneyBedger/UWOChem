import React from 'react';
import {Row, Col, Button} from 'reactstrap';

function CheckAnswerButton (props) {
  return (
    <Row className="mt-3">
      <Col xs={12}>
      <Button type="submit" color="primary"
        onClick={props.submit} disabled={props.disabled}>Submit</Button>
      {props.correct && <span className="fa fa-check fa-lg correct" style={{paddingLeft: "1rem"}}/>}
      {props.incorrect && <span className="fa fa-times fa-lg incorrect" style={{paddingLeft: "1rem"}}/>}
      </Col>
    </Row>
  );
}

export default CheckAnswerButton;
