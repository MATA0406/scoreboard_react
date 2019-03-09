import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import styles from '../pages/scoreboard/Scoreboard.module.css';

const Stats = (props) => {
  const totalPlayers = props.players.length;
  const totalScore = props.players.reduce((total, player) => total + player.score, 0);

  return (
    <table className={styles.stats}>
      <tbody>
      <tr>
        <td>Players:</td>
        <td>{totalPlayers}</td>
      </tr>
      <tr>
        <td>Total Points:</td>
        <td>{totalScore}</td>
      </tr>
      </tbody>
    </table>
  )
}

Stats.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({
    score: PropTypes.number
  }))
}

let mapStateToProps = (state) => ({
  storePlayers: state.player.players
})

export default connect(mapStateToProps)(Stats);