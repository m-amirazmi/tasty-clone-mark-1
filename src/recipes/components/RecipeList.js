import React from "react";
import { CssBaseline, Typography, Container } from "@material-ui/core";

import RecipeItem from "./RecipeItem";

import "./RecipeList.css";

const RecipeList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2>No users found...</h2>
      </div>
    );
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <ul>
          {props.items.map((recipe) => {
            return (
              <RecipeItem
                key={recipe.id}
                id={recipe.id}
                image={recipe.image}
                title={recipe.title}
                author={recipe.author}
                ingredients={recipe.ingredients}
                instructions={recipe.instructions}
                reviews={recipe.reviews}
                category={recipe.category}
              />
            );
          })}
        </ul>
      </Container>
    </React.Fragment>
  );
};

export default RecipeList;
