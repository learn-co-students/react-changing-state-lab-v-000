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
      turn: 'X', 
    };

    this.handleReset = this.handleReset.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleReset (ev) {
    ev.preventDefault(); 
    this.setState({
      board: [null, null, null, 
              null, null, null, 
              null, null, null] 
    }); 
  }

  handleClick (i, ev) {
    ev.preventDefault(); 

    var board = this.state.board; 
    board[i] = this.state.turn; 
    this.setState({
      board: board,  
    }); 
    this.updateTurn(); 
  }

  updateTurn() {
    var turn = this.state.turn; 
    var newTurn = turn == "X" ? "O" : "X"; 
    this.setState({
      turn: newTurn,  
    })
  }

  getWinner() {
    const board = this.state.board; 
    for (var i = 0; i < solutions.length; i++){
      const [a, b, c] = solutions[i]; 
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];  
      } 
    }
    return undefined;  
  }

  isWin() {
    return (this.getWinner() != null);   
  }

  isComplete () {
    const board = this.state.board; 
    for (var i = 0; i < board.length; i++) {
      if (board[i] == null) {
        return false; 
      } 
    } 
    return true; 
  }

  render () {
    return (
      <div className="game">
        <Board board={this.state.board} onClick={this.handleClick} />

        <button className="game__reset" onClick={this.handleReset}>Reset</button>

        { this.isComplete() ? <Status winner={this.getWinner()} /> : null}
      </div>
    );
  }
}
