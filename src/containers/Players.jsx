import React from 'react';
import { connect } from 'react-redux';
import Player from '../components/Player';
import Loser from '../components/Loser';
import Winner from '../components/Winner';

function mapper(player) {
  const {winner, loser} = player;
  if (winner) {
    return <Winner {...player} />;
  }

  if (loser) {
    return <Loser {...player} />;
  }

  return <Player {...player} />;
}

const Players = ({players}) => (
  <div className="players">
    {players.map(mapper)}
  </div>
);

const mapStateToProps = (state) => {
  const players = Object.keys(state.players).map(k => ({
    key: k,
    name: k,
    ...state.players[k],
    move: state.moves.visible ? state.moves[k] : null,
  }));

  return {
    players,
  };
};

export default connect(mapStateToProps)(Players);
