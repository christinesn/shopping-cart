import React from "react";
import { AppBar, Toolbar, Button, makeStyles } from "@material-ui/core";
import { ShoppingCart } from "./ShoppingCart";
import { GithubLogo } from "./ImagesIndex";

const useStyles = makeStyles(theme => ({
  navbar: {
    backgroundColor: "white",
    borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
    boxShadow: theme.shadows[10]
  },
  title: {
    color: theme.palette.grey[800],
    fontFamily: "Alegreya",
    fontSize: "1.3em",
    textDecoration: "none",
    textTransform: "none",
    padding: "6px 24px"
  },
  titleSpan: {
    "&:before": {
      content: '"Stoneware Ceramics"',
      [theme.breakpoints.down("xs")]: {
        content: '"SC"'
      }
    }
  },
  repoLink: {
    float: "right",
    marginLeft: "auto",
    minWidth: 0,
    marginRight: "0.5em",
    [theme.breakpoints.down("xs")]: {
      marginRight: 0
    }
  },
  githubLogo: {
    height: "1.5em",
    width: "auto"
  }
}));

export function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.navbar}>
      <Toolbar>
        <Button className={classes.title}>
          <span className={classes.titleSpan} />
        </Button>
        <Button
          className={classes.repoLink}
          href="https://github.com/christinesn/shopping-cart-demo"
          target="_blank"
          rel="noopener noreferrer"
          title="Github Repo"
        >
          <img
            src={GithubLogo}
            alt="Github Logo"
            className={classes.githubLogo}
          />
        </Button>
        <ShoppingCart />
      </Toolbar>
    </AppBar>
  );
}
