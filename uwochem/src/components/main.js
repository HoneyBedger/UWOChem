import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Header from './header';
import HomePage from './homePage';
import Practice from './practice';
import PracticeCourse from './practiceCourse';
import PracticeExam from './practiceExam';
import {EXAMS} from '../shared/exams';
import {CHAPTERS} from '../shared/chapters';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      exams: EXAMS,
      chapters: CHAPTERS
    };
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/practice/:courseId"
            component={({match}) => <PracticeCourse courseId={match.params.courseId}
            exams={this.state.exams} chapters={this.state.chapters}/>} />
          <Route path="/practice/:courseId/exam/:examId"
            component={({match}) => <PracticeExam courseId={match.params.courseId}
            type="exam" id={match.params.examId}
            examName={this.state.exams.filter(exam => exam.examId === match.params.examId)[0].name} />} />
          <Route path="/practice/:courseId/chapter/:chapterId"
            component={({match}) => <PracticeExam courseId={match.params.courseId}
            type="chapter" id={Number.parseInt(match.params.chapterId)}
            chapterName={this.state.chapters.filter(chapter => chapter.courseId === match.params.courseId
                && chapter.id === Number.parseInt(match.params.chapterId))[0].name} />} />
          <Redirect to="/home"/>
        </Switch>
      </React.Fragment>
    );
  }
}
export default Main;
