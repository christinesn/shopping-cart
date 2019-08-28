import React from "react";
import { AddToCart } from "./AddToCart";
import { renderWithRedux } from "./renderWithRedux";
import { fireEvent } from "@testing-library/react";

it("Adds the item to the cart", () => {
  const { getByText, store } = renderWithRedux(
    <AddToCart
      item={{
        id: 1
      }}
    />
  );

  fireEvent.click(getByText("Add to cart"));

  const state = store.getState();

  expect(state.cart).toEqual([{ id: 1 }]);
});

it("Removes the item from the cart", () => {
  const { getByText, store } = renderWithRedux(
    <AddToCart
      item={{
        id: 1
      }}
    />
  );

  fireEvent.click(getByText("Add to cart"));
  fireEvent.click(getByText("Remove from cart"));

  const state = store.getState();

  expect(state.cart).toEqual([]);
});
