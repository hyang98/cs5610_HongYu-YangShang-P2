import React from 'react'
import './GameRules.css'
import { Link } from 'react-router-dom'

export default function GameRules() 
{
  return (
    <div class="rulesContainer">
      <h1 class="rulesTitle">Wordle Game Rules</h1>
      <p class="rulesDescription">
        Wordle is a word-guessing game where you try to guess the hidden word within a limited number of attempts.
      </p>
      <div class="rulesListContainer">
        <p class="rulesHeader">Rules:</p>
        <ul class="rulesList">
          <li>Select a difficulty level on the home page.</li>
          <li>Guess the word by inputting words of the specified length.</li>
          <li>Receive clues based on the correctness of your guesses.</li>
          <li>Complete the game by guessing the word or reset to try again.</li>
        </ul>
      </div>
      <Link to="/">Home</Link>
    </div>
  );
}

