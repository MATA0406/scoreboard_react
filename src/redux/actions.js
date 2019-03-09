import {ADD_PLAYER, UPDATE_TITLE} from "./actionTypes";

// action create
export const updateTitle = (title) => ({
  type: UPDATE_TITLE,
  title
});

export const addPlayer = (name) => ({
  type: ADD_PLAYER,
  name
})