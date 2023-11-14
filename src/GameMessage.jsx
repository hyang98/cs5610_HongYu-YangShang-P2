import React from 'react';

function GameMessage({ gameDone, message, resetGame, difficulty, attempts}) {
  return (
    <div className="containerMessage">
      {gameDone ? (
        <div>
          <button onClick={() => resetGame(difficulty)}>Reset Game</button>
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
