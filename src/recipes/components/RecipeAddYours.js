import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: "20px",
    marginBottom: "80px",
    marginLeft: "36vw",
    marginRight: "36vw",
  },
}));

const RecipeAddYours = () => {
  const classes = useStyles();
  return (
    <Button
      variant="contained"
      color="secondary"
      disableElevation
      className={classes.button}
    >
      Add Yours
    </Button>
  );
};

export default RecipeAddYours;
