import './App.css';
import React from 'react';

import nomes from './nomes.json';
import prefixos from './prefixos.json';

import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>
            {
              prefixos[Math.floor(Math.random() * prefixos.length)].prefix
            }
            </Card.Title>
            <Card.Text>
            {
              nomes[Math.floor(Math.random() * nomes.length)].nome
            }!
            </Card.Text>
          </Card.Body>
        </Card>
    </div>
  );
}

export default App;
