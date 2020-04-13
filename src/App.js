import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllRecipes from "./recipes/pages/AllRecipes";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <AllRecipes />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
