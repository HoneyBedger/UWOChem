import React, {Component} from 'react';
import {Row, Col, Button} from 'reactstrap';

class FieldMC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentAnswer: this.props.studentAnswer
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

  render() {
    let binSize = Math.floor(12/this.props.answer.bins.length);
    let numSlots = this.props.answer.items.length;

    return (

      <Row>
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
      </Row>

    );
  }
}

export default FieldMC;
