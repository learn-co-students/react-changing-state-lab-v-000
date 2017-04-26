
import React from 'react';
import Board from './Board';
import Status from './Status';
import solutions from './solutions';

export default class Game extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      board: [null, null, null, null, null, null, null, null, null],
      turn: 'X'
    };

    this.handleReset = this.handleReset.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleReset (ev) {
    ev.preventDefault()
    this.setState({
      board: [null, null, null, null, null, null, null, null, null],
      turn: 'X'
    })
  }

  handleClick (i, ev) {
    ev.preventDefault()
    const boardClone = this.state.board.slice()
    boardClone[i] = this.state.turn
    this.setState({
      board: boardClone,
      turn: (this.state.turn === 'X' ? 'O' : 'X')
    })
  }

  getWinner () {
    const results = solutions.map(
       solution => solution.map(i => this.state.board[i]).join('')
     );
     const row = results.find(
       (result) => result === 'XXX' || result === 'OOO'
     );
     return row && row[0]; //return row if row if falsy, return row[0] if row is truthy
  }

  isComplete () {
    return this.state.board.every(field => field)
  }

  render () {
    const winner = this.getWinner()
    const over = this.isComplete()
    return (
      <div className='game'>
        <Game>
          <Board board={this.state.board} onClick={this.handleClick} />
          {over ? <Status winner={winner} /> : null}
          <button className='game__reset' onClick={this.handleReset} />
        </Game>
      </div>
    );
  }
}
