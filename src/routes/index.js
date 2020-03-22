import React from "react";
import { Switch, Redirect } from "react-router-dom";

import Route from "./Route";

import Timetable from "../pages/Timetable";
import Tasks from "../pages/Tasks";
import AddTask from "../pages/AddTask";
import AddLesson from "../pages/AddLesson";
import EditLesson from "../pages/EditLesson";
import EditTask from "../pages/EditTask";
import Notebook from "../pages/Notebook";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Timetable} />
      <Route path="/tasks" exact component={Tasks} />
      <Route path="/addtask" exact component={AddTask} />
      <Route path="/addlesson" exact component={AddLesson} />
      <Route path="/editlesson" exact component={EditLesson} />
      <Route path="/edittask" exact component={EditTask} />
      <Route path="/notebook" component={Notebook} />

      <Route component={() => <Redirect to="/" />} />
    </Switch>
  );
}
