import React from "react";
import { GridList, GridListTile } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    "& ul li": {
      marginRight: "15px",
    },
    "& ul li div": {
      // borderRadius: "5%",
    },
  },
  containerCategoryList: {
    marginLeft: "5vw",
  },
  categoryName: {
    color: theme.palette.primary.background,
    "& h5": {
      marginBottom: 10,
    },
  },
  gridList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
  },

  recipeImg: {
    // borderRadius: "10%",
    height: "90%",
  },
  recipeTitle: {
    margin: 0,
  },
}));

const RecipeCategoryTrending = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.containerCategoryList}>
      <div className={classes.categoryName}>
        <h5>TRENDING</h5>
      </div>
      <div className={classes.root}>
        <GridList className={classes.gridList} cols={2.5}>
          {props.items.map((recipe) => (
            <GridListTile key={recipe.id} className={classes.recipeImgBox}>
              <Link to="/:id">
                <img
                  className={classes.recipeImg}
                  src={recipe.image}
                  alt={recipe.title}
                />
              </Link>
              <h5 className={classes.recipeTitle}>{recipe.title}</h5>
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  );
};

export default RecipeCategoryTrending;
