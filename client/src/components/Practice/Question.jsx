import React, {Component} from 'react';
import FieldNumeric from './Field/Numeric';
import FieldString from './Field/String';
import FieldMC from './Field/MC';
import FieldMS from './Field/MS';
import FieldBins from './Field/Bins';
import FieldOrder from './Field/Order';


class Question extends Component {

  componentDidMount() {
    this.props.repositionFooter();
  }

  componentDidUpdate() {
    this.props.repositionFooter();
  }

  render() {
    let type  = this.props.questionType;
    let questionBody = this.props.questionBody;
    let studentAnswer = this.props.studentAnswer;
    let fieldProps = {
      key: this.props._id,
      correct: this.props.correct,
      incorrect: this.props.incorrect,
      checkAnswer: this.props.checkAnswer
    };
    let field;
    if (type === "numeric") {
      field = <FieldNumeric answer={questionBody.answer} studentAnswer={Number(studentAnswer)} {...fieldProps}/>;
    } else if (type === "string") {
      field = <FieldString answer={questionBody.answer} studentAnswer={studentAnswer} {...fieldProps}/>;
    } else if (type === "MC") {
      field = <FieldMC options={questionBody.options} studentAnswer={studentAnswer}{...fieldProps}/>;
    } else if (type === "MS") {
      field = <FieldMS options={questionBody.options} {...fieldProps}
        studentAnswer={studentAnswer && studentAnswer.split(',')}/>;
    } else if (type === "bins") {
      field = <FieldBins answer={questionBody.answer} {...fieldProps}
        studentAnswer={studentAnswer && studentAnswer.split(',')}/>;
    } else if (type === "order") {
      field = <FieldOrder answer={questionBody.answer} {...fieldProps}
        studentAnswer={studentAnswer && studentAnswer.split(',')} />;
    }

    return (
      <div className="col-9">
        <div>{questionBody.description}</div>
        {field}
        {!this.props.correct && !this.props.incorrect ?
          null :
          (<div className="mt-5 mb-5">
            <h4>Solution</h4>
            {questionBody.feedback}
          </div>)
        }
      </div>
    );
  }
}

export default Question;
