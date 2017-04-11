import React from 'react';
import Board from './Board';
import Status from './Status';
import solutions from './solutions';

export default class Game extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      board: [null, null, null,
              null, null, null,
              null, null, null],
      turn: 'X'
    };

    this.handleReset = this.handleReset.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleReset (ev) {
    console.log("clicked")
    ev.preventDefault();
    this.setState({
      board: [null, null, null,
              null, null, null,
              null, null, null],
      turn: 'X'
    })
  }

  handleClick (i, ev) {
    ev.preventDefault();
    var board = this.state.board.slice();
    board.splice(i, 1, this.state.turn);
    var turn = this.state.turn === 'X' ? 'O' : 'X'
    this.setState({ board, turn })
  }

  getWinner () {
    var results = solutions.map(
      (solution) => solution.map( (i) => this.state.board[i]).join('')
    )
    var row = results.find(
      (result) => result === 'XXX' || result === 'OOO'
    )
    return row && row[0];
  }

  isComplete () {
    return this.state.board.every((field) => field)
  }

  render () {
    return (
      <div className="game">
        <Board board={this.state.board} onClick={this.handleClick}/>
        {this.isComplete() ? <Status winner={this.getWinner()} /> : null}
        <button className='game__reset' onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}
