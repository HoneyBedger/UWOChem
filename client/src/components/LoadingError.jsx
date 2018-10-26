import React from 'react';
import {Row, Col} from 'reactstrap';
import Feedback from './Feedback';

const LoadingError = () => {

  return (
    <React.Fragment>
      <Row>
        <Col xs={12}>
          <h5>Sorry, something went wrong.</h5>
          <h5>Please let us know about this problem by sending
          the feedback below, and we will adress the issue.</h5>
        </Col>
      </Row>
      <Feedback />
    </React.Fragment>
  );
};

export default LoadingError;
