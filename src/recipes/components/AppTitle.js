import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  h2title: {
    textAlign: "center",
    textTransform: "uppercase",
    color: theme.palette.primary.background,
  },
}));

const AppTitle = () => {
  const classes = useStyles();
  return (
    <div>
      <h2 className={classes.h2title}>Sedapnya.my</h2>
    </div>
  );
};

export default AppTitle;
