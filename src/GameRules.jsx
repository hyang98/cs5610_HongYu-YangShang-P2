import React from 'react';

export default function RulesPage() 
{
  return (
    <div>
      <h1>Wordle Game Rules</h1>
      <p>Wordle is a word-guessing game where you try to guess the hidden word within a limited number of attempts.</p>
      <p>Rules:</p>
      <ul>
        <li>Select a difficulty level on the home page.</li>
        <li>Guess the word by inputting words of the specified length.</li>
        <li>Receive clues based on the correctness of your guesses.</li>
        <li>Complete the game by guessing the word or reset to try again.</li>
      </ul>
    </div>
  );
}

