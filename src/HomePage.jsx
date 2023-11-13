import React from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'

function HomePage() 
{
    return (
      <div className="homeContainer">
        <h1 className="homeTitle">Wordle Game NEU Edition</h1>
        <p className="homeDescription">Select a difficulty level:</p>
      <div className="difficultyLinksContainer">  
        <Link to="/game/normal" className="difficultyLink">Normal</Link>
        <Link to="/game/hard" className="difficultyLink">Hard</Link>
      </div>
      <Link to="/gameRules" className="rulesLink">Game Rules</Link>
    </div>
  );
}

export default HomePage