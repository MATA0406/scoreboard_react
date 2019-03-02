import React from 'react';

export class Stopwatch extends React.Component {
  tickRef; // 클래스 public 속성

  constructor(props){
    super(props);
    this.state = {
      isRunning: false,
      timer:0
    }
  }

  handleStopwatch = (e) => {
    // 이전 상태를 받아서 isRunning 상태를 토글하는 상태변경 코드 작성
    this.setState(prevState => ({
        isRunning: !prevState.isRunning
      })
    )
  }

  handleReset = () => {
    this.setState({timer: 0});
  }

  render() {
    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">{this.state.timer}</span>
        <button onClick={this.handleStopwatch}>{this.state.isRunning ? 'Stop' : 'Start'}</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    )
  }
  
  // Dom이 생성된 직후
  componentDidMount() {
     this.tickRef = setInterval(this.tick,1000);
  }

  tick = () => {
    if(this.state.isRunning) {
      this.setState(prevState => ({
          timer: prevState.timer + 1
       }))
    }
  }
  
  // Dom이 파괴되기 직전
  componentWillUnmount() {
    clearInterval(this.tickRef);
  }
}