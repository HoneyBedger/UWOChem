import React, { Component } from 'react';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import PracticeCourse from './Practice/Course';
import PracticeExam from './Practice/Exam';
import UserProfile from './User/Profile';
import UserLoginModal from './User/LoginModal';
import login from './User/login';
import PrivateRoute from './PrivateRoute';
import {EXAMS} from '../shared/exams';
import {CHAPTERS} from '../shared/chapters';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: !!window.localStorage.getItem('userToken'),
      loginIsOpen: this.props.location.pathname.includes("/login")
    };
    this.toggleLoginModal = this.toggleLoginModal.bind(this);
    this.openLoginModal = this.openLoginModal.bind(this);
    this.handleResize = this.handleResize.bind(this);
    login.attachToComponent(this);
  }

  toggleLoginModal() {
    if (this.state.loginIsOpen) login.setSaveProgress(false);
    this.setState({loginIsOpen: !this.state.loginIsOpen});
  }

  openLoginModal() {
    this.setState({loginIsOpen: true});
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize, false);
    this.repositionFooter();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  componentDidUpdate() {
    this.repositionFooter();
    let tokenExists = !!window.localStorage.getItem('userToken');
    if (tokenExists !== this.state.loggedIn) {
      this.setState({loggedIn: tokenExists});
    }
  }

  handleResize(event) {
    event.preventDefault();
    let resizeTimeout;
    if (!resizeTimeout) {
      resizeTimeout = setTimeout(function() {
        resizeTimeout = null;
        this.repositionFooter();
      }.bind(this), 66)
    }
  }

  repositionFooter(){
    let docHeight = window.innerHeight;
    let footer = document.getElementById("footer");
    let beforeFooter = footer.previousSibling;
    console.log("before footer: ", beforeFooter);
    let beforeFooterBottom = beforeFooter.getBoundingClientRect().bottom;
    console.log("before footer id: ", beforeFooter.id);
    if (beforeFooterBottom + document.documentElement.scrollTop < docHeight &&
      beforeFooter.id !== "exam") {
      let footerLeft = footer.getBoundingClientRect().left;
      footer.style.position = "absolute";
      footer.style.left = footerLeft + 'px';
      footer.style.top = (docHeight + 10) + 'px';
      footer.style.width = "100%";
    } else {
      footer.style.position = "relative";
      footer.style.top = "";
      footer.style.left = "";
    }
  }

  render() {
    let loginProps = {
      loggedIn: this.state.loggedIn,
      setSaveProgress: login.setSaveProgress,
      toggleLoginModal: this.toggleLoginModal
    };

    return (
      <React.Fragment>
        <Header loggedIn={this.state.loggedIn} logout={login.logout} toggleLoginModal={this.toggleLoginModal}/>
        <UserLoginModal toggle={this.toggleLoginModal} loggedIn={this.state.loggedIn}
          login={login.login} isOpen={this.state.loginIsOpen}/>
        <Switch>
          <Route path="/home" render={({location}) => <Home
            redirectTo={this.state.loggedIn && location.state && location.state.from.pathname}/>} />
          <Route path="/about" component={About} />
          <Route exact path="/practice/:courseId"
            render={({match}) => <PracticeCourse courseId={match.params.courseId}
            exams={EXAMS} chapters={CHAPTERS}/>} />
          <Route path="/practice/:courseId/exam/:examId"
            render={({match}) => <PracticeExam courseId={match.params.courseId}
            type="exam" id={match.params.examId}
            examName={EXAMS.filter(exam => exam.examId === match.params.examId)[0].name}
            {...loginProps} />}/>
          <Route path="/practice/:courseId/chapter/:chapterId"
            render={({match}) => <PracticeExam courseId={match.params.courseId}
            type="chapter" id={match.params.chapterId}
            chapterName={CHAPTERS.filter(chapter => chapter.courseId === match.params.courseId
                && String(chapter.id) === match.params.chapterId)[0].name}
            {...loginProps}/>} />
          <PrivateRoute path="/profile" openLoginModal={this.openLoginModal}
            component={() => <UserProfile exams={EXAMS}/>} />
          <Redirect from="/login" to="/home/login" />
          <Redirect to="/home"/>
        </Switch>
        <Footer/>
      </React.Fragment>
    );
  }
}
export default withRouter(Main);
