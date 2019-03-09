import React from 'react';
import Counter from "./Counter";
import {connect} from "react-redux";
import {removePlayer} from "../redux/actions";

class Player extends React.Component {
  render()
  {
    const {id, name, score, removePlayer} = this.props;
    console.log(this.props.name, 'rendered')
    return (
      <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => removePlayer(id)}>X</button>
      </span>
        <span className="player-name">{name}</span>
        <Counter index={id} score={score}/>
      </div>
    )
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('shouldComponentUpdate', nextProps);
    return nextProps.score !== this.props.score;
  }
}

export default connect(null, {removePlayer})(Player);