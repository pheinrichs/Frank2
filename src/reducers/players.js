import * as actions from '../actions/players';

const clipSize = 6;
const health = 3;
const defaultPlayer = {
  health,
  bullets: clipSize,
};

const initialState = {
  p1: { ...defaultPlayer },
  p2: { ...defaultPlayer },
};

export default function players(state = initialState, action) {
  const result = {...state};
  const {type, player: index} = action;
  const player = result[index];
  const other = result[index === 'p1' ? 'p2' : 'p1'];

  if (type === actions.FIRE) {
    player.bullets--;
  } else if (type === actions.HURT) {
    player.health--;
  } else if (type === actions.RELOAD) {
    player.bullets = clipSize;
  }

  if (player && player.health === 0) {
    player.winner = false;
    player.loser = true;

    Object.keys(result)
      .filter(k => k !== index)
      .forEach(k => result[k].winner = !result[k].loser);
  }

  return result;
}
