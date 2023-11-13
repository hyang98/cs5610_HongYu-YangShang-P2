import React from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'

function HomePage() 
{
    return (
      <div class="homeContainer">
        <h1 class="homeTitle">Wordle Game NEU Edition</h1>
        <p class="homeDescription">Select a difficulty level:</p>
      <div class="difficultyLinksContainer">  
        <Link to="/game/normal" class="difficultyLink">Normal</Link>
        <Link to="/game/hard" class="difficultyLink">Hard</Link>
      </div>
      <Link to="/gameRules" class="rulesLink">Game Rules</Link>
    </div>
  );
}

export default HomePage