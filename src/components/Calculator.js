import React, { useState } from 'react';
import './index.css';
// import React from 'react';
import calculate from '../logic/calculate';

const initialState = {
  total: null,
  next: null,
  operation: null,
};

const Calculator = () => {
  const [state, setState] = useState(initialState);

  const handleClick = (e) => {
    setState(calculate(state, e.target.textContent));
  };

  const { next, total, operation } = state;
  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="operand">
          <span>{total}</span>
          <span>{operation}</span>
          <span>{next}</span>
        </div>
      </div>
      <button type="button" className="button" onClick={handleClick}>AC</button>
      <button type="button" className="button" onClick={handleClick}>+/-</button>
      <button type="button" className="button" onClick={handleClick}>%</button>
      <button type="button" className="symbol active" onClick={handleClick}>÷</button>
      <button type="button" className="button" onClick={handleClick}>7</button>
      <button type="button" className="button" onClick={handleClick}>8</button>
      <button type="button" className="button" onClick={handleClick}>9</button>
      <button type="button" className="symbol active" onClick={handleClick}>x</button>
      <button type="button" className="button" onClick={handleClick}>4</button>
      <button type="button" className="button" onClick={handleClick}>5</button>
      <button type="button" className="button" onClick={handleClick}>6</button>
      <button type="button" className="symbol active" onClick={handleClick}>-</button>
      <button type="button" className="button" onClick={handleClick}>1</button>
      <button type="button" className="button" onClick={handleClick}>2</button>
      <button type="button" className="button" onClick={handleClick}>3</button>
      <button type="button" className="symbol active" onClick={handleClick}>+</button>
      <button type="button" className="span-two" onClick={handleClick}>0</button>
      <button type="button" className="button" onClick={handleClick}>.</button>
      <button type="button" className="symbol active" onClick={handleClick}>=</button>

    </div>
  );
};
export default Calculator;
