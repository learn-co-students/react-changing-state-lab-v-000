const React = require('react');

class Field extends React.Component {
  render () {
    const { player, onClick } = this.props;
    var disabledBool = !!player;
    return (
      <button className="field" onClick={onClick} disabled={disabledBool}>
        {player}
      </button>
    );
  }
}

module.exports = Field;
