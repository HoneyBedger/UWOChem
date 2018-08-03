import React from 'react';
import {Link} from 'react-router-dom';

function Practice() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-6 col-12">
          <Link to="/practice/1301"><h4>1301</h4></Link>
        </div>
        <div className="col-sm-6 col-12">
          <Link to="/practice/1302"><h4>1302</h4></Link>
        </div>
      </div>
    </div>
  );
}

export default Practice;
