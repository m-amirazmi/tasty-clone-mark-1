import React from "react";
import RecipeList from "../components/RecipeList";
import RecipeSearchBar from "../components/RecipeSearchBar";
import RecipeFeatured from "../components/RecipeFeatured";
import RecipeCategoryTrending from "../components/RecipeCategoryTrending";

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

  return (
    <div className="">
      <RecipeSearchBar />
      <RecipeFeatured />
      {/* <RecipeList items={RECIPES} />; */}
      <RecipeCategoryTrending items={RECIPES} />
      <h1>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
        repellat harum aliquam tempora nemo eaque sint, vel minima, non
        blanditiis repudiandae voluptatibus ad at alias, amet ducimus illo!
        Ratione voluptatem a est! Voluptatibus dolorem voluptas itaque velit
        voluptates labore ex asperiores corporis ea, corrupti fugit natus.
        Obcaecati dolorem dolores ipsum dignissimos ea omnis deleniti aliquam
        molestiae similique fugit neque, excepturi exercitationem dolorum amet
        tempora accusantium reprehenderit illo. Non reiciendis, corporis harum
        officiis maxime nihil, vitae quidem aperiam eveniet quos, voluptatum
        quisquam? Officiis necessitatibus ipsam vitae nostrum recusandae, sunt,
        molestias expedita harum, iusto totam nemo. Sapiente omnis officiis
        voluptatum eligendi aliquam!
      </h1>
    </div>
  );
};

export default AllRecipes;
