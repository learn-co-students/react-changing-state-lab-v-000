const React = require('react');
const Field = require('./Field');

class Board extends React.Component {

  render () {
    const { board, onClick } = this.props;
    return (
      <div className="board">
         {this.props.board.map((token,index) =>
           <Field key={index} player={token} onClick={onClick.bind(null, index)} />)}
       </div>
    );
  }
}

module.exports = Board;
