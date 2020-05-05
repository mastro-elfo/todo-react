import React from "react";

import { Route, Switch } from "react-router-dom";

import View from "./View";

export default function DashboardRouter() {
  return (
    <Switch>
      <Route path="/dashboard" component={View} />
    </Switch>
  );
}
