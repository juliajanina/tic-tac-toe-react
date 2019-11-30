import { connect } from "react-redux";

import { newGame, gameOver, move, winner } from "../actionCreators/board";
import { Board } from "../components/board";

const mapStateToProps = state => {
  return {
    count: state.counterReducer.count,
    timesChanged: state.counterReducer.timesChanged
  };
};

const mapDispatchToProps = dispatch => {
  return {
    newGame: () => {
      dispatch(newGame());
    },
    gameOver: () => {
      dispatch(gameOver());
    },
    winner: () => {
      dispatch(winner());
    },
    move: () => {
      dispatch(move());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
