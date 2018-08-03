import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';


function PracticeCourse(props) {
  const courseId = props.courseId;
  const exams = props.exams.filter(exam => exam.courseId === courseId);

  return (
    <div className="container mt-5">
      <Breadcrumb>
        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
        <BreadcrumbItem><Link to="/practice">Practice</Link></BreadcrumbItem>
        <BreadcrumbItem active>{courseId}</BreadcrumbItem>
      </Breadcrumb>
      <div className="row">
        <div className="col-md-6">
          <ul>
            {exams.map(exam => {
              return (<li key={exam.examId}><Link to={`/practice/${courseId}/${exam.examId}`}>{exam.name}</Link></li>);
            })}
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

export default PracticeCourse;
