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
    let activeItem = document.getElementById(questionId);
    let activeItemRect = activeItem.getBoundingClientRect();
    let parent = activeItem.parentNode;
    let parentRect = parent.getBoundingClientRect();
    const mq = window.matchMedia( "(min-width: 768px)" );
    let moveScrollbar = () => {};
    if (mq.matches) {
      let height = window.innerHeight - 200;
      let itemHeight = activeItemRect.top - activeItemRect.bottom;
      let step = Math.round((activeItem.offsetTop - itemHeight/2 - height/2 - parent.scrollTop)/10);
      moveScrollbar = () => {parent.scrollTop = activeItem.parentNode.scrollTop + step};
    } else {
      let width = parentRect.right - parentRect.left;
      let itemWidth = activeItemRect.right - activeItemRect.left;
      let step = Math.round((activeItem.offsetLeft + itemWidth/2 - width/2 - parent.scrollLeft)/10);
      moveScrollbar = () => {parent.scrollLeft = activeItem.parentNode.scrollLeft + step};
    }
    let counter = 0
    let scrolling = setInterval(() => {
      counter++;
      if (counter === 11) clearInterval(scrolling);
      moveScrollbar();
    }, 10);

  }

  render() {
    let listStyle = {
      maxHeight: (this.state.windowHeight - 200) + 'px'
    };
    let questionsAnswered = this.props.questionsAnswered;

    return (
      <Col md={3} xs={12} className="mb-5">
        <ListGroup style={listStyle} className="question-list">
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
