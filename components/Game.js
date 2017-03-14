const React = require('react');
const Board = require('./Board');
const Status = require('./Status');
const solutions = require('./solutions');

const resetGame = {
  board: [
    null, null, null,
    null, null, null,
    null, null, null
  ],
  turn: 'X'
}

class Game extends React.Component {
  constructor (props) {
    super(props);
    this.state = resetGame;

    this.handleReset = this.handleReset.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleReset (ev) {
    ev.preventDefault();
    this.setState(resetGame);
  }

  handleClick (i, ev) {
    ev.preventDefault();
    let boardVar = this.state.board.slice();
    const currentMark = this.state.turn;
    let newMark = "X"

    boardVar.splice(i, 1, currentMark);

    if (currentMark === "X") {
      newMark = "O"
    }

    this.setState({
      board: boardVar,
      turn: newMark
    })
  }

  getWinner () {
    const possibleWins = solutions.map(
      (solution) => solution.map((index) => this.state.board[index]).join('')
    );
    const winner = possibleWins.find(
      (row) => row === 'XXX' || row === 'OOO'
    );
    return winner && winner[0];
  }

  isComplete () {
    return (this.getWinner() || this.state.board.every((mark) => mark === "X" || mark === "O"))
  }

  render () {
    return (
      <div className='game'>
        <Board board={this.state.board} onClick={this.handleClick} />
        { this.isComplete() ? <Status winner={this.getWinner()} /> : null }
        <button className="game__reset" onClick={this.handleReset}>Reset Board</button>
      </div>
    );
  }
}

module.exports = Game;
