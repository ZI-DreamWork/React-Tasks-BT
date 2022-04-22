import React from 'react';

const Button = ({ color, text, onClick }) => {
  return (
    <button
      className='btn'
      style={{ backgroundColor: color }}
      onClick={(e) => onClick(e)}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: 'Add',
};

export default Button;
