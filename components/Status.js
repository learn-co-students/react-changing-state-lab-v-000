import React from 'react';

export default class Status extends React.Component {
  render () {
    const { winner } = this.props;

    function winStatement(){
      if (winner === "X"){
        return "X wins"
      } else if (winner === "O"){
        return "O wins"
      } else if (winner === undefined) {
        return "Tie"
      }
    };

    return (
      <div className="status">
        {winStatement()}
      </div>
    );
  }
}
