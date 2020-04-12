import React from 'react';

class Square extends React.Component {
  render() {
    const { index, value, handleClick } = this.props;

    return (
      <button
        className="square"
        index={index}
        onClick={handleClick}
      >
        {value}
      </button>
    );
  }
}

export default Square;
