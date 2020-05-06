import './App.css';
import React from 'react';

import nomes from './nomes.json';
import prefixos from './prefixos.json';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

import Pentagram from './pentagram.svg';

function App() {
  return (
    <div className="App">
      <Container>
        <img
          src={Pentagram}
          alt="Pentagrama"
          style={{
            maxWidth: '30%',
            margin: '40px'
          }}
        />
        <div className="row justify-content-center">
          <Card
            style={{
              background: "#c41b21",
              color: "black"
            }}
          >
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
      </Container>
    </div>
  );
}

export default App;
