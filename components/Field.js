import React from 'react';

export default class Field extends React.Component {

  render () {
    const { player, onClick } = this.props;

    return (
      <button className="field" disabled={player === null ? false : true} onClick={onClick}>
        {player}
      </button>
    );
  }
}
