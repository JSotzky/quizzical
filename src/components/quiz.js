import React from 'react';
import Question from '../components/question'
import {nanoid} from 'nanoid'

function Quiz(props) {
 
  const questionsArray = []
  console.log("This is questionstate")
  console.log(props.questionState)

//How many they got right
const [score, setScore] = React.useState()
//We have correct the questions so lets disable them and change the CSS to show right an wrong.
const [scoreQuiz, setScoreQuiz] = React.useState(false)

//this is the array of answer objects to replace old array
const [questionState, setQuestionState] = React.useState(createQuestionState())

//This is going to take all the answers, make them objects, 
//so I/They know the state of other answers passed down so only one can be selected at a time. Plus maybe its better to format it this way.

React.useEffect(() => {
  setQuestionState(createQuestionState())
}, [props.questions])

function createQuestionState(){
    console.log("this is createQuestion state form questions")
    console.log(props.questions)
    const newQuestionState = [];
        for(let x = 0; x < 5; x++){
          const newAnswersState = []
          for(let i = 0; i < 3; i++){
              newAnswersState.push({
                  isSelected: false,
                  key: nanoid(),
                  questionNumber: x,
                  value: props.questions[x].incorrect_answers[i],
                  correctAnswer: false,
                  corrected: false
              })
          };
          newAnswersState.push({
                  isSelected: false,
                  key: nanoid(),
                  questionNumber: x,
                  value: props.questions[x].correct_answer,
                  correctAnswer: true,
                  corrected: false
              });
          //This bad boy is currently randomizing the answers
          for (let i = newAnswersState.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [ newAnswersState[i],  newAnswersState[j]] = [ newAnswersState[j],  newAnswersState[i]];
          };
          newQuestionState.push(newAnswersState)
        }
      return newQuestionState

  }

function selectedAnswer(qKey, answerKey){
setQuestionState(oldQuestions => oldQuestions.map(oldAnswers => oldAnswers.map(answer => {
                return ((answer.key === answerKey)) ?
                {...answer, isSelected: true} :
                (answer.questionNumber === qKey) ?
                {...answer, isSelected: false} :
                {...answer}
})))
}

function deselectAnswers(){
  setQuestionState(oldQuestions => oldQuestions.map(oldAnswers => oldAnswers.map(answer => {
                  return {...answer, isSelected: false}
                  
  })))
  }


  function checkScore(){
    let newScore = 0;
    for(let x = 0; x < questionState.length; x++){
      for(let i = 0; i < questionState[i].length; i++){
          if(questionState[x][i].isSelected && questionState[x][i].correctAnswer){
              newScore++
          }
      }
    }
    setScore(newScore)
    setScoreQuiz(true)
}

function playAgain(){
  props.fetchQuestions()
  setScore(0)
  setScoreQuiz(false)
  deselectAnswers();
}


  for(let i = 0; i < 5; i++){
      questionsArray.push(<Question 
                               key={nanoid()} 
                               question={props.questions[i].question}
                               answerState={questionState[i]}
                               selectedAnswer={selectedAnswer}
                               scoreQuiz={scoreQuiz}
                               />)
  }
    
  return <div className='quiz'>
      {questionsArray}
      <div className='menuOptions'>
      <button onClick={props.switchState} value="Main Menu" className='mainMenuButton'>Main Menu</button>
      {scoreQuiz ? "" : <button onClick={checkScore} value="Check Answers" className='mainMenuButton'>Check Answers</button>}
      {scoreQuiz ? "You scored " + score + "/5 on the quiz!  " : ""}
      {scoreQuiz ?  <button onClick={playAgain} value="Play Again" className='mainMenuButton'>Play Again</button> : ""}
      </div>
  </div>;
}

export default Quiz;
