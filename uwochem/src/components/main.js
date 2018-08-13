import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Header from './header';
import HomePage from './homePage';
import Practice from './practice';
import PracticeCourse from './practiceCourse';
import PracticeExam from './practiceExam';
import {EXAMS} from '../shared/exams';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      exams: EXAMS
    };
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/practice" component={Practice}/>
          <Route exact path="/practice/:courseId"
            component={({match}) => <PracticeCourse courseId={match.params.courseId} exams={this.state.exams}/>} />
          <Route path="/practice/:courseId/:examId"
            component={({match}) => <PracticeExam courseId={match.params.courseId}
              examName={this.state.exams.filter(exam => exam.examId === match.params.examId)[0].name}
              examId={match.params.examId} />} />
          <Redirect to="/home"/>
        </Switch>
      </React.Fragment>
    );
  }
}
export default Main;
