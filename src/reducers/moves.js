import * as actions from '../actions/moves';

const initialState = {
  visible: false,
  p1: null,
  p2: null,
};

export default function moves(state = initialState, action) {
  const {type} = action;
  if (type === actions.CHANGE_VISIBILITY) {
    const {visible} = action;
    return {
      visible,
      p1: null,
      p2: null,
    };
  } else if (type === actions.MOVE) {
    const {player, move} = action;
    return {
      ...state,
      [player]: move,
    }
  }

  return state;
}
