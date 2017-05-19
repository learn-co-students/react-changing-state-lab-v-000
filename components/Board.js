import React from 'react';
import Field from './Field';

export default class Board extends React.Component {
  
  render () {
    const { board, onClick } = this.props;
    return (
      <div className="board">
      	{board.map((item, index) => {
      		return <Field key={index} player={item} onClick={onClick.bind(null, index)}/>
      	})}
      </div>
    );
  }
}
