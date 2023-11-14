
import React from 'react';

function InputGuess({ value, onInput, placeholder }) {
  return (
    <input
      onInput={onInput}
      value={value}
      placeholder={placeholder}
    />
  );
}

export default InputGuess;
