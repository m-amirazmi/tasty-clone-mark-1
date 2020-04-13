import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllRecipes from "./recipes/pages/AllRecipes";
import BottomBar from "./shared/components/BottomBar";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <AllRecipes />
        </Route>
      </Switch>
      <BottomBar />
    </Router>
  );
};

export default App;
