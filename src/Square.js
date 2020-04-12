import React from 'react';

class Square extends React.Component {
  render() {
    const { index, value, handleClick, disabled } = this.props;

    return (
      <button
        className="square" 
        index={index}
        onClick={handleClick}
        disabled={disabled}
      >
        {value}
      </button>
    );
  }
}

export default Square;
