import React from "react";

import "./RecipeItem.css";

const RecipeItem = (props) => {
  return (
    <li>
      <div className="">
        <img src={props.image} alt={props.title} />
      </div>
      <div className="">
        <h2>{props.title}</h2>
      </div>
    </li>
  );
};

export default RecipeItem;
