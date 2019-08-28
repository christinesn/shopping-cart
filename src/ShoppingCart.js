import React from "react";
import {
  makeStyles,
  Button,
  Popper,
  Fade,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  ClickAwayListener
} from "@material-ui/core";
import { useSelector } from "react-redux";

const useStyles = makeStyles(theme => ({
  button: {
    float: "right",
    textTransform: "none",
    fontWeight: "normal",
    padding: "6px 24px"
  },
  cartLabel: {
    "&:before": {
      content: '"Shopping Cart"',
      [theme.breakpoints.down("sm")]: {
        content: '"Cart"'
      }
    }
  },
  popper: {
    zIndex: 10000
  },
  cart: {
    padding: "0.5em 1em",
    borderRadius: 0,
    boxShadow: theme.shadows[20],
    border: "1px solid rgba(0, 0, 0, 0.1)"
  },
  noItems: {
    fontStyle: "italic",
    "& td": {
      color: theme.palette.grey[600]
    }
  },
  total: {
    display: "block",
    marginTop: "1em",
    marginRight: "0.5em",
    marginBottom: "0.5em",
    textAlign: "right"
  },
  hideCol: {
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  }
}));

export function ShoppingCart() {
  const classes = useStyles();
  const cart = useSelector(state => state.cart);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const id = open ? "shopping-cart" : undefined;

  function handleClick(e) {
    setAnchorEl(anchorEl ? null : e.currentTarget);
    setOpen(!open);
  }

  function handleClickAway() {
    setAnchorEl(null);
    setOpen(false);
  }

  function total() {
    let total = cart.reduce((sum, curr) => sum + curr.price, 0);
    return (Math.round(total * 100) / 100).toFixed(2);
  }

  return (
    <React.Fragment>
      <Button
        className={classes.button}
        onClick={handleClick}
        aria-describedby={id}
        data-testid="shopping-cart-button"
      >
        <span className={classes.cartLabel} />
        &nbsp;({cart.length})
      </Button>
      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        placement="bottom"
        className={classes.popper}
        transition
      >
        {({ TransitionProps }) => (
          <ClickAwayListener onClickAway={handleClickAway}>
            <Fade {...TransitionProps} timeout={200}>
              <Paper className={classes.cart}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Item</TableCell>
                      <TableCell className={classes.hideCol}>Item ID</TableCell>
                      <TableCell className={classes.hideCol}>
                        Quantity
                      </TableCell>
                      <TableCell>Price</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {cart.length === 0 && (
                      <TableRow className={classes.noItems}>
                        <TableCell>No items</TableCell>
                        <TableCell className={classes.hideCol} />
                        <TableCell className={classes.hideCol} />
                        <TableCell />
                      </TableRow>
                    )}
                    {cart.map(item => (
                      <TableRow key={item.id}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell className={classes.hideCol}>
                          {item.id.toString().padStart(5, "0")}
                        </TableCell>
                        <TableCell className={classes.hideCol}>1</TableCell>
                        <TableCell>${item.price}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <Typography className={classes.total}>
                  Total: ${total()}
                </Typography>
              </Paper>
            </Fade>
          </ClickAwayListener>
        )}
      </Popper>
    </React.Fragment>
  );
}
