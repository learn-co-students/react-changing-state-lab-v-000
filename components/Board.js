const React = require('react');
const Field = require('./Field');

class Board extends React.Component {

  render () {
    const { board, onClick } = this.props;
    return (
      <div className="board">
        {
          this.props.board.map((player, i) =>
            <Field
              onClick={onClick.bind(null, i)}
              key={i}
              player={player}
            />
          )
        }
      </div>
    );
  }
}

module.exports = Board;
