import React from 'react';
import {NavLink} from 'react-router-dom';
import {Container, Row, Col, ListGroup, ListGroupItem, Progress} from 'reactstrap';

function UserProfile(props) {
  //TODO: do I actually need to fetch a user from DB? or ok to use local obj?
  let user = JSON.parse(window.localStorage.getItem("user"));
  let name = user.name || user.username;
  let completedExams = [], inProgressExams = [], notStartedExams = [];
  let savedExams = new Map();
  user.exams.forEach(exam => {
    savedExams.set(exam.examId, exam.progress);
  });
  for (let exam of props.exams) {
    let id = exam.examId;
    if (savedExams && savedExams.get(id)) {
      if (savedExams.get(id) < 100) {
        inProgressExams.push({...exam, progress: savedExams.get(id)});
      } else completedExams.push(exam);
    } else {
      notStartedExams.push(exam);
    }
  }

  return (
    <Container id="profile" className="mb-5 mt-5 pt-5">
        <Col xs={12} className="profile-header p-0 mt-0 mb-5">
          <div className="row shade m-0 p-0">
            <Col>
              <h1 className="p-3 m-5">Welcome, {name}!</h1>
            </Col>
          </div>
        </Col>
      <Row>
        <Col xs={12} className="mb-5">
          <h4>In Progress</h4>
          <ListGroup flush>
            {inProgressExams.length === 0 ?
              <ListGroupItem>Nothing is in progress</ListGroupItem> :
              inProgressExams.map(exam => {
                return (
                  <ListGroupItem key={exam.examId} className="row">
                    <Col lg={4} md={6} sm={12}>
                      <NavLink to={`/practice/${exam.courseId}/exam/${exam.examId}`}>{exam.courseId} {exam.name}</NavLink>
                    </Col>
                    <Col lg={8} md={6} sm={12}>
                      <Progress value={exam.progress}>{exam.progress}%</Progress>
                    </Col>
                  </ListGroupItem>
                );
              })}
          </ListGroup>
        </Col>
        <Col md={6} xs={12}>
          <h4>Not Started</h4>
          <ListGroup flush>
            {notStartedExams.length === 0 ?
              <ListGroupItem>All exams are started</ListGroupItem> :
              notStartedExams.map(exam => {
              return (
                <ListGroupItem key={exam.examId}>
                  <NavLink to={`/practice/${exam.courseId}/exam/${exam.examId}`}>{exam.courseId} {exam.name}</NavLink>
                </ListGroupItem>
              );
            })}
          </ListGroup>
        </Col>
        <Col md={6} xs={12}>
          <h4>Completed</h4>
          <ListGroup flush>
            {completedExams.length === 0 ?
              <ListGroupItem>Nothing is completed yet</ListGroupItem> :
              completedExams.map(exam => {
              return (
                <ListGroupItem key={exam.examId}>
                  <NavLink to={`/practice/${exam.courseId}/exam/${exam.examId}`}>{exam.courseId} {exam.name}</NavLink>
                </ListGroupItem>
              );
            })}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default UserProfile;
