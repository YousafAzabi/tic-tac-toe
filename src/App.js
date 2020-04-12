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
      isGameEnded: false
    };
  }

  handleReset = () => {
    this.setState({
      status: 'X',
      label: 'Next player: X',
      grid: new Array(9).fill(null),
      isGameEnded: false
    });
  }

  handleClick = (e) => {
    const { label, status, grid } = this.state;
    const index = e.target.getAttribute('index');

    if (!e.target.innerText) {
      const newStatus = (status === 'X') ? 'O' : 'X';
      const newGrid = grid;
      newGrid[index] = status;
      const { newLabel, isGameEnded } = this.getGameStatus(newGrid);

      this.setState({
        status: newStatus,
        grid: newGrid,
        label: newLabel,
        isGameEnded
      });
    }
  }

  getGameStatus = (grid) => {
    const { status } = this.state;
    let newLabel;
    let isGameEnded = true;

    if (this.isWinner()) {
      newLabel = `Winner: ${status}`;
    } else if(grid.indexOf(null) === -1) {
      newLabel = 'Tie';
    } else {
      newLabel = `Next player: ${status === 'X' ? 'O' : 'X'}`;
      isGameEnded = false;
    }

    return { newLabel, isGameEnded };
  }

  isWinner = () => {
    const { status, grid } = this.state;

    if ((grid[0] === status && grid[4] === status && grid[8] === status ) ||
        (grid[2] === status && grid[4] === status && grid[6] === status ) ) {
          return true;
    }

    for (let i = 0; i < 3; i++) {
      const hor = i * 3;
      if ((grid[0+hor] === status && grid[1+hor] === status && grid[2+hor] === status) ||
          (grid[0+i] === status && grid[3+i] === status && grid[6+i] === status) ) {
            return true;
      }
    }

    return false;
  }

  render() {
    const { grid, label, isGameEnded } = this.state;

    return (
      <div className="app">
        <div className="grid">
          {grid.map((value, i) => (
            <Square
              key={i}
              index={i}
              value={value}
              disabled={isGameEnded}
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
