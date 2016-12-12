import React from 'react';
import { connect } from 'react-redux';
import Player from '../components/Player';

const Players = props => (
  <div className="players">
    {props.players.map(p => <Player key={p.name} {...p} />)}
  </div>
);

const mapStateToProps = (state) => {
  const players = Object.keys(state.players).map(k => ({
    name: k,
    ...state.players[k],
  }));

  return {
    players
  };
};

export default connect(mapStateToProps)(Players);
