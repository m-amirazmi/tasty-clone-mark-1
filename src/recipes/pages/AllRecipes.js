import React from "react";
import RecipeList from "../components/RecipeList";
import RecipeSearchBar from "../components/RecipeSearchBar";
import RecipeFeatured from "../components/RecipeFeatured";
import RecipeCategoryTrending from "../components/RecipeCategoryTrending";
import RecipeCategoryEasyFix from "../components/RecipeCategoryEasyFix";
import RecipeCategoryRecentUploads from "../components/RecipeCategoryRecentUploads";
import RecipeAddYours from "../components/RecipeAddYours";
import AppTitle from "../components/AppTitle";

const AllRecipes = (props) => {
  const RECIPES = [
    {
      // author: "Muhamad Amir",
      id: "r1",
      image:
        "https://www.rotinrice.com/wp-content/uploads/2018/08/Nasi-Kerabu-Kelantan-1.jpg",
      title: "Nasi Kerabu",
      // ingredients:
      //   "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, quis?",
      // instructions:
      //   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, architecto?",
      // reviews: "Lorem ipsum dolor sit amet.",
      // category: "Nasi",
    },
    {
      id: "r2",
      image:
        "https://1.bp.blogspot.com/-fJtU4Cl5XzY/XkkdP4PpyxI/AAAAAAAAIqo/0a-Vs-pfxZoybH58Q13bWHd_jkNM6M9WgCLcBGAsYHQ/s640/IMG_7857.jpg",
      title: "Nasi Goreng Mentega",
    },
    {
      id: "r3",
      image:
        "https://1.bp.blogspot.com/-87PojWNfle8/Xkkoy-iGd_I/AAAAAAAAIuM/0-GoIUZ5M_0XojCuxRFNFdaZbfEh9AT1QCLcBGAsYHQ/s640/IMG_8027.jpg",
      title: "Nasi Goreng Sosej",
    },
    {
      id: "r4",
      image:
        "https://1.bp.blogspot.com/-Ay6cm6Ot1WQ/XeyihI3NRKI/AAAAAAAAICE/j51BH_RMzDYUWlYHAP-XYAhn6Rdgu0JcgCLcBGAsYHQ/s640/IMG_6503.jpg",
      title: "Nasi Goreng Ikan",
    },
  ];
  const RECIPES_2 = [
    {
      id: "r21",
      image:
        "https://images.says.com/uploads/story_source/source_image/401656/a77f.jpeg",
      title: "Maggie Goreng Sempoi",
    },
    {
      id: "r22",
      image:
        "https://images.says.com/uploads/story_source/source_image/401586/9678.jpg",
      title: "Kari Ayam",
    },
    {
      id: "r23",
      image:
        "https://images.says.com/uploads/story_source/source_image/401601/da47.jpg",
      title: "Ikan Masak Singgang",
    },
    {
      id: "r24",
      image:
        "https://images.says.com/uploads/story_source/source_image/401607/45d2.jpg",
      title: "Ayam Goreng Kunyit",
    },
  ];

  return (
    <div className="">
      <RecipeSearchBar />
      <AppTitle />
      <RecipeFeatured />
      {/* <RecipeList items={RECIPES} />; */}
      <RecipeCategoryTrending items={RECIPES} />
      <RecipeCategoryEasyFix items={RECIPES_2} />
      <RecipeCategoryRecentUploads items={RECIPES_2} />
      <RecipeAddYours />
    </div>
  );
};

export default AllRecipes;
