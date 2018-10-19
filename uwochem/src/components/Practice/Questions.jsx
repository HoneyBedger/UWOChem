import React from 'react';
import {Row, Col, Button} from 'reactstrap';
import QuestionList from './QuestionList';
import Question from './Question';

function PracticeQuestions(props) {
  let questionsAnswered = props.questionsAnswered;
  let questions = props.questions;
  let selectedQuestion = props.selectedQuestion;

  let numCorrect = 0;
  questionsAnswered.forEach(ans => {
    if (ans.correct) numCorrect++;
  });
  let name;
  if (props.loggedIn) {
    let user = JSON.parse(window.localStorage.getItem('user'));
    name = user.name || user.username;
  }

  console.log("in Questions questionsAnswered:", props.questionsAnswered);
  console.log("in Questions student answer should be",
    questionsAnswered.has(selectedQuestion._id) && questionsAnswered.get(selectedQuestion._id).studentAnswer);
  return (
    <React.Fragment>
      <Row>
        <Col sm={4} md={3} className="text-right">
          <p className="pl-4">Answered: {questionsAnswered.size}/{questions.length}</p>
        </Col>
        <Col sm={5} md={4} className="text-right">
          <p><span className="correct">correct: {numCorrect}</span> /
            <span className="incorrect"> incorrect: {questionsAnswered.size - numCorrect}</span></p>
        </Col>
        <Col sm={{size: 12, offset: 0}} md={{size: 5, offset: 0}} className="text-right">
          {props.loggedIn ?
            <a>Progress is saved for {name}</a> :
            <Button color="link" style={{fontWeight: "bold", fontSize: "1.2rem"}}
              onClick={props.saveProgress}>Save progress</Button>
          }
        </Col>
      </Row>
      <Row>
        <QuestionList questionsAnswered={questionsAnswered} questions={questions}
          selectedQuestionId={selectedQuestion._id} selectQuestion={props.selectQuestion}/>
        <Question questionBody={selectedQuestion.questionBody}
          questionType={selectedQuestion.type} checkAnswer={props.checkAnswer}
          key={selectedQuestion._id}
          correct={questionsAnswered.has(selectedQuestion._id) && questionsAnswered.get(selectedQuestion._id).correct}
          incorrect={questionsAnswered.has(selectedQuestion._id) && !questionsAnswered.get(selectedQuestion._id).correct}
          studentAnswer={(questionsAnswered.has(selectedQuestion._id) && questionsAnswered.get(selectedQuestion._id).studentAnswer)} />
      </Row>
    </React.Fragment>
  );
}

export default PracticeQuestions;
