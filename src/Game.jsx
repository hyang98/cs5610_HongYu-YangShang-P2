import { useContext, useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import './Game.css';
import InputGuess from "./InputGuess";


const words = {
  normal: ['action', 'battle', 'circle', 'dealer', 'eating', 'talent', 'source', 'urgent', 'origin', 'moment', 'jersey', 'global'],
  hard: ['ancient', 'balance', 'caption', 'defence', 'foreign', 'illness', 'journey', 'kingdom', 'outlook', 'segment', 'therapy'],
};

function Game({ difficulty }) {
  const [input, setInput] = useState('');
  const [gameDone, setGameDone] = useState(false);
  const [inputHistory, setInputHistory] = useState([]);
  const [attempts, setAttempts] = useState(6);
  const [secretWord, setSecretWord] = useState(generateSecretWord(difficulty));

  useEffect(() => {
    setSecretWord(generateSecretWord(difficulty));
    setAttempts(difficulty === 'hard' ? 5 : 10);
    setInput('');
    setInputHistory([]);
    setGameDone(false);
  }, [difficulty]);

  function generateSecretWord(difficulty) {
    const wordList = words[difficulty] || [];
    const randomIndex = Math.floor(Math.random() * wordList.length);
    return wordList[randomIndex];
  }

  function submitInput() {
    if (input.trim() !== '' && attempts > 0) {
      const newInputHistory = [{ input: input }];
      for (let i = 0; i < inputHistory.length; i++) {
        newInputHistory.push(inputHistory[i]);
      }
      setInputHistory(newInputHistory);
      setInput('');
      setAttempts((prevAttempts) => prevAttempts - 1);


      if(input === secretWord) {
        setGameDone(!gameDone)
      }
      if (attempts - 1 === 0) {
        setGameDone(!gameDone);
      }
    }
  }
  let isDone = ''
  if(gameDone) {

  }
  
  function inputGuess(event) {
    setInput(event.target.value);
  }
  const inputHistoryComponents = inputHistory.map((inputItem, index) => (
    <InputGuess key={index} input={inputItem.input} />
  ));

  return (
    <div>
      {secretWord}
      <div className = "container">
        <div className="homeContainer">
          <div className = "container"><h1>Wordle</h1></div>
          <h2>You have {attempts} attempts remaining !</h2>
          <div className = "container">
            <p>Please make the Guess:</p>
          </div>
          <div className = "container">
            <input onInput={(event) => inputGuess(event)} value = {input}></input>
            <div className="buttonLink">
              <button onClick={() => submitInput()}>Submit</button>
            </div>
          </div>
        </div>
      </div>
      <div className="previousResult">{inputHistoryComponents}</div>;
    </div>
  );
}

export default Game