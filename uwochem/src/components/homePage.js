import React from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron} from 'reactstrap';

function HomePage() {
  return (
    <Jumbotron>
      <div className="container-fluid p-0">
        <div className="row mt-5 pt-5 ml-5 pl-5">
          <div className="col-12">
            <h2 className="display-2">UWO Chemistry</h2>
          </div>
          <div className="col-12">
            <h3 className="display-3">1301 &amp; 1302</h3>
          </div>
          <div className="col-xs-12 col-md-8">
            <h3>Practice solving test questions with detailed feedback and step-by-step solutions, find useful tutorial links.
              Get 100% ready for the exam!</h3>
          </div>
          <div className="col-xs-12 col-md-3">
            <Link to="/practice" className="btn btn-primary btn-lg" role="button">Start practicing &raquo;</Link>
          </div>
        </div>
      </div>
    </Jumbotron>
  );
}

export default HomePage;
