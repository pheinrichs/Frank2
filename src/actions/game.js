import Tone from 'tone';
import * as moves from './moves';

export function play() {
  const synth = new Tone.Synth().toMaster();

  return dispatch => {
    const pattern = new Tone.Pattern((time, pitch) => {
      dispatch(moves.changeVisibility(pitch === 'C#5'));
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
    const match = keys[key];
    if (match) {
      dispatch(moves.move(match));
    }
  };
}
