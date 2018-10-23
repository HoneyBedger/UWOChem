import React from 'react';
import {Row, Col} from 'reactstrap';

export const Loading = () => {

  return (
    <React.Fragment>
    <Row style={{justifyContent: "center"}}>
      <div className="lds-spinner">
        {Array(12).fill(<div/>)}
      </div>
    </Row>
    <Row className="mt-4" style={{justifyContent: "center"}}>
      <h3>Loading...</h3>
    </Row>
    </React.Fragment>
  );
};
