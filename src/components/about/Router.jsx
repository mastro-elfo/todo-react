import React from "react";

import { Route, Switch } from "react-router-dom";

import View from "./View";

export default function AboutRouter() {
  return (
    <Switch>
      <Route path="/about" component={View} />
    </Switch>
  );
}
