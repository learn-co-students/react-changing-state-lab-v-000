const React = require('react');
const Field = require('./Field');

class Board extends React.Component {
  render () {
    const { board, onClick } = this.props;
    return (
      <div className="board">
        {
          board.map((mark, i) => 
            <Field key={i} player={mark} onClick={onClick.bind(null, i)} />
          )
        }
      </div>
    );
  }
}

module.exports = Board;
