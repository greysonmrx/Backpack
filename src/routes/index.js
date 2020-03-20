import React from "react";
import { Switch } from "react-router-dom";

import Route from "./Route";

import Timetable from "../pages/Timetable";
import Tasks from "../pages/Tasks";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Timetable} />
      <Route path="/tasks" exact component={Tasks} />
    </Switch>
  );
}
