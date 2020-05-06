import React from 'react';
import './App.css';
import nomes from './nomes.json';

function App() {
  return (
    <div className="App">
      <ul>
      {
        <li>{nomes[Math.floor(Math.random() * nomes.length)].nome}</li>
      }
      </ul>
    </div>
  );
}

export default App;
