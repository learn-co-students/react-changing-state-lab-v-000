import React from 'react';
import Board from './Board';
import Status from './Status';
import solutions from './solutions';

export default class Game extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      turn: 'X',
      board: [ null, null, null, null, null, null, null, null, null]
    };

    this.handleReset = this.handleReset.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleReset (ev) {
    ev.preventDefault();
    this.setState({
      board: [ null, null, null, null, null, null, null, null, null]
  })
  }

  handleClick (i, ev) {
    ev.preventDefault();
    // const board = this.state.board.slice();     
    // board.splice(i, 1, this.state.turn);
    var board = this.state.board.map((field, index) => i === index ? field = this.state.turn : field = field)
    var turn = this.state.turn === 'X' ? 'O' : 'X'
    this.setState({
      board: board,
      turn: turn
    })
  }

  getWinner () {
    var board = this.state.board;
    var winner;
    solutions.map(function(solution){
      if (solution.every(field => board[field] === 'X')){
       winner = 'X'
      }else if(solution.every(field => board[field] === 'O')){
        winner = 'O'
      }
    })
    return winner
  }

  isComplete () {
    return this.state.board.every(element => (element === 'X') || (element === 'O')) || this.getWinner() !== undefined
  }

  render () {
    return (
      <div className="game">
        <button className="game__reset" onClick={this.handleReset}>Reset</button> 
        <Board board={this.state.board} onClick={this.handleClick}/>
        {this.isComplete() ? <Status winner={this.getWinner()}/> : null} 
      </div>
    );
  }
}
