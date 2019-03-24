import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PrivateRoute from "../components/PrivateRoute";
import Home from "../pages/Home";
import Login from "../pages/Login";
import FourOFour from "../pages/FourOFour";

export default (
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <PrivateRoute path="/home" component={Home} />
      <Route component={FourOFour} />
    </Switch>
  </Router>
);
