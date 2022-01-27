import React from 'react';
import he from 'he'

function Answer(props) {
//Old is pressed stated moved one level highed so answers know who is pressed
//const [isPressed, setIsPressed] = React.useState(false)

    let styling= {
        backgroundColor: (props.scoreQuiz && props.correctAnswer) ? "hsl(112, 49%, 45%)" :
                            (props.isSelected && props.scoreQuiz) ? "red" : 
                            props.isSelected ? "hsl(269, 62%, 27%)"  :
                                                                      "",
        color: props.isSelected ? "white" :
                props.correctAnswer && props.scoreQuiz ? "white" : "",
        borderColor: (props.scoreQuiz && props.correctAnswer) ? "white" :
                        (props.isSelected && props.scoreQuiz) ? "white" : 
                        props.isSelected ? "hsl(269, 62%, 27%)"  :
                                                  "",
        opacity:  (props.scoreQuiz && !props.correctAnswer) ? ".4" :
                  (props.isSelected && props.scoreQuiz && !props.correctAnswer) ? ".4" : 
                                  "1"
    }
    
  return <div>
      <button className='answers' value={props.value}   
                                                        onClick={props.scoreQuiz ? undefined : (e) => {props.selectedAnswer()}}
                                                
                                                        style={styling}
                                                        >{he.decode(props.value)}</button>
  </div>;
}

export default Answer;
