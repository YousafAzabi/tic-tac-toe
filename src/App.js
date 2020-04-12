import React from 'react';
import ReactDOM from 'react-dom';
import Square from './Square';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'X',
      label: 'Next player: X',
      grid: new Array(9).fill(null),
    };
  }

  handleReset = () => {
    this.setState({
      status: 'X',
      label: 'Next player: X',
      grid: new Array(9).fill(null),
    });
  }

  handleClick = (e) => {

  }

  getGameStatus = () => {

  }

  render() {
    const { grid, label } = this.state;

    return (
      <div className="app">
        <div className="grid">
          {grid.map((value, i) => (
            <Square
              key={i}
              index={i}
              value={value}
              handleClick={this.handleClick}
            />
          ))}
        </div>
        <div className="status">{label}</div>
        <button className="reset" onClick={this.handleReset}>Reset</button>
      </div>
    );
  }

}

export default App;
