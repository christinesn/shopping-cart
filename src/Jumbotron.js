import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import { Banner } from "./ImagesIndex";

const useStyles = makeStyles(theme => ({
  jumbotron: {
    height: "65vh",
    minHeight: 450,
    backgroundImage: `url("${Banner}")`,
    backgroundSize: "cover",
    backgroundPosition: "top center",
    padding: 0,
    margin: 0,
    marginTop: 65,
    textAlign: "center",
    width: "100%",
    boxShadow: theme.shadows[5],
    [theme.breakpoints.down("xs")]: {
      marginTop: 55
    }
  },
  screen: {
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.3)"
  },
  textContainer: {
    position: "relative",
    top: 110,
    margin: "auto",
    width: 300
  },
  text: {
    color: "white",
    fontFamily: "Alegreya",
    fontSize: "2.5em",
    textShadow: "3px 0 0px rgba(0, 0, 0, 0.95)",
    marginBottom: "0.5em"
  },
  shopNow: {
    fontSize: "1.3em",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    color: "white",
    border: "1px solid rgba(255, 255, 255, 0.4)",
    textTransform: "none",
    fontFamily: "Alegreya",
    padding: "6px 24px",
    borderRadius: 0,
    fontWeight: "normal",
    boxShadow: theme.shadows[20],
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.8)"
    }
  }
}));

export function Jumbotron() {
  const classes = useStyles();

  return (
    <div className={classes.jumbotron}>
      <div className={classes.screen}>
        <div className={classes.textContainer}>
          <h2 className={classes.text}>Stoneware Mugs & Pottery</h2>
          <Button className={classes.shopNow}>Shop Now</Button>
        </div>
      </div>
    </div>
  );
}
