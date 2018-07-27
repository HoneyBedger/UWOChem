import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';

function Practice1301() {
  return (
    <div className="container mt-5">
      <Breadcrumb>
        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
        <BreadcrumbItem><Link to="/practice">Practice</Link></BreadcrumbItem>
        <BreadcrumbItem active>1301</BreadcrumbItem>
      </Breadcrumb>
      <div className="row">
        <div className="col-md-6">
          <ul>
            <li>Midterm 2013</li>
            <li>Midterm 2014</li>
            <li>Final 2014</li>
            <li>Final 2015</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h4>By topic:</h4>
          <ol>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Practice1301;
