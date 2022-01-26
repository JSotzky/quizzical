import React from 'react';
import he from 'he'

function Answer(props) {
//Old is pressed stated moved one level highed so answers know who is pressed
//const [isPressed, setIsPressed] = React.useState(false)

    let styling= {
        backgroundColor: props.isSelected ? "hsl(269, 62%, 27%)" : "",
        color: props.isSelected ? "white" : ""
    }

  return <div>
      <button className='answers' value={props.value}
                                                        onClick={(e) => {
                                                        props.selectedAnswer()
                                                        props.chooseAnswer(e, props.questionNumber)}}
                                                        style={styling}
                                                        >{he.decode(props.value)}</button>
  </div>;
}

export default Answer;
