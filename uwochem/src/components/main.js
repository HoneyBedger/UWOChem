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
      loggedIn: window.localStorage.getItem('userToken') ? true : false,
      loginIsOpen: false,
      saveProgress: false,
      windowHeight: window.innerHeight
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.toggleLoginModal = this.toggleLoginModal.bind(this);
    this.setSaveProgress = this.setSaveProgress.bind(this);
    this.handleResize = this.handleResize.bind(this);
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

  setSaveProgress(saveProgress) {
    this.setState({saveProgress: saveProgress});
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
  }

  handleResize() {
    let resizeTimeout;
    if (!resizeTimeout) {
      resizeTimeout = setTimeout(function() {
        resizeTimeout = null;
        this.setState({windowHeight: window.innerHeight});
        this.repositionFooter();
      }.bind(this), 66)
    }
  }

  repositionFooter(){
    let docHeight = window.innerHeight;
    let footer = document.getElementById("footer");
    let beforeFooter = footer.previousSibling;
    let beforeFooterBottom = beforeFooter.getBoundingClientRect().bottom;
    if (beforeFooterBottom + document.documentElement.scrollTop < docHeight) {
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
      toggle: this.toggleLoginModal,
      loggedIn: this.state.loggedIn,
      loginMain: this.login,
      saveProgress: this.state.saveProgress,
      setSaveProgress: this.setSaveProgress
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
            type="exam" id={match.params.examId} loggedIn={this.state.loggedIn}
            examName={EXAMS.filter(exam => exam.examId === match.params.examId)[0].name}
            setSaveProgress={this.setSaveProgress} toggleLoginModal={this.toggleLoginModal}
            />}/>
          <Route path="/practice/:courseId/chapter/:chapterId"
            component={({match}) => <PracticeExam courseId={match.params.courseId}
            type="chapter" id={Number.parseInt(match.params.chapterId)}
            loggedIn={this.state.loggedIn} setSaveProgress={this.setSaveProgress}
            toggleLoginModal={this.toggleLoginModal}
            chapterName={CHAPTERS.filter(chapter => chapter.courseId === match.params.courseId
                && chapter.id === Number.parseInt(match.params.chapterId))[0].name} />} />
          <PrivateRoute path="/profile" component={() => <UserProfile exams={EXAMS}/>} />
          <Redirect to="/home"/>
        </Switch>
        <Footer/>
      </React.Fragment>
    );
  }
}
export default Main;
