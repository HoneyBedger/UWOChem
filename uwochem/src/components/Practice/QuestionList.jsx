import React, {Component} from 'react';
import {Col, ListGroup, ListGroupItem} from 'reactstrap';

class QuestionList extends Component {
  constructor(props) {
    super(props);
    this.state = {windowHeight: window.innerHeight};
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize, false);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize() {
    let resizeTimeout;
    if (!resizeTimeout) {
      resizeTimeout = setTimeout(function() {
        resizeTimeout = null;
        this.setState({windowHeight: window.innerHeight});
      }.bind(this), 66)
    }
  }

  scrollToQuestion(questionId) {
    let height = window.innerHeight - 200;
    let activeItem = document.getElementById(questionId);
    let parent = activeItem.parentNode;
    let step = Math.round((activeItem.offsetTop - height/2 - parent.scrollTop)/10);
    let counter = 0
    let scrolling = setInterval(() => {
      counter++;
      if (counter === 11) clearInterval(scrolling);
      parent.scrollTop = activeItem.parentNode.scrollTop + step;
    }, 10);
  }

  render() {
    let listStyle = {
      height: (this.state.windowHeight - 200) + 'px',
      overflow: "auto",
      display: "block",
      position: "relative"
    };
    let questionsAnswered = this.props.questionsAnswered;

    return (
      <Col xs={3}>
        <ListGroup style={listStyle}>
          {this.props.questions.map(question => {
            return (
              <ListGroupItem
                key={question._id} id={question._id} action
                active={this.props.selectedQuestionId === question._id}
                tag="button" onClick={() => {
                  this.props.selectQuestion(question._id);
                  this.scrollToQuestion(question._id);
                }}>
                {question.name}
                {questionsAnswered.has(question._id) ?
                  (questionsAnswered.get(question._id).correct ?
                    <span className="fa fa-check correct"></span> :
                    <span className="fa fa-times incorrect"></span>) :
                  null}
              </ListGroupItem>
            );
          })}
        </ListGroup>
      </Col>
    );
  }

}

export default QuestionList;
