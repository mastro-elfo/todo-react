import React from "react";

// TODO: use HashRouter because on github BrowserRouter doesn't work properly
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
    <Router basename="/todo-react">
      <Switch>
        {ROUTES.map((route, i) => (
          <Route key={i} {...route} />
        ))}
        <Redirect to="/dashboard" />
      </Switch>
    </Router>
  );
}
