import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  BottomNavigation,
  BottomNavigationAction,
} from "@material-ui/core";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    backgroundColor: theme.palette.primary.background,
  },
  // navAction: {
  //   color: "#fff",
  // },
  appBar: {
    bottom: "0",
    top: "auto",
    backgroundColor: theme.palette.primary.background,
  },
  label: {
    color: "#e0e0e0",
  },
}));

const BottomBar = () => {
  const classes = useStyles();

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <BottomNavigation
          value={value}
          onChange={handleChange}
          showLabels
          className={classes.root}
        >
          <BottomNavigationAction
            className={classes.label}
            label="Discover"
            icon={<SearchOutlinedIcon />}
          />
          <BottomNavigationAction
            className={classes.label}
            label="My Bag"
            icon={<LocalMallOutlinedIcon />}
          />
          <BottomNavigationAction
            className={classes.label}
            label="Favorites"
            icon={<FavoriteBorderOutlinedIcon />}
          />
        </BottomNavigation>
      </Toolbar>
    </AppBar>
  );
};

export default BottomBar;
