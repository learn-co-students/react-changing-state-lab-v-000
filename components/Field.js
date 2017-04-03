const React = require('react');

class Field extends React.Component {
  render () {
    const { player, onClick, id } = this.props;
    const isDisabled = player !== null;
    return (
      <button className="field" onClick={onClick} disabled={!!player} >{player}</button>
    );
  }
}

module.exports = Field;
