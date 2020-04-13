import React from "react";
import { Grid, makeStyles, Paper } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  categoryTitle: {
    marginLeft: "5vw",
    marginBottom: "10px",
    color: theme.palette.primary.background,
  },

  imgBox: {
    height: "43vw",
    width: "43vw",
    marginLeft: "3vw",
    marginBottom: "8vw",
    "& img": {
      height: "100%",
      width: "100%",
    },
  },
  imgTitle: {
    "& h5": {
      margin: 0,
    },
  },
}));

const RecipeCategoryRecentUploads = (props) => {
  const classes = useStyles();
  return (
    <div className="">
      <h5 className={classes.categoryTitle}>RECENT UPLOADS</h5>
      <Grid container>
        {props.items.map((recipe) => (
          <Grid item xs={6}>
            <Paper elevation={0} className={classes.imgBox}>
              <Link to="/:id">
                <img src={recipe.image} alt={recipe.title} />
              </Link>
              <div className={classes.imgTitle}>
                <h5>{recipe.title}</h5>
              </div>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default RecipeCategoryRecentUploads;
