import React from "react";
import { Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  imgBox: {
    height: "90vw",
    width: "90vw",
    marginRight: "5vw",
    marginLeft: "5vw",
    marginTop: "2vw",
    "& img": {
      alignItems: "center",
      display: "block",
      borderRadius: "2.5%",
      height: "100%",
      width: "100%",
    },
  },
  imgTitle: {
    position: "absolute",
    top: "90vw",
    left: "10vw",
    color: theme.palette.primary.main,
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
}));

const RecipeFeatured = () => {
  const classes = useStyles();
  return (
    <Paper elevation={0} className={classes.imgBox}>
      <img
        alt="featured recipe"
        src="https://1.bp.blogspot.com/-WWNInfbCMCs/XpGw3O48xVI/AAAAAAAAJjY/imep3aLvddoaGl-BujgOP3jBrhAWZSETwCLcBGAsYHQ/s640/IMG_1799.jpg"
      />
      <div className={classes.imgTitle}>
        <p fontWeight="fontWeightBold"> Ayam Goreng Rendang</p>
      </div>
    </Paper>
  );
};

export default RecipeFeatured;
