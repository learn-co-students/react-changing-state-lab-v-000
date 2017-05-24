import React from 'react';
import Field from './Field';

export default class Board extends React.Component {
  render () {
    const { board, onClick } = this.props;

    return (
      <div className="board">
        <div className="row">
          <Field player={board[0]} onClick={onClick.bind(null, 0)} />
          <Field player={board[1]} onClick={onClick.bind(null, 1)} />
          <Field player={board[2]} onClick={onClick.bind(null, 2)} />
        </div>
        <div className="row">
          <Field player={board[3]} onClick={onClick.bind(null, 3)} />
          <Field player={board[4]} onClick={onClick.bind(null, 4)} />
          <Field player={board[5]} onClick={onClick.bind(null, 5)} />
        </div>
        <div className="row">
          <Field player={board[6]} onClick={onClick.bind(null, 6)} />
          <Field player={board[7]} onClick={onClick.bind(null, 7)} />
          <Field player={board[8]} onClick={onClick.bind(null, 8)} />
        </div>
      </div>
    );
  }
}
