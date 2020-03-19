import React from "react";
import { Switch } from "react-router-dom";

import Route from "./Route";

import Timetable from "../pages/Timetable";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Timetable} />
    </Switch>
  );
}
