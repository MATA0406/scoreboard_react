import React from 'react';

export class AddPlayerForm extends React.Component {
  state = {
    value: ''
  }

  handleValueChange = (e) => {
    this.setState({playerName: e.target.value});
  }

  handleSubmit = (e) => {
    console.log(e);
    // 이벤트를 막는 함수(페이지 리로딩 방지)
    e.preventDefault();
    // 부모 이벤트 호출
    this.props.addPlayer(this.state.playerName);
    // 폼 초기화
    this.setState({playerName: ''})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="enter a player's name" value={this.state.playerName} onChange={this.handleValueChange} />
        <input type="submit" value="Add Player" />
      </form>
    )
  }
}
