import React, {Component} from 'react';
import {Row, Col, Button} from 'reactstrap';

class FieldBins extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentAnswer: this.props.answer.items.map(item => {
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
    let itemId = event.dataTransfer.getData("text/plain");
    let items = this.state.studentAnswer.filter((item) => {
      if (item.id === itemId) {
          item.binId = binId;
      }
       return item;
   });
  }

  render() {
    let binSize = Math.floor(12/this.props.answer.bins.length);
    let numSlots = this.props.answer.items.length;
    /*let binContainers = this.props.answer.bins.map(bin => {return [];});

    this.props.answer.items.forEach(item => {
      binContainers[item.binId].push(
        (<div key={item.id} className="draggable">{item.text}</div>)
      );
    });*/
    return (
      <React.Fragment>
        <div className="draggable-start"
          onDragOver={(event) => this.onDragOver(event)}
          onDrop={(event) => this.onDrop(event, "start")}>
          {this.state.draggableItems.map(item => {
            return (
              <div key={item.id} className="draggable" draggable
                onDragStart={(event) => this.onDragStart(event, item.id)}>
                {item.text}
              </div>
            );
          })}
        </div>
        <div className="droppable"
          onDragOver={(event) => this.onDragOver(event)}
          onDrop={(event) => this.onDrop(event, "complete")}>
          {this.state.draggedItems.map(item => {
            return (
              <div key={item.id} className="draggable" draggable
                onDragStart={(event) => this.onDragStart(event, item.id)}>
                {item.text}
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
      /*<Row>
        {this.props.answer.bins.map(bin => {
          return (
            <Col key={bin.id} className="bin" xs={binSize}>
              {() => {
                for (let i = 0; i < numSlots; i++) {
                return (<div key={i} className="bin-slot"></div>);
              }}}
            </Col>
          );
        })}
        <Button type="button" value="submit" color="primary" className="mt-3"
          onClick={() => this.props.checkAnswer(this.props.answer, this.state.studentAnswer)}>Submit</Button>
      </Row>*/
  }
}

export default FieldBins;
