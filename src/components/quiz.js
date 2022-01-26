import React from 'react';
import Question from '../components/question'

function Quiz(props) {
 
const questionsArray = []

  for(let i = 0; i < 5; i++){
      questionsArray.push(<Question question={props.questions[i].question} 
                               correctAnswer={props.questions[i].correct_answer} 
                               incorrectAnswers={props.questions[i].incorrect_answers}
                               questionNumber={i}
                               answers={props.answers}
                               chooseAnswer={props.chooseAnswer}/>)
  }
 

  return <div className='quiz'>
      {questionsArray}
      <button onClick={props.switchState} value="Main Menu">Main Menu</button>
  </div>;
}

export default Quiz;
