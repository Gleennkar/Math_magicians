import React from 'react';
import Calculator from './components/Calculator';
import './components/Calculator.css';

export default class App extends React.PureComponent {
  render() {
    return (
      <>
        <Calculator />
      </>
    );
  }
}
