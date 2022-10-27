import './Calculator.css';
import React from 'react';
import calculate from '../logic/calculate';

export default class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { total: '', next: '', operation: '' };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState((state) => calculate(state, event.target.textContent));
  }

  render() {
    const { next, total, operation } = this.state;
    return (
      <div className="calculator-grid">
        <div className="output">
          <div className="operand">
            <span>{total}</span>
            <span>{operation}</span>
            <span>{next}</span>
          </div>
        </div>
        <button type="button" className="button" onClick={this.handleClick}>AC</button>
        <button type="button" className="button" onClick={this.handleClick}>+/-</button>
        <button type="button" className="button" onClick={this.handleClick}>%</button>
        <button type="button" className="symbol active" onClick={this.handleClick}>÷</button>
        <button type="button" className="button" onClick={this.handleClick}>7</button>
        <button type="button" className="button" onClick={this.handleClick}>8</button>
        <button type="button" className="button" onClick={this.handleClick}>9</button>
        <button type="button" className="symbol active" onClick={this.handleClick}>&times;</button>
        <button type="button" className="button" onClick={this.handleClick}>4</button>
        <button type="button" className="button" onClick={this.handleClick}>5</button>
        <button type="button" className="button" onClick={this.handleClick}>6</button>
        <button type="button" className="symbol active" onClick={this.handleClick}>-</button>
        <button type="button" className="button" onClick={this.handleClick}>1</button>
        <button type="button" className="button" onClick={this.handleClick}>2</button>
        <button type="button" className="button" onClick={this.handleClick}>3</button>
        <button type="button" className="symbol active" onClick={this.handleClick}>+</button>
        <button type="button" className="span-two" onClick={this.handleClick}>0</button>
        <button type="button" className="button" onClick={this.handleClick}>.</button>
        <button type="button" className="symbol active" onClick={this.handleClick}>=</button>

      </div>
    );
  }
}
