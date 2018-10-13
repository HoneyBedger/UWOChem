import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Container, Row, Col, Breadcrumb, BreadcrumbItem, ListGroup,
  ListGroupItem} from 'reactstrap';


function PracticeCourse(props) {
  const courseId = props.courseId;
  const exams = props.exams.filter(exam => exam.courseId === courseId);
  const chapters = props.chapters.filter(chapter => chapter.courseId === courseId);

  return (
    <Container className="mt-5 pt-3">
      <Breadcrumb>
        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
        <BreadcrumbItem><Link to="#">Practice</Link></BreadcrumbItem>
        <BreadcrumbItem active>{courseId}</BreadcrumbItem>
      </Breadcrumb>
      <Row className="mt-5 mb-5">
        <Col md={6}>
          <h4>Choose an exam:</h4>
          <ListGroup>
            {exams.map(exam => {
              return (
                <ListGroupItem key={exam.examId}>
                  <Link to={`/practice/${courseId}/exam/${exam.examId}`}>{exam.name}</Link>
                </ListGroupItem>
              );
            })}
          </ListGroup>
        </Col>
        <Col md={6}>
          <h4>Or a chapter:</h4>
          <ListGroup>
            {chapters.map(chapter => {
              return (
                <ListGroupItem key={chapter.id}>
                  <Link to={`/practice/${courseId}/chapter/${chapter.id}`}>
                    {chapter.id === -1 ? chapter.name : `Chapter ${chapter.id}: ${chapter.name}`}</Link>
                </ListGroupItem>
              );
            })}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default PracticeCourse;
