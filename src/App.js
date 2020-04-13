import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import AllRecipes from "./recipes/pages/AllRecipes";
import BottomBar from "./shared/components/BottomBar";
import theme from "./shared/components/Theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/">
            <AllRecipes />
          </Route>
        </Switch>
        <BottomBar />
      </Router>
    </ThemeProvider>
  );
};

export default App;
