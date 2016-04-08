import React, { Component } from 'react';
import { render } from 'react-dom';
import Sounds from './components/Sounds';
import { Grid, Row, Col } from 'react-bootstrap';
import Firebase from 'firebase';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { sounds: [] };
  }

  componentWillMount() {
    this.firebaseRef = new Firebase('https://soundera.firebaseio.com/sounds/');
    this.firebaseRef.on('value', (dataSnapshot) => {
      const sounds = [];
      dataSnapshot.forEach((childSnapshot) => {
        sounds.push(childSnapshot.val());
      });
      this.setState({ sounds });
    });
    window.fb = this.firebaseRef;
  }

  render() {
    return (
        <div>
          <Grid>
            <Row className="text-center">
              <Col>
                <h1>Soundera</h1>
              </Col>
            </Row>
            <Row>
              <Col xsOffset={2} xs={8}>
                <Sounds max={6} sounds={this.state.sounds} />
              </Col>
            </Row>
          </Grid>
        </div>
    );
  }
}

render(<App />, document.getElementById('root'));
