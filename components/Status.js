import React from 'react';

export default class Status extends React.Component {
  render () {
    const { winner } = this.props;
    const status = winner ? `${winner} wins` : "Tie"
    return (
      <div className='status'>
        {status}
      </div>
    );
  }
}
