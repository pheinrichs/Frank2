export const FIRE = 'FIRE';
export const HURT = 'HURT';
export const RELOAD = 'RELOAD';

export function fire(player) {
  return {
    type: FIRE,
    player,
  };
}

export function hurt(player) {
  return {
    type: HURT,
    player,
  };
}

export function reload(player) {
  return {
    type: RELOAD,
    player,
  };
}
