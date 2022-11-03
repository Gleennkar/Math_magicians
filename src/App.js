import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Navbar';
import Home from './components/Home';
import Calculate from './components/Calculator';
import Quote from './components/Quote';

const App = () => {  //eslint-disable-line

  return (
    <div className="app">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculate" element={<Calculate />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </div>
  );
};

export default App;
