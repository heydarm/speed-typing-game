import React from 'react';

import useGameLogic from '../hooks/useGameLogic';

function Game(props) {
  const {
    textAreaRef,
    handleChange,
    text,
    isStarted,
    timeRemaining,
    setTimeRemaining,
    startGame,
    stopGame,
    wordCount,
    setStartTime
  } = useGameLogic(5);

  const timeInputStyles = {
    width: `${timeRemaining}`.length * 25,
    border: (`${timeRemaining}`.length ? "" : "1px solid var(--main-color)")
  };

  function handleTimeChange(event) {
    const {value} = event.target;
    setTimeRemaining(value);
    setStartTime(value);
  }

  return (
    <main className="game-container">
      <textarea
        className="text-box"
        ref={textAreaRef}
        onChange={handleChange}
        value={text}
        disabled={!isStarted}
      />
      <div className="info-box">
        <label className="time-remaining-info">
          <h4>Time remaining:</h4>
          <input
            className="time-input"
            type="number"
            disabled={isStarted}
            name="time-input"
            value={timeRemaining}
            onChange={handleTimeChange}
            style={timeInputStyles}
          />
        </label>
        <button 
          className="btn start-btn"
          onClick={() => isStarted ? stopGame() : startGame()}
        >
          {isStarted ? "Stop" : "Start"}
        </button>
        <h1>Word count: {wordCount}</h1>
      </div>
    </main>
  );
}

export default Game;