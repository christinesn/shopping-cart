import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { updateCart } from "./redux";

const useStyles = makeStyles(theme => ({
  button: {
    display: "block",
    margin: "auto",
    marginTop: "1.5em",
    textTransform: "none",
    backgroundColor: theme.palette.grey[100],
    borderRadius: 0,
    padding: "6px 24px",
    border: "1px solid rgba(0, 0, 0, 0.1)",
    boxShadow: theme.shadows[1],
    "&:hover": {
      backgroundColor: theme.palette.grey[300]
    }
  }
}));

export function AddToCart({ item }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const [added, setAdded] = React.useState(false);

  function handleClick() {
    if (!added) {
      dispatch(updateCart(cart.concat(item)));
      setAdded(true);
      return;
    }

    dispatch(updateCart(cart.filter(i => i.id !== item.id)));
    setAdded(false);
  }

  return (
    <Button className={classes.button} onClick={handleClick}>
      {added ? "Remove from cart" : "Add to cart"}
    </Button>
  );
}
