import React from 'react';

export default class Status extends React.Component {
  render () {
    const { winner } = this.props;
    var result;
    if (winner === undefined){
    	result = "Tie"
    }else if (winner === "X"){
    	result = "X wins"
    }else if (winner === "O"){
    	result = "O wins"
    }
    return (
      <div className="status">
      {result}
      </div>
    );
  }
}
