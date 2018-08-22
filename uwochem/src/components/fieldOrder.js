import React, {Component} from 'react';
import {Row, Col, Button} from 'reactstrap';

class FieldOrder extends Component {
  constructor(props) {
    super(props);
    this.shuffleOptions();
    this.state = {
      studentAnswer: this.props.studentAnswer,
      items: this.props.answer.items.map(item => {
        return {
          text: item.text,
          binId: -1,
          id: item.id
        };
      })
    }
    this.changeAnswer = this.changeAnswer.bind(this);
  }

  //update the value of the input if a new question is selected
  componentDidUpdate(prevProps) {
    if (this.props.studentAnswer !== prevProps.studentAnswer) {
      this.setState({
        studentAnswer: this.props.studentAnswer
      });
    }
  }

  shuffleOptions() { //Fisher-Yates shuffle
    for (let i = this.props.answer.items.length - 1; i > 0; i--) {
      let randIdx = Math.floor(Math.random()*(i + 1));
      let tmp = this.props.answer.items[i];
      this.props.answer.items[i] = this.props.answer.items[randIdx];
      this.props.answer.items[randIdx] = tmp;
    }
  }

  changeAnswer(id) {
    this.setState({studentAnswer: id});
  }

  onDragOver(event) {
    console.log("onDragOver called");
    event.preventDefault();
  }

  onDragStart(event, itemId) {
    console.log("onDragStart called, id: ", itemId);
    event.dataTransfer.setData("text/plain", itemId);
  }

  onDrop(event, binId) {
    event.preventDefault();
    for (let item of this.state.items) {
      if (item.binId === binId) return;
    }
    let itemId = event.dataTransfer.getData("text/plain");
    console.log("onDrop called, id: ", itemId);
    let items = this.state.items.filter((item) => {
      if (item.id === Number.parseInt(itemId)) {
          item.binId = binId;
      }
      return true;
    });
    this.setState({items: items});
    if (binId >= 0) {
      let studentAnswer = [].concat(this.state.studentAnswer);
      studentAnswer[binId] = Number.parseInt(itemId);
      this.setState({studentAnswer: studentAnswer});
    }
  }

  renderTarget(id, targetWidth) {
      return (
        <Col xs={targetWidth} key={id} className="droppable-target"
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
    let itemWidth = Math.floor(12/this.state.items.length);
    return (
      <React.Fragment>
        <p><i>Drag and drop these items in the correct order.</i></p>
        <Row className="mb-5 ml-1 mr-1 draggable-start">
              {this.state.items.map(item => {
                return (
                  <Col xs={itemWidth} key={item.id} className="droppable-target"
                    onDragOver={(event) => this.onDragOver(event)}
                    onDrop={(event) => this.onDrop(event, -1)}>
                      {item.binId === -1 ?
                        (<Col className="draggable" draggable onDragStart={(event) => this.onDragStart(event, item.id)}>{item.text}</Col>) :
                        null}
                  </Col>
                );
              })}
        </Row>
        <Row>
          <Col xs={6}><p className="m-2 text-left">{this.props.answer.leftLabel}</p></Col>
          <Col xs={6}><p className="m-2 text-right">{this.props.answer.rightLabel}</p></Col>
        </Row>
        <Row className="droppable ml-1 mr-1">
            {this.state.items.map(item => {
              return this.renderTarget(this.state.items.indexOf(item), itemWidth);
            })}
        </Row>
        <Button type="button" value="submit" color="primary" className="mt-3"
          onClick={() => this.props.checkAnswer(this.props.answer.correctOrder, this.state.studentAnswer)}>Submit</Button>
      </React.Fragment>
    );
  }
}

export default FieldOrder;
