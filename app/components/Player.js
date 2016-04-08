import React from 'react';

import { Button } from 'react-bootstrap';

export default function Player(props) {
  return <Button bsStyle="primary">{props.sound}</Button>;
}

Player.propTypes = { sound: React.PropTypes.string };
