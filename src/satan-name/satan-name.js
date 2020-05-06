import React from 'react';
import nomes from '../nomes.json';
import prefixos from '../prefixos.json';

import Pentagram from '../pentagram.svg';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

export default class SatanName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prefix: '',
      name: ''
    };
  }

  getQuote() {
    let prefix = prefixos[Math.floor(Math.random() * prefixos.length)].prefix;
    let name = nomes[Math.floor(Math.random() * nomes.length)].nome;
    this.setState(() => (
      {
        prefix,
        name
      }
    ));
  }

  componentDidMount(){
    this.getQuote();
  }

  render() {
    return (
      <Container>
        <img
          src={Pentagram}
          alt="Pentagrama"
          style={{
            maxWidth: '30%',
            margin: '40px',
          }}
          onClick={() => this.getQuote()}
        />
        <div className="row justify-content-center">
          <Card
            style={{
              background: "#c41b21",
              color: "black",
              fontSize: '40px',
              borderCornerShape: 'scoop',
              borderRadius: '30px'
            }}
          >
            <Card.Body>
              <Card.Text>
                <b>
                {
                  this.state.prefix
                }
                </b>
                <br/>
                {
                  this.state.name
                }!
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Container>
    );
  }
}