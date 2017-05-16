import React from 'react';
import Field from './Field';

export default class Board extends React.Component {
  render () {
    const { board, onClick } = this.props;
    const fields = board.map((element, index) =>
      <Field key={index} player={board[index]} onClick={onClick.bind(null, index)} />
    );
    return (
      <div className="board">
        {fields}
      </div>
    );
  }
}
