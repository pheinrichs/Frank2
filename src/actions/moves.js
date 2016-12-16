export const MOVE = 'MOVE';
export const CHANGE_VISIBILITY = 'CHANGE_VISIBILITY';

export function move({player, move}) {
  return {
    type: MOVE,
    player,
    move,
  };
}

export function changeVisibility(visible) {
  return {
    type: CHANGE_VISIBILITY,
    visible,
  };
}
