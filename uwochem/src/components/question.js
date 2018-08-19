import React from 'react';
import FieldNumeric from './fieldNumeric';
import FieldString from './fieldString';
import FieldMC from './fieldMC';
import FieldMS from './fieldMS';
import FieldBins from './fieldBins';


function Question(props) {

  //label the answer as correct/incorrect or nothing
  let correctLabel = null;
  if (props.correct !== undefined) {
    correctLabel = props.correct ? (<span className="fa fa-check fa-lg"></span>) : (<span className="fa fa-times fa-lg"></span>);
  }

  //choose the field for the type of question
  let type  = props.questionType;
  let field = null;
  if (type === "numeric") {
    field = (
      <FieldNumeric answer={props.questionBody.answer} correct={props.correct}
        studentAnswer={props.studentAnswer} checkAnswer={props.checkAnswer}/>
    );
  } else if (type === "string") {
    field = (
      <FieldString answer={props.questionBody.answer} correct={props.correct}
        studentAnswer={props.studentAnswer} checkAnswer={props.checkAnswer}/>
    );
  } else if (type === "MC") {
    //TODO: Add option shuffling
    field = (
      <FieldMC options={props.questionBody.options} correct={props.correct}
        studentAnswer={props.studentAnswer} checkAnswer={props.checkAnswer}/>
    );
  } else if (type === "MS") {
    field = (
      <FieldMS options={props.questionBody.options} correct={props.correct}
        studentAnswer={props.studentAnswer} checkAnswer={props.checkAnswer}/>
    );
  } else if (type === "bins") {
    field = (
      <FieldBins answer={props.questionBody.answer} correct={props.correct}
        studentAnswer={props.studentAnswer} checkAnswer={props.checkAnswer}/>
    );
  }

  return (
    <div className="col-9">
      <div>{props.questionBody.description}</div>
      {field}
      {correctLabel}
      {props.correct === undefined ?
        null :
        (<div className="mt-5">
          <h4>Solution</h4>
          {props.questionBody.feedback}
        </div>)
      }
    </div>
  );
}

export default Question;
