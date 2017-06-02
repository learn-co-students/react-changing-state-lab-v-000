import React from 'react';
import Board from './Board';
import Status from './Status';
import solutions from './solutions';

export default class Game extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      board: [null, null, null, null, null, null, null, null, null],
      turn: "X",
    };

    this.handleReset = this.handleReset.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getWinner = this.getWinner.bind(this);
    this.isComplete = this.isComplete.bind(this);
  }

  handleReset (ev) {
    ev.preventDefault();
    this.setState({
      board: [null, null, null, null, null, null, null, null, null],
      turn: "X"
    })
  }

  handleClick (i, ev) {
    ev.preventDefault();
    const board = this.state.board.slice();
    board.splice(i, 1, this.state.turn)
    this.setState({
      board: board,
      turn: this.state.turn === "X" ? "O" : "X"
    })
  }

  getWinner () {
    // let player = this.state.turn
    // let board = this.state.board
    // let winner = undefined;
    // solutions.map(solution => {
    //   if (board[solution[0]] === player && board[solution[1]] === player && board[solution[2]] === player) {
    //     winner = player
    //   }
    // })
    // return winner
    const results = solutions.map(
      solution => solution.map(i => this.state.board[i]).join('')
    );
    const row = results.find(
      (result) => result === 'XXX' || result === 'OOO'
    );
    return row && row[0] //return row if row if falsy, return row[0] if row is truthy
  }

  isComplete () {
    return !this.state.board.includes(null)
  }

  render () {
    return (
      <div className="game">
        <Board board={this.state.board} onClick={this.handleClick}/>
        {this.isComplete() ? <Status winner={this.getWinner()}/> : null}
        <button className="game__reset" onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}
