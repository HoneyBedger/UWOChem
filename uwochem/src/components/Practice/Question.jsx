import React from 'react';
import FieldNumeric from './Field/Numeric';
import FieldString from './Field/String';
import FieldMC from './Field/MC';
import FieldMS from './Field/MS';
import FieldBins from './Field/Bins';
import FieldOrder from './Field/Order';


function Question(props) {

  let type  = props.questionType;
  let fieldProps = {
    key: props._id,
    correct: props.correct,
    incorrect: props.incorrect,
    checkAnswer: props.checkAnswer
  };
  let field;
  if (type === "numeric") {
    field = <FieldNumeric answer={props.questionBody.answer} studentAnswer={Number(props.studentAnswer)} {...fieldProps}/>;
  } else if (type === "string") {
    field = <FieldString answer={props.questionBody.answer} studentAnswer={props.studentAnswer} {...fieldProps}/>;
  } else if (type === "MC") {
    field = <FieldMC options={props.questionBody.options} studentAnswer={props.studentAnswer}{...fieldProps}/>;
  } else if (type === "MS") {
    field = <FieldMS options={props.questionBody.options} {...fieldProps}
      studentAnswer={props.studentAnswer && props.studentAnswer.split(',')}/>;
  } else if (type === "bins") {
    field = <FieldBins answer={props.questionBody.answer} {...fieldProps}
      studentAnswer={props.studentAnswer && props.studentAnswer.split(',')}/>;
  } else if (type === "order") {
    field = <FieldOrder answer={props.questionBody.answer} {...fieldProps}
      studentAnswer={props.studentAnswer && props.studentAnswer.split(',')} />;
  }

  console.log("in Question studentAnswer:", props.studentAnswer);

  return (
    <div className="col-9">
      <div>{props.questionBody.description}</div>
      {field}
      {!props.correct && !props.incorrect ?
        null :
        (<div className="mt-5 mb-5">
          <h4>Solution</h4>
          {props.questionBody.feedback}
        </div>)
      }
    </div>
  );
}

export default Question;
