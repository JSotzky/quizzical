import React from 'react';
import Question from '../components/question'

function Quiz(props) {
 
const questionsArray = []
const [score, setScore] = React.useState()
const [scoreQuiz, setScoreQuiz] = React.useState(false)

  function checkScore(){
    const newScore = 0;
    for(let i = 0; i < answerState.length; i++){
        if(answerState[i].isSelected && answerState[i].correctAnswer){
            newScore++
        }
    }
    setScore(newScore)
    setScoreQuiz(true)
}

  for(let i = 0; i < 5; i++){
      questionsArray.push(<Question 
                              question={props.questions[i].question} 
                               correctAnswer={props.questions[i].correct_answer} 
                               incorrectAnswers={props.questions[i].incorrect_answers}
                               questionNumber={i}
                               answers={props.answers}
                               chooseAnswer={props.chooseAnswer}
                               checkScore={checkScore}
                               />)
  }
 

  return <div className='quiz'>
      {questionsArray}
      <div className='menuOptions'>
      <button onClick={props.switchState} value="Main Menu" className='mainMenuButton'>Main Menu</button>
      <button onClick={props.switchState} value="Check Answers" className='mainMenuButton'>Check Answers</button>
      {scoreQuiz ? "You scored " + score + "/5 on the quiz!" : ""}
      </div>
  </div>;
}

export default Quiz;
