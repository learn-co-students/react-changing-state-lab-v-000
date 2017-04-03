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
  }

  handleReset (ev) {
  }

  handleClick (i, ev) {
    console.log(i.target);
    console.log(ev.target.id);
  }

  getWinner () {
  }

  isComplete () {
  }

  render () {
    return (
      <div className="game">
        < Board board={this.state.board} onClick={this.handleClick} />
      </div>
    );
  }
}

module.exports = Game;
