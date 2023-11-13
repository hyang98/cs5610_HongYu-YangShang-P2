import { useContext, useState } from "react";
import './Game.css';
import InputGuess from "./InputGuess";

function Game() {
  const [attempts, setAttempts] = useState(6);
  const [input, setInput] = useState('');
  const [gameDone, setGameDone] = useState(false);
  const [inputHistory, setInputHistory] = useState([]);

  function inputGuess(event) {
    setInput(event.target.value);
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
  
      if (attempts - 1 === 0) {
        setGameDone(true);
      }
    }
  }

  const inputHistoryComponents = inputHistory.map((inputItem, index) => (
    <InputGuess key={index} input={inputItem.input} />
  ));

  return (
    <div>
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