import React from 'react';
import Stats from "./Stats";
import {Stopwatch} from "./Stopwatch";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {updateTitle} from "../redux/actions";

const Header = ({players, title, changeTitle}) => {
  return (
    <header>
      <Stats players={ players } />
      <h1 onClick={changeTitle}>{ title }</h1>
      <Stopwatch />
    </header>
  )
}

Header.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string
}

Header.defaultProps = {
  title: 'ScoreBoard'
}

// 28 ~ 40줄: subscribe를 한다.
// store에 있는 값을 props로 내려받는다.
let mapStateToProps = (state) => {
  return {
    title: state.player.title
  }
}

// action을 dispatch하는 펑션을 로컬에 있는 props로 매핑
let mapActionToProps = (dispatch) => {
  return {
    changeTitle: () => dispatch(updateTitle('test scareboard'))
  }
}

export default connect(mapStateToProps, mapActionToProps)(Header);