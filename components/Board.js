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
        <table>
          <tr>
            <td>{fields[0]}</td>
            <td>{fields[1]}</td>
            <td>{fields[2]}</td>
          </tr>
          <tr>
            <td>{fields[3]}</td>
            <td>{fields[4]}</td>
            <td>{fields[5]}</td>
          </tr>
          <tr>
            <td>{fields[6]}</td>
            <td>{fields[7]}</td>
            <td>{fields[8]}</td>
          </tr>
        </table>
      </div>
    );
  }
}
