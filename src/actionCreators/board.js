import { NEW_GAME, GAME_OVER, MOVE, WINNER } from "../actions/board";

export const newGame = () => {
  return {
    type: NEW_GAME
  };
};

export const gameOver = () => {
  return {
    type: GAME_OVER
  };
};

export const move = () => {
  return {
    type: MOVE
  };
};

export const winner = () => {
  return {
    type: WINNER
  };
};
