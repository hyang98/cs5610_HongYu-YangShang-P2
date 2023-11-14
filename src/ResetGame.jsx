import React from 'react';

export default function ResetGame({ resetGame, difficulty }) {
  return (
    <button onClick={() => resetGame(difficulty)}>Reset Game</button>
  );
}

