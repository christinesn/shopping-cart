import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { initialState, rootReducer } from "./redux";

export function renderWithRedux(component, state = initialState) {
  const store = createStore(rootReducer, state);

  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store
  };
}
