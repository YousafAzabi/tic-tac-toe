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
      grid: new Array(9).fill(null)
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
    const { label, status, grid } = this.state;
    const index = e.target.getAttribute('index');

    if (!e.target.innerText) {
      const newStatus = (status === 'X') ? 'O' : 'X';
      const newGrid = grid;
      newGrid[index] = status;
      const newLabel = this.getGameStatus(newGrid);

      this.setState({
        status: newStatus,
        grid: newGrid,
        label: newLabel
      });
    }
  }

  getGameStatus = (grid) => {
    const { status } = this.state;
    let newLabel;

    if (this.isWinner()) {
      newLabel = `Winner: ${status}`;
    } else if(grid.indexOf(null) === -1) {
      newLabel = 'Tie';
    } else {
      newLabel = `Next player: ${status === 'X' ? 'O' : 'X'}`;
    }

    return newLabel;
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
