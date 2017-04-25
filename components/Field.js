const React = require('react');

class Field extends React.Component {
  render () {
    const { player, onClick } = this.props;

    return (
      <button onClick={this.props.onClick} className='field' value={this.props.player} disabled={!!player} >
        {this.props.player}
      </button>
    );
  }
}

module.exports = Field;
