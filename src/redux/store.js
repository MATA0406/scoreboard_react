import {combineReducers, createStore} from "redux";
import {ADD_PLAYER, CHANGE_SCORE, REMOVE_PLAYER, UPDATE_TITLE} from "./actionTypes";


// store에 넣어줄 초기값
const playerInitialState = {
  title: 'Store ScoreBoard',
  players: [
    {name: 'LDK', score: 0, id: 1},
    {name: 'HONG', score: 0, id: 2},
    {name: 'KIM', score: 0, id: 3},
    {name: 'PARK', score: 0, id: 4}
  ]
}

let playerId = 4;

// 리듀스 생성(액션은 객체!!)
const playerReducer = (state = playerInitialState, action) => {
  switch (action.type) {
    case UPDATE_TITLE:
      return {
        ...state,
        title: action.title
      }
    case ADD_PLAYER:
      return {
        ...state,
        players: [
          ...state.players,
          {
            name: action.name,
            score: 0,
            id: ++playerId
          }
        ]
      }
    case CHANGE_SCORE:
      state.players.forEach(item => {
        if(item.id === action.index){
          // 기존의 스코어에 더해준다.
          item.score += action.score
        }
      })
      return {
        ...state,
        players: [
          ...state.players,
        ]
      }
    case REMOVE_PLAYER:
      return{
        ...state,
        players: state.players.filter(player => player.id !== action.id)
      }
    default:
      return state;
  }
  return state;
}

// 여러가지 리듀스를 합친다.(키값 생략 가능)
const allReducers = combineReducers({player: playerReducer});

// 스토어 생성
export const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

console.log('store :: ', store);