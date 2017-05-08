import React from 'react';
import Field from './Field';

export default class Board extends React.Component {
  render () {
    const { board, onClick } = this.props;
    return (
      <div className="board">
      {
        board.map((player, i) =>
          <Field key={i} player={player} onClick={onClick.bind(null, i)} />
           )
      }
      </div>
    );
  }
}


//The board component is a pure component. It consists of exactly nine `Field`s and accepts the `board` prop. It renders the actual Tic Tac Toe board.
