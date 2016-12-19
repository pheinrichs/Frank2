import React from 'react';
import PlayerArea from './PlayerArea';
import Repeater from './Repeater';
import Bullet from './Bullet';
import Heart from './Heart';
import Block from './Block';
import Reload from './Reload';
import Shot from './Shot';

function Player({name, health, bullets, move}) {
  let shownMove;
  switch (move) {
  case 'block': shownMove = <Block />; break;
  case 'reload': shownMove = <Reload />; break;
  case 'shoot': shownMove = <Shot />; break;
  default: shownMove = null;
  }

  return (
    <PlayerArea name={name}>
      <Repeater count={health}>{i => <Heart key={name + '-health-' + i.toString()} />}</Repeater>
      <Repeater count={bullets}>{i => <Bullet key={name + '-bullet-' + i.toString()} />}</Repeater>

      <div className="move">
        {shownMove}
      </div>
    </PlayerArea>
  );
}

Player.propTypes = {
  name: React.PropTypes.string.isRequired,
  health: React.PropTypes.number.isRequired,
  bullets: React.PropTypes.number.isRequired,
  move: React.PropTypes.string,
};

export default Player;
