import Tone from 'tone';
import * as moves from './moves';
import * as players from './players';

function turn(dispatch, p1, p2) {
  if (p1 === 'shoot') {
    dispatch(players.fire('p1'));

    if (p2 !== 'block') {
      dispatch(players.hurt('p2'));
    }
  }

  if (p2 === 'shoot') {
    dispatch(players.fire('p2'));

    if (p1 !== 'block') {
      dispatch(players.hurt('p1'));
    }
  }

  if (p1 === 'reload') {
    dispatch(players.reload('p1'));
  }

  if (p2 === 'reload') {
    dispatch(players.reload('p2'));
  }
}

export function play() {
  const synth = new Tone.Synth().toMaster();

  return (dispatch, getState) => {
    const doTurn = turn.bind(null, dispatch);
    const pattern = new Tone.Pattern((time, pitch) => {
      const {visible: previous, p1, p2} = getState().moves;
      const current = pitch === 'C#5';

      dispatch(moves.changeVisibility(current));

      if (previous && !current) {
        doTurn(p1, p2);
      }

      synth.triggerAttackRelease(pitch, "4n", time);
    }, ["B2", "C3", "E3", "G3", "C#5"], "upDown");
    pattern.start(0);
    Tone.Transport.start();
  };
}

// 'shoot' | 'block' | 'reload' | null,
const keys = {
  a: {player: 'p1', move: 'shoot'},
  s: {player: 'p1', move: 'block'},
  d: {player: 'p1', move: 'reload'},

  j: {player: 'p2', move: 'shoot'},
  k: {player: 'p2', move: 'block'},
  l: {player: 'p2', move: 'reload'},
};

export function press({key}) {
  return dispatch => {
    if (key === ' ') {
      return dispatch(players.reset());
    }

    const match = keys[key];
    if (match) {
      return dispatch(moves.move(match));
    }
  };
}
