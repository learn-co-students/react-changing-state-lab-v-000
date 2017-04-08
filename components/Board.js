import React from 'react';
import Field from './Field';

export default class Board extends React.Component {
  render () {
    const { board, onClick } = this.props;
    return (
      <div className="board cf">
        {this.props.board.map((token,index) => 
          <Field key={index} player={token} onClick={onClick.bind(null, index)} />
        )}
      </div>
    );
  }
}
