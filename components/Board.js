const React = require('react');
const Field = require('./Field');

class Board extends React.Component {
  render () {
    const { board, onClick } = this.props;
    return (
      <div className='board'>
        {this.props.board.map((token, i) =>
            <Field player={token} onClick={this.props.onClick.bind(null, i)} key={i}/>
          )
        }
      </div>
    );
  }
}

module.exports = Board;
