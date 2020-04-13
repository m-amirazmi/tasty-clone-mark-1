import React from "react";
import RecipeList from "../components/RecipeList";
import RecipeSearchBar from "../components/RecipeSearchBar";
import RecipeFeatured from "../components/RecipeFeatured";

const AllRecipes = (props) => {
  const RECIPES = [
    // {
    //   author: "Muhamad Amir",
    //   id: "r1",
    //   image:
    //     "https://www.rotinrice.com/wp-content/uploads/2018/08/Nasi-Kerabu-Kelantan-1.jpg",
    //   title: "Nasi Kerabu",
    //   ingredients:
    //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, quis?",
    //   instructions:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, architecto?",
    //   reviews: "Lorem ipsum dolor sit amet.",
    //   category: "Nasi",
    // },
  ];

  return (
    <div className="">
      <RecipeSearchBar />
      <RecipeFeatured />
      <RecipeList items={RECIPES} />;
      <h1>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi possimus
        ea aut distinctio dolore alias quo facilis itaque officiis quidem
        eveniet eaque velit, ut provident ipsam? Reiciendis, blanditiis in modi
        eligendi culpa enim. Quo in vitae suscipit velit, laboriosam molestiae
        odit consequatur cumque asperiores voluptates fugiat commodi tempora
        beatae molestias repudiandae, excepturi accusamus pariatur. Optio
        quaerat a voluptas dolorum ab nam distinctio dolore temporibus ex, quod
        vero minus harum laudantium deleniti nesciunt sint fugiat veritatis
        tempore ducimus similique. Voluptatum quasi repudiandae fuga eum aperiam
        commodi sit alias libero. Velit harum, suscipit blanditiis omnis qui
        iure quasi quisquam dignissimos minus eligendi.
      </h1>
    </div>
  );
};

export default AllRecipes;
