import React from 'react';
import PlayerArea from './PlayerArea';

function Winner({name}) {
  return (
    <PlayerArea name={name}>
      <p>Winner!</p>
    </PlayerArea>
  );
}

Winner.propTypes = {
  name: React.PropTypes.string.isRequired,
};

export default Winner;
