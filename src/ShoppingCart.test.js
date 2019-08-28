import React from "react";
import { renderWithRedux } from "./renderWithRedux";
import { ShoppingCart } from "./ShoppingCart";
import { fireEvent } from "@testing-library/react";

jest.mock(
  "popper.js",
  () =>
    class Popper {
      static placements = [
        "auto",
        "auto-end",
        "auto-start",
        "bottom",
        "bottom-end",
        "bottom-start",
        "left",
        "left-end",
        "left-start",
        "right",
        "right-end",
        "right-start",
        "top",
        "top-end",
        "top-start"
      ];

      constructor() {
        return {
          destroy: () => {},
          scheduleUpdate: () => {}
        };
      }
    }
);

it("Creates a cart total", () => {
  const cart = [
    {
      id: 1,
      price: 10
    },
    {
      id: 2,
      price: 11
    }
  ];

  const { getByText, getByTestId } = renderWithRedux(<ShoppingCart />, {
    cart: cart
  });

  fireEvent.click(getByTestId("shopping-cart-button"));

  getByText("Total: $21.00");
});
