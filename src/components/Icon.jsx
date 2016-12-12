import React from 'react';

const Icon = (emojiCode) => {
  const func = () => {
    return (<span className="action">{emojiCode}</span>)
  };

  return func;
};

export default Icon;
