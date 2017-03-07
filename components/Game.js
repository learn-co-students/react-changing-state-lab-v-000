const React = require('react');
const Board = require('./Board');
const Status = require('./Status');
const solutions = require('./solutions');

class Game extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      board: [null, null, null, null, null, null, null, null, null],
      turn: 'X'
    };

    this.handleReset = this.handleReset.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getWinner = this.getWinner.bind(this)
    this.isComplete = this.isComplete.bind(this);
    this.isWon = this.isWon.bind(this);
  }

  handleReset (ev) {
    ev.preventDefault();
    this.setState({
      board: this.state.board.map(i => null)
    })
  }

  handleClick (i, ev) {
    ev.preventDefault();
    this.setState({
      board: this.state.board.map((token, index) => index === i ? this.state.turn : token),
      turn: this.state.turn === 'X' ? 'O': 'X'
    })
  }

  getWinner () {
    return this.isWon();
  }

  isComplete () {
    let full = this.state.board.every(pos => pos === 'X' || pos === 'O');
    return !!this.isWon() || full
  }

  isWon() {
    let won = solutions.find(win_combo => {
      let board = this.state.board;
      let pos1 = board[win_combo[0]]
      let pos2 = board[win_combo[1]]
      let pos3 = board[win_combo[2]]
      return pos1 === pos2 && pos2 === pos3 && (pos1 === 'X' || pos1 === 'O')
    }) 
    return won && this.state.board[won[0]];
  }

  render () {
    return (
      <div className="game">
        <Board board={this.state.board} onClick={this.handleClick} />
        {this.isComplete() &&
          <Status winner={this.getWinner()} />
        }
        <button className="game__reset" onClick={this.handleReset}>Reset Game</button>
      </div>
    );
  }
}

module.exports = Game;
