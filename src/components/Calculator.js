import './Calculator.css';
import React from 'react';

export default class Calculator extends React.PureComponent {
  render() {
    return (
      <div className="calculator-grid">
        <div className="output">
          <div className="operand">0</div>
        </div>
        <button type="button" className="button">AC</button>
        <button type="button" className="button">+/-</button>
        <button type="button" className="button">%</button>
        <button type="button" className="symbol">÷</button>
        <button type="button" className="button">7</button>
        <button type="button" className="button">8</button>
        <button type="button" className="button">9</button>
        <button type="button" className="symbol">&times;</button>
        <button type="button" className="button">4</button>
        <button type="button" className="button">5</button>
        <button type="button" className="button">6</button>
        <button type="button" className="symbol">-</button>
        <button type="button" className="button">1</button>
        <button type="button" className="button">2</button>
        <button type="button" className="button">3</button>
        <button type="button" className="symbol">+</button>
        <button type="button" className="span-two">0</button>
        <button type="button" className="button">.</button>
        <button type="button" className="symbol">=</button>

      </div>
    );
  }
}
