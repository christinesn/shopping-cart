import React from "react";
import {
  makeStyles,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography
} from "@material-ui/core";
import { AddToCart } from "./AddToCart";

const useStyles = makeStyles(theme => ({
  card: {
    borderRadius: 0,
    boxShadow: theme.shadows[5],
    minHeight: 400,
    cursor: "pointer",
    textAlign: "center",
    "&:hover": {
      boxShadow: theme.shadows[20]
    }
  },
  image: {
    width: "100%",
    margin: "auto",
    height: 250,
    borderBottom: "1px solid rgba(0, 0, 0, 0.1)"
  },
  name: {
    fontFamily: "Alegreya"
  }
}));

export function ItemBlurb({ item }) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.image}
          image={item.image}
          title={item.name}
        />
        <CardContent>
          <Typography variant="h6" className={classes.name}>
            {item.name}
          </Typography>
          ${item.price}
          <AddToCart item={item} />
        </CardContent>
      </Card>
    </Grid>
  );
}
