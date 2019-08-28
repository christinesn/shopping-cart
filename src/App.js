import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { Items } from "./Items";
import { Jumbotron } from "./Jumbotron";
import { Navbar } from "./Navbar";
import { Provider } from "react-redux";
import { store } from "./redux";
import { ItemBlurb } from "./ItemBlurb";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      margin: 0,
      fontFamily: "'Lato', sans-serif"
    }
  },
  itemsContainer: {
    marginTop: "2.5em",
    boxSizing: "border-box",
    padding: "0 8em",
    width: "100%",
    margin: "auto",
    [theme.breakpoints.down("md")]: {
      padding: "0 1em"
    }
  },
  footer: {
    width: "100%",
    backgroundColor: "#38322d",
    marginTop: "4em",
    height: 200,
    borderTop: "1px solid rgba(0, 0, 0, 0.1)",
    boxShadow: theme.shadows[10]
  }
}));

function App() {
  const classes = useStyles();

  return (
    <Provider store={store}>
      <Navbar />
      <Jumbotron />
      <Grid
        container
        className={classes.itemsContainer}
        spacing={3}
        justify="center"
      >
        {Items.map(item => (
          <ItemBlurb item={item} key={item.id} />
        ))}
      </Grid>
      <div className={classes.footer} />
    </Provider>
  );
}

export default App;
