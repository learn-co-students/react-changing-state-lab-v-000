import React from 'react';
import Board from './Board';
import Status from './Status';
import solutions from './solutions';

export default class Game extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      board: this.props.board,
      turn: this.props.turn
    };

    this.handleReset = this.handleReset.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleReset (ev) {
    ev.preventDefault();

    this.setState({
      board: [null, null, null, null, null, null, null, null, null],
      turn: "X"
    });
  }

  handleClick (i, ev) {
    const { board, turn } = this.state;

    ev.preventDefault();

    function newBoard(currentBoard, currentPlayer, fieldIndex) {
      const board = [...currentBoard];
      board[fieldIndex] = currentPlayer;
      return board;
    }

    function nextPlayer(currentPlayer) {
      return currentPlayer === "X" ? "O" : "X";
    }

    this.setState({
      board: newBoard(board, turn, i),
      turn: nextPlayer(turn)
    });
  }

  getWinner () {
    const winningCombos = [
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 4, 8], [6, 4, 2]
    ];
    const board = this.state.board;
    let winner = undefined;

    function comboTest(currentCombo, player) {
      return currentCombo.every((e) => e === player);
    }

    winningCombos.forEach((combo) => {
      const currentCombo = [board[combo[0]], board[combo[1]], board[combo[2]]];

      if(comboTest(currentCombo, "X")) {
        winner = "X";
      } else if (comboTest(currentCombo, "O")) {
        winner = "O";
      }
    });

    return winner;
  }

  isComplete () {
    return this.getWinner() || this.state.board.every((e) => e !== null);
  }

  render () {
    let status = null;
    if(this.isComplete()){
      status = <Status winner={this.getWinner()} />
    }

    return (
      <div className="game">
        <Board board={this.state.board} onClick={this.handleClick} />
        {status}
        <button className="game__reset" onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

Game.defaultProps = {
  board: [null, null, null, null, null, null, null, null, null],
  turn: "X"
}
