import React from "react";

import {
  // See https://reacttraining.com/react-router/web/guides/quick-start for details
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import About from "./about/Router";
import Dashboard from "./dashboard/Router";

const ROUTES = [
  // {path: '', component: RouterComponent, [exact]}
  { path: "/about", component: About },
  { path: "/dashboard", component: Dashboard, exact: true }
];

export default function(props) {
  return (
    <Router>
      <Switch>
        {ROUTES.map((route, i) => (
          <Route key={i} {...route} />
        ))}
        <Redirect to="/dashboard" />
      </Switch>
    </Router>
  );
}
