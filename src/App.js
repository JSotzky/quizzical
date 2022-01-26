
import './App.css';
import React from 'react'
import Start from './components/start'
import Quiz from './components/quiz'
import Question from './components/question'

function App() {

//quizState 0 - create questions array; 1 - randomize answers check
const [buildQuestions, setBuildQuestions] = React.useState(false)
const [questions, setQuestions] = React.useState()
const [quizTime, setQuizTime] = React.useState(false)
const [answers, setAnswer] = React.useState(["wrong","wrong","wrong","wrong","wrong"])




React.useEffect(() =>{
  fetch("https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple")
  .then(res => res.json())
  .then(data => {
    console.log(data.results)
  setQuestions(data.results)})
  
}, [])





function chooseAnswer(event, questionID){
  console.log("You pressed me!")
  setAnswer((prevAnswers) => {
    let newAnswers = prevAnswers;
    newAnswers[questionID] = event.target.value;
    return newAnswers
  })
  console.log(answers)
}



function switchState(){
  setQuizTime(prevQuiz => !prevQuiz)
}

  return (
    <div className="App">
      {quizTime ? <Quiz switchState={switchState}
                        questions={questions} 
                        buildQuestions={buildQuestions}
                        //questionsArray={questionsArray} 
                        answers={answers} 
                        chooseAnswer={chooseAnswer}
                        setBuildQuestions={setBuildQuestions}/> 
      : <Start switchState={switchState} />}
      
    </div>
  );
}

export default App;
