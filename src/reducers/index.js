import {combineReducers} from 'redux';

import players from './players';

export default combineReducers({
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
    p1: {
      type: 'shoot' | 'block' | 'reload'
      success: true || false
    },
    p2: {
      ...
    }
  }
}
*/
