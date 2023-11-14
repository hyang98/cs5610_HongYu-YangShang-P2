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
  const [message, setMessage] = useState('');
  const [colorCodedInput, setColorCodedInput] = useState('');

  useEffect(() => {
    setSecretWord(generateSecretWord(difficulty));
    setAttempts(difficulty === 'hard' ? 5 : 6);
    setInput('');
    setInputHistory([]);
    setGameDone(false);
  }, [difficulty]);

  function generateSecretWord(difficulty) {
    const wordList = words[difficulty] || [];
    const randomIndex = Math.floor(Math.random() * wordList.length);
    return wordList[randomIndex];
  }

  function compareWords(userInput, secret) {
    let result = '';
    for (let i = 0; i < secret.length; i++) {
      const userChar = userInput[i];
      const secretChar = secret[i];
  
      if (userChar === secretChar) {
        result += `<span style="background-color: green">${userChar}</span>`;
      } else if (secret.includes(userChar)) {
        result += `<span style="background-color: yellow">${userChar}</span>`;
      } else {
        result += `<span style="background-color: gray">${userChar}</span>`;
      }
    }
    return result;
  }

  function submitInput() {
    setMessage('');
    if (input.trim() !== '' && attempts > 0) {
      const inputLength = input.trim().length;
      let minLength, maxLength;

      if (difficulty === 'hard') {
        minLength = 7;
        maxLength = 7;
      } else {
        minLength = 6;
        maxLength = 6;
      }

      console.log("minlength: " + minLength);
      console.log("maxLength: " + maxLength);
      console.log("inputlength: " + inputLength);

      if (inputLength < minLength || inputLength > maxLength) {
        setMessage('Word length is not within the acceptable range.');
      } else if (input.toLowerCase() === secretWord.toLowerCase()) {
        setGameDone(true);
        setMessage('Congratulations! You guessed the correct word!');
      } else {
        const coloredInput = compareWords(input.toLowerCase(), secretWord.toLowerCase());
        setColorCodedInput(coloredInput);

        const newInputHistory = [{ input: coloredInput }, ...inputHistory];
        setInputHistory(newInputHistory);
        setInput('');
        setAttempts((prevAttempts) => prevAttempts - 1);

        if (attempts - 1 === 0) {
          setGameDone(true);
          setMessage('Sorry, no attempts remaining.');
        }
      }
    } else {
      if(attempts === 0) {
        setMessage('No attempts remaining...');
      } else {
        setMessage('Input is empty!');
      }
    }
  }

  function resetGame(difficulty) {
    setSecretWord(generateSecretWord(difficulty));
    setAttempts(difficulty === 'hard' ? 5 : 6);
    setInput('');
    setInputHistory([]);
    setGameDone(false);
    setMessage('');
    setColorCodedInput('');
  }

  function inputGuess(event) {
    setInput(event.target.value);
  }

  const inputHistoryComponents = inputHistory.map((inputItem, index) => (
    <div
      key={index}
      dangerouslySetInnerHTML={{ __html: inputItem.input }}
    ></div>
  ));


  return (
    <div>
      {secretWord}
      <div className="container">
        <div className="homeContainer">
          <div className="container">
            <h1>Wordle</h1>
          </div>
          {gameDone ? (
            <div>
              <div className="containerMessage">
                <button onClick={() => resetGame(difficulty)}>Reset Game</button>
                <h3>{message}</h3>
              </div>
            </div>
          ) : (
            <div className="containerMessage">
              <h2>You have {attempts} attempts remaining !</h2>
              <h3>{message}</h3>
            </div>
          )}
          <div className="container">
            <p>Please make the Guess:</p>
          </div>
          <div className="containerButton">
            <input
              onInput={(event) => inputGuess(event)}
              value={input}
              placeholder={`Please input ${secretWord.length} letters`}
            ></input>
            <div className="buttonLink">
              <button onClick={() => submitInput()} disabled={gameDone}>Submit</button>
            </div>
          </div>
        </div>
      </div>
      <div className="previousResult">{inputHistoryComponents}</div>;
    </div>
  );
}

export default Game;
