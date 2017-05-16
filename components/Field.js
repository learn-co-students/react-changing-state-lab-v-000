import React from 'react';

export default class Field extends React.Component {
  render () {
    const { player, onClick } = this.props;
    return (
      <button className="field"
        disabled={player === "X" || player === "O"}
        onClick={onClick} >
        {player}
      </button>
    );
  }
}
