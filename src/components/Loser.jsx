import React from 'react';
import PlayerArea from './PlayerArea';

function Loser({name}) {
  return (
    <PlayerArea name={name}>
      <p>Loser ...</p>
    </PlayerArea>
  );
}

Loser.propTypes = {
  name: React.PropTypes.string.isRequired,
};

export default Loser;
