const React = require('react');

class Field extends React.Component {
  render () {
    const { player, onClick, id } = this.props;
    const disabled = player !== null;
    return (
      <button className="field" id={id} onClick={onClick} disabled={disabled} >{this.props.player || "Empty"}</button>
    );
  }
}

module.exports = Field;
