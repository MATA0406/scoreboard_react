import React from 'react';

export class Stopwatch extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isRunning: false
    }
  }

  handleStopwatch = (e) => {
    // 이전 상태를 받아서 isRunning 상태를 토글하는 상태변경 코드 작성
    this.setState(prevState => ({
        isRunning: prevState.isRunning
      })
    )
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