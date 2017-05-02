import React from 'react';
import Board from './Board';
import Status from './Status';
import solutions from './solutions';

export default class Game extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      board: [null, null, null, null, null, null, null, null, null],
      turn: "X"
    };

    this.handleReset = this.handleReset.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleReset (ev) {
    ev.preventDefault()
    this.setState({
      board: [null, null, null, null, null, null, null, null, null],
    })
  }

  handleClick (i, ev) {
    ev.preventDefault()
    console.log("Handling click!!!")
    this.setState((prevState, props) => {
      const newBoard = prevState.board.slice()
      newBoard[i] = prevState.turn
      return ({
        board: newBoard,
        turn: (prevState.turn === "X" ? "O" : "X")
      })
    })
  }

  componentDidUpdate() {
    console.log(this.state)
  }

  getWinner () {
    const board = this.state.board
    const winnerCombo = solutions.find(function(combo) {
      return board[combo[0]] !== null && board[combo[0]] === board[combo[1]] && board[combo[1]] === board[combo[2]]
    })

    return winnerCombo ? board[winnerCombo[0]] : undefined
  }

  isComplete () {
    return this.state.board.every((field) => field === "X" || field === "O") || this.getWinner()
  }

  render () {
    console.log(this.isComplete())
    return (
      <div className="game">
        <Board board={this.state.board} onClick={this.handleClick} />
        { this.isComplete() && <Status winner={this.getWinner()} /> }
        <button className="game__reset" onClick={this.handleReset}>Reset Game</button>
      </div>
    );
  }
}
