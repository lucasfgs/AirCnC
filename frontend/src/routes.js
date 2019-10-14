import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import New from "./Pages/New";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login}></Route>
        <Route path="/dashboard" component={Dashboard}></Route>
        <Route path="/new" component={New}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
