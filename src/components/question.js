import React from 'react';
import he from 'he'
import Answer from '../components/answer'
import {nanoid} from 'nanoid'

function Question(props) {
    //This is an array of all the answers incorrect+correct
    const answerArray = props.incorrectAnswers.concat(props.correctAnswer);
    //this is the array of answer objects to replace old array
    const [answerState, setAnswerState] = React.useState(createAnswerState())
    //This bad boy is currently randomizing the answers
    React.useMemo(() => {
        for (let i = answerArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [ answerArray[i],  answerArray[j]] = [ answerArray[j],  answerArray[i]];
        }
    }, [])
    //This is going to take all the answers, make them objects, 
    //so I/They know the state of other answers passed down so only one can be selected at a time. Plus maybe its better to format it this way.
    function createAnswerState(){
        const newAnswers = [];
        for(let i = 0; i < props.incorrectAnswers.length; i++){
            newAnswers.push({
                isSelected: false,
                key: nanoid(),
                questionNumber: props.questionNumber,
                value: props.incorrectAnswers[i]
            })
        };
        newAnswers.push({
                isSelected: false,
                key: nanoid(),
                questionNumber: props.questionNumber,
                value: props.correctAnswer});
        for (let i = newAnswers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [ newAnswers[i],  newAnswers[j]] = [ newAnswers[j],  newAnswers[i]];
        };
        return newAnswers
    };
console.log(answerState)

function selectedAnswer(key){
    setAnswerState(oldAnswers => oldAnswers.map(answer => {
                return answer.key === key ?
                    {...answer, isSelected: true} :
                    {...answer, isSelected: false}
    }))
}

  return <div className='question-box'>
            <div className='question'>{he.decode(props.question)}</div>
            <div className='answers-box'>
            {answerState.map((object) => (<Answer  
                                                        value={object.value}
                                                        key={object.key}
                                                        questionNumber={object.questionNumber}
                                                        chooseAnswer={props.chooseAnswer}
                                                        isSelected={object.isSelected}
                                                        selectedAnswer={() => selectedAnswer(object.key)}
                                                        /*answers={props.answers}*//>))}
        </div>
  </div>;
}

export default Question;
