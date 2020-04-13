import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  BottomNavigation,
  BottomNavigationAction,
} from "@material-ui/core";
import PageviewOutlinedIcon from "@material-ui/icons/PageviewOutlined";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    width: "100vw",
  },
  appBar: {
    bottom: "0",
    top: "auto",
  },
});

const BottomBar = () => {
  const classes = useStyles();

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar position="fixed" color="#fff" className={classes.appBar}>
      <Toolbar>
        <BottomNavigation
          value={value}
          onChange={handleChange}
          showLabels
          className={classes.root}
        >
          <BottomNavigationAction
            label="Discover"
            icon={<PageviewOutlinedIcon />}
          />
          <BottomNavigationAction
            label="My Bag"
            icon={<LocalMallOutlinedIcon />}
          />
          <BottomNavigationAction
            label="Favorites"
            icon={<FavoriteBorderOutlinedIcon />}
          />
        </BottomNavigation>
      </Toolbar>
    </AppBar>
  );
};

export default BottomBar;
