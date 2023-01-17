import React from 'react';
import './button.scss';

export const Button = props => {
  return (
    <button
      className="btn"
      onClick={() => (props.click ? props.click(props.arg || '') : undefined)}
    >
      {props.text}
    </button>
  );
};
