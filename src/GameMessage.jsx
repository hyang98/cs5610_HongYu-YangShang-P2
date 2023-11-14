import React from 'react';
import ResetGame from './ResetGame';

function GameMessage({ gameDone, message, resetGame, difficulty, attempts }) {
    return (
      <div className="containerMessage">
        {gameDone ? (
          <div>
            <ResetGame resetGame={resetGame} difficulty={difficulty} />
            <h3>{message}</h3>
          </div>
        ) : (
          <div>
            <h2>You have {attempts} attempts remaining !</h2>
            <h3>{message}</h3>
          </div>
        )}
      </div>
    );
  }
  
  export default GameMessage;
