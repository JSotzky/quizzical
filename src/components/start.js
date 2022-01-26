import React from 'react';

function start(props) {
  return <div className='start-menu'>
    <h1 className='title'>Quizzical</h1>
    <h4 className='description'>A basic trivia app pulling questions from OpenTrivia</h4>
    <button className='start-button' onClick={props.switchState}>Start Quiz</button>
  </div>;
}

export default start;
