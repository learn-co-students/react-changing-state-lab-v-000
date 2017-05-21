import React from 'react';

export default class Field extends React.Component {
  render () {
    const { player, onClick } = this.props;
    return (
      <button disabled={!!player} className="field" onClick={onClick}>
        {player}
      </button>
    );
  }
}


