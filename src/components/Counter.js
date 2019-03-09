import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import classNames from 'classnames';

import {changeScore} from "../redux/actions";

import styles from '../pages/scoreboard/Scoreboard.module.css';

class Counter extends React.Component {

  static propTypes = {
    changeScore: PropTypes.func,
    score: PropTypes.number,
    index: PropTypes.number
  }

  render() {
    const {changeScore, score, index} = this.props;

    return (
      <div className={styles.counter}>
        <button className={classNames(styles["counter-action"], styles.decrement)} onClick={ () => changeScore(index, -1)}> - </button>
        <span className={styles['counter-score']}>{score}</span>
        <button className={classNames(styles["counter-action"], styles.increment)} onClick={ () => changeScore(index, 1)}> + </button>
      </div>
    );
  }
}

export default connect(null, {changeScore})(Counter)