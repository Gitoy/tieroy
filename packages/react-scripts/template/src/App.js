import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Something's coming up, in seconds... 30
        </p>
        <a
          className="App-link"
          href="https://nl.wikipedia.org/wiki/Hoofdpagina"
          target="_blank"
          rel="noopener noreferrer"
        >
          To fetch that inspiration!
        </a>
      </header>
    </div>
  );
}

export default App;
