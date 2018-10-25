import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';
import CheckAnswerButton from './CheckAnswerButton';

class FieldBins extends Component {
  constructor(props) {
    super(props);
    console.log("bins studentAnswer", this.props.studentAnswer);
    let studentAnswer = this.props.studentAnswer;
    let items = this.props.answer.items;
    if (!studentAnswer) this.shuffleOptions();
    this.state = {
      newStudentAnswer: [],
      items: items.map(item => {
        return {
          text: item.text,
          binId: studentAnswer ? studentAnswer[item.id] : -1,
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
    return !!this.props.studentAnswer || this.props.correct || this.props.incorrect;
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
    event.preventDefault();
    let itemId = parseInt(event.dataTransfer.getData("text/plain"), 10);
    console.log("onDrop called, id: ", itemId);
    let items = this.state.items.filter(item => {
      if (item.id === parseInt(itemId, 10)) {
          item.binId = binId;
      }
      return true;
    });
    this.setState({items: items});
    let studentAnswer = this.state.newStudentAnswer;
    studentAnswer[itemId] = binId;
    this.setState({newStudentAnswer: studentAnswer});
    console.log("new bin answer", studentAnswer);
  }

  render() {
    let answer = this.props.answer;
    let binSize = Math.floor(11/answer.bins.length);
    let itemSize = Math.floor(12/answer.items.length);

    console.log("bins are", answer.bins);

    return (
      <React.Fragment>
        <p><i>Drag and drop these items into the correct bins.</i></p>
        <Row className="draggable-start ml-1 mr-1">
          {this.state.items.map(item => {
            return (
              <Col xs={itemSize} key={item.id} className="droppable-target"
                style={{height: "4rem"}}
                onDragOver={(event) => this.onDragOver(event)}
                onDrop={(event) => this.onDrop(event, -1)}>
                  {item.binId === -1 &&
                    (<Col className="draggable" draggable
                    onDragStart={(event) => this.onDragStart(event, item.id)}>{item.text}</Col>)}
              </Col>
            );
          })}
        </Row>
        <Row className="mt-5 mb-5 ml-1 mr-1">
          {answer.bins.map(bin => {
            return (
              <Col key={bin.id} className="droppable mr-5" xs={binSize}>
                <p className="text-center m-0">{bin.text}</p>
                  <Col className="droppable-target" style={{minHeight: "3rem"}}
                    onDragOver={(event) => this.onDragOver(event)}
                    onDrop={(event) => this.onDrop(event, bin.id)}>
                    {this.state.items.filter(item => item.binId === bin.id).map(item => {
                      return (
                        <Col key={item.id} className="draggable" draggable
                          onDragStart={(event) => this.onDragStart(event, item.id)}>
                          {item.text}
                        </Col>
                      );
                    })}
                  </Col>
              </Col>
            );
          })}
        </Row>
        <CheckAnswerButton
          submit={() => this.props.checkAnswer(answer.items, this.state.newStudentAnswer)}
          disabled={!!this.props.studentAnswer} correct={this.props.correct} incorrect={this.props.incorrect}/>
      </React.Fragment>
    );
  }
}

export default FieldBins;
