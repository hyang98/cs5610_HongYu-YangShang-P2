import React from 'react';
import './InputHistory.css'

function InputHistory({ inputHistory }) {
  return (
    <div className="previousResult">
      {inputHistory.map((inputItem, index) => (
        <div
          key={index}
          dangerouslySetInnerHTML={{ __html: inputItem.input }}
        ></div>
      ))}
    </div>
  );
}

export default InputHistory;
