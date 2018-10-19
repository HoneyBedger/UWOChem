import React, {Component} from 'react';
import {Row, Col, Button} from 'reactstrap';
import CheckAnswerButton from './CheckAnswerButton';

class FieldOrder extends Component {
  constructor(props) {
    super(props);
    console.log("drag-n-drop studentAnswer", this.props.studentAnswer);
    let studentAnswer = this.props.studentAnswer;
    let items = this.props.answer.items;
    if (!studentAnswer) this.shuffleOptions();
    this.state = {
      newStudentAnswer: [],
      items: items.map(item => {
        return {
          text: item.text,
          binId: studentAnswer ? studentAnswer.indexOf(String(item.id)) : -1,
          id: item.id
        };
      })
    }
    this.isDisabled = this.isDisabled.bind(this);
  }

  shuffleOptions() { //Fisher-Yates shuffle
    for (let i = this.props.answer.items.length - 1; i > 0; i--) {
      let randIdx = Math.floor(Math.random()*(i + 1));
      let tmp = this.props.answer.items[i];
      this.props.answer.items[i] = this.props.answer.items[randIdx];
      this.props.answer.items[randIdx] = tmp;
    }
  }

  isDisabled() {
    return !!this.props.studentAnswer;
  }

  onDragOver(event) {
    console.log("onDragOver called");
    event.preventDefault();
  }

  onDragStart(event, itemId) {
    console.log("onDragStart called, id: ", itemId);
    if (this.isDisabled()) {
      event.preventDefault();
      return;
    }
    event.dataTransfer.setData("text/plain", itemId);
  }

  onDrop(event, binId) {
    console.log("before drop student answer", this.state.newStudentAnswer);
    event.preventDefault();
    if (this.isDisabled()) return;
    if (binId !== -1) {
      for (let item of this.state.items) {
        if (item.binId === binId) return;
      }
    }
    let itemId = Number.parseInt(event.dataTransfer.getData("text/plain"));
    console.log("onDrop called, item id, bin id: ", itemId, binId);
    let items = this.state.items.filter((item) => {
      if (item.id === Number.parseInt(itemId)) {
          item.binId = binId;
      }
      return true;
    });
    this.setState({items: items});
    let studentAnswer = this.state.newStudentAnswer;
    if (binId >= 0) { //add/replace in the answer
      studentAnswer[binId] = itemId;
    } else if (studentAnswer.includes(itemId)){ //remove from the answer
      studentAnswer.splice(studentAnswer.indexOf(itemId), 1)
    }
    this.setState({newStudentAnswer: studentAnswer});
    console.log("new student answer", studentAnswer);
  }

  renderTarget(id) {
    console.log("rendering bin ", id);
      return (
        <Col key={id} className="droppable-target"
          style={{height: this.props.answer.height ? `calc(${this.props.answer.height} + 1.5rem)` : "3rem"}}
          onDragOver={(event) => this.onDragOver(event)}
          onDrop={(event) => this.onDrop(event, id)}>
            {this.state.items.filter(item => item.binId === id).map(item => {
              return (
                <Col key={item.id} className="draggable" draggable
                  onDragStart={(event) => this.onDragStart(event, item.id)}>
                  {item.text}
                </Col>
              );
            })}
        </Col>
      );
  }

  render() {
    console.log("this.props.studentAnswer", this.props.studentAnswer);

    return (
      <React.Fragment>
        <p><i>Drag and drop these items in the correct order.</i></p>
        <Row className="mb-5 ml-1 mr-1">
          <Col className="draggable-start pt-4 pb-4 mt-2" lg={4} sm={5}>
              {this.state.items.map(item => {
                return (
                  <Col key={item.id} className="droppable-target"
                    style={{height: this.props.answer.height ? `calc(${this.props.answer.height} + 1.5rem)` : "3rem"}}
                    onDragOver={(event) => this.onDragOver(event)}
                    onDrop={(event) => this.onDrop(event, -1)}>
                      {item.binId === -1 &&
                        (<Col className="draggable" draggable
                        onDragStart={(event) => this.onDragStart(event, item.id)}>{item.text}</Col>)}
                  </Col>
                );
              })}
          </Col>
          <Col className="droppable mt-2" lg={{size: 4, offset: 1}} sm={{size: 5, offset: 1}} xs={{size: 12, offset: 0}}>
            <p className="text-center m-0">{this.props.answer.leftLabel}</p>
            {this.state.items.map(item => {
              return this.renderTarget(this.state.items.indexOf(item));
            })}
            <p className="text-center m-0">{this.props.answer.rightLabel}</p>
          </Col>
        </Row>
        <CheckAnswerButton
          submit={() => this.props.checkAnswer(this.props.answer.correctOrder, this.state.newStudentAnswer)}
          disabled={!!this.props.studentAnswer} correct={this.props.correct} incorrect={this.props.incorrect}/>
      </React.Fragment>
    );
  }
}

export default FieldOrder;
