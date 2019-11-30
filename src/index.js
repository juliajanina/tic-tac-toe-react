import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

import { boardReducer } from "./reducers/board";
import Board from "./containers/board";

import "./styles.css";

const store = createStore(
  combineReducers({
    boardReducer
  })
);

function App() {
  return (
    <Provider store={store}>
      <Board />
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
