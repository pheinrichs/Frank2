import {combineReducers} from 'redux';

import moves from './moves';
import players from './players';

export default combineReducers({
  moves,
  players,
});

// States
/*
{
  music: {
    timers
  },
  players: {
    p1: {
      health: 10,
      bullets: 12
    },
    p2: {
      health: 10,
      bullets: 12
    }
  },
  actions: {
    visible: true
    p1: 'shoot' | 'block' | 'reload' | null,
    p2: 'shoot' | 'block' | 'reload' | null,
  }
}
*/
