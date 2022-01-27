
import './App.css';
import React from 'react'
import Start from './components/start'
import Quiz from './components/quiz'




function App() {

const [newQuestions, setNewQuestions] = React.useState(0)
const [questions, setQuestions] = React.useState([])
const [quizTime, setQuizTime] = React.useState(false)



function fetchQuestions(){
  setNewQuestions(prevQs => prevQs+1)
}

function switchState(){
  setQuizTime(prevQuiz => !prevQuiz)
}


React.useEffect(() =>{
  fetch("https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple")
  .then(res => res.json())
  .then(data => {
  console.log(data.results)
  setQuestions(data.results)
  console.log("after setting questions")
  console.log(questions)
  })
}, [newQuestions])


  return (
    <div className="App">
      {quizTime ? <Quiz switchState={switchState}
                        questions={questions} 
                        
                        fetchQuestions={fetchQuestions}
                        newQuestions={newQuestions}
                        
                        /> 
      : <Start switchState={switchState} />}
      
    </div>
  );
}

export default App;
