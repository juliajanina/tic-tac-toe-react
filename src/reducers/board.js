import { NEW_GAME, GAME_OVER, MOVE, WINNER } from "../actions/board";

const defaultState = {
  squares: Array(25).fill(null),
  xIsNext: true
};

export const boardReducer = (state = defaultState, action) => {
  switch (action.type) {
    case NEW_GAME:
      return {
        squares: Array(25).fill(null),
        xIsNext: true
      };
    case GAME_OVER:
      return {
        count: state.count - 1,
        timesChanged: state.timesChanged + 1
      };
    case MOVE:
      return {
        count: state.count - 1,
        timesChanged: state.timesChanged + 1
      };
    case WINNER:
      return {
        count: state.count - 1,
        timesChanged: state.timesChanged + 1
      };
    default:
      return state;
  }
};
