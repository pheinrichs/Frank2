import React from 'react';

function PlayerArea({name, children}) {
  return (
    <div className="player">
      <h2>{name}</h2>
      {children}
    </div>
  )
}

PlayerArea.propTypes = {
  children: React.PropTypes.any,
  name: React.PropTypes.string.isRequired,
}

export default PlayerArea;
