const React = require('react');

class Status extends React.Component {
  render () {
    const { winner } = this.props;
    return (
      <div className='status'>
        <p>{this.props.winner ? this.props.winner + ' wins' : 'Tie'}</p>
      </div>
    );
  }
}

module.exports = Status;
