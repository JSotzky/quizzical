import React from 'react';
import he from 'he'
import Answer from '../components/answer'


function Question(props) {

  return <div className='question-box'>
            <div className='question'>{he.decode(props.question)}</div>
            <div className='answers-box'>
            {props.answerState.map((object) => (<Answer  
                                                        scoreQuiz={props.scoreQuiz}
                                                        value={object.value}
                                                        key={object.key}
                                                        questionNumber={object.questionNumber}
                                                        isSelected={object.isSelected}
                                                        selectedAnswer={() => props.selectedAnswer(object.questionNumber, object.key)}
                                                        
                                                        correctAnswer={object.correctAnswer}
                                                        />
                                                        ))}
        </div>
  </div>;
}

export default Question;
