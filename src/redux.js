import { createStore } from "redux";

export const updateCart = cart => ({
  type: "UPDATE_CART",
  payload: cart
});

export const initialState = {
  cart: []
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_CART": {
      return {
        ...state,
        cart: action.payload
      };
    }
    default: {
      return state;
    }
  }
}

export const store = createStore(rootReducer);
