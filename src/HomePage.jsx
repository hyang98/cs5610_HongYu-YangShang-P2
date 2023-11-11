import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() 
{
    return (
      <div>
        <h1>Welcome to Wordle Game</h1>
        <p>Select a difficulty level:</p>
        <Link to="/game/normal">Normal</Link>
        <Link to="/game/hard">Hard</Link>
        <Link to="/gameRules">Game Rules</Link>
      </div>
    );
}

export default HomePage