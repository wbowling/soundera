import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Player from './Player';

export default function Sounds(props) {
  const rows = [];
  props.sounds.forEach((sound, i) => {
    const index = Math.floor(i / props.max);
    if ((i % props.max) === 0) {
      rows[index] = new Array(props.max);
    }

    rows[index].push(<Col className="text-center" xs={4} md={2} key={sound}>
        <Player sound={sound} />
    </Col>);
  });
  const fin = rows.map(r => <Row>{r}</Row>);
  return (
    <Row>
      {fin}
    </Row>
  );
}

Sounds.propTypes = { sounds: React.PropTypes.array };
Sounds.propTypes = { max: React.PropTypes.number };
