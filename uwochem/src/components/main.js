import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import PracticeCourse from './Practice/Course';
import PracticeExam from './Practice/Exam';
import UserProfile from './User/Profile';
import UserLoginModal from './User/LoginModal';
import PrivateRoute from './PrivateRoute';
import {EXAMS} from '../shared/exams';
import {CHAPTERS} from '../shared/chapters';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: window.localStorage.getItem('user') ? true : false,
      loginIsOpen: false
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.toggleLoginModal = this.toggleLoginModal.bind(this);
  }

  login() {
    this.setState({loggedIn: true});
  }

  logout() {
    this.setState({loggedIn: false});
  }

  toggleLoginModal() {
    this.setState({loginIsOpen: !this.state.loginIsOpen});
  }

  render() {
    let loginProps = {
      toggle: this.toggleLoginModal,
      loggedIn: this.state.loggedIn,
      loginMain: this.login
    };

    //TODO: login route is bad

    return (
      <React.Fragment>
        <Header loggedIn={this.state.loggedIn} logoutMain={this.logout}
          toggleLoginModal={this.toggleLoginModal}/>
        <Switch>
          <Route path="/login" component={({location}) => <UserLoginModal {...loginProps}
            redirectTo={(location.state && location.state.from.pathname) || ""}
            isOpen={true} />
            }/>
          <Route component={() => <UserLoginModal {...loginProps} isOpen={this.state.loginIsOpen}/>}/>
        </Switch>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/practice/:courseId"
            component={({match}) => <PracticeCourse courseId={match.params.courseId}
            exams={EXAMS} chapters={CHAPTERS}/>} />
          <Route path="/practice/:courseId/exam/:examId"
            component={({match}) => <PracticeExam courseId={match.params.courseId}
            type="exam" id={match.params.examId}
            examName={EXAMS.filter(exam => exam.examId === match.params.examId)[0].name} />} />
          <Route path="/practice/:courseId/chapter/:chapterId"
            component={({match}) => <PracticeExam courseId={match.params.courseId}
            type="chapter" id={Number.parseInt(match.params.chapterId)}
            chapterName={CHAPTERS.filter(chapter => chapter.courseId === match.params.courseId
                && chapter.id === Number.parseInt(match.params.chapterId))[0].name} />} />
          <PrivateRoute path="/profile" component={UserProfile} />
          <Redirect to="/home"/>
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}
export default Main;
