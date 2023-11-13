import React from 'react'
import './GameRules.css'

export default function GameRules() 
{
  return (
    <div className="rulesContainer">
      <h1 className="rulesTitle">Wordle Game Rules</h1>
      <p className="rulesDescription">
        Wordle is a word-guessing game where you try to guess the hidden word within a limited number of attempts.
      </p>
      <div className="rulesListContainer">
        <p className="rulesHeader">Rules:</p>
        <ul className="rulesList">
          <li>Select a difficulty level on the home page.</li>
          <li>Guess the word by inputting words of the specified length.</li>
          <li>Receive clues based on the correctness of your guesses.</li>
          <li>Complete the game by guessing the word or reset to try again.</li>
        </ul>
      </div>
    </div>
  );
}

