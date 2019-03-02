import React from 'react';

export class Stopwatch extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">0</span>
        <button onClick={this.handleStopwatch}>{this.state.isRunning ? 'Stop' : 'Start'}</button>
        <button>Reset</button>
      </div>
    )
  }
}