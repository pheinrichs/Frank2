import React from 'react';

const Repeater = ({count, children}) => {
  const factory = children;

  const items = [];
  for(let i = count; i > 0; i--) {
    items.push(i);
  }

  items.reverse();

  return (
    <div className="repeater">
      {items.map(x => factory(x))}
    </div>
  );
};

Repeater.propTypes = {
  count: React.PropTypes.number.isRequired,
  children: React.PropTypes.func.isRequired,
};

export default Repeater;
