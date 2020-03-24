import { combineReducers } from "redux";

import timetable from "./timetable/reducer";
import task from "./task/reducer";
import notebook from "./notebook/reducer";
import setting from "./setting/reducer";

export default combineReducers({ timetable, task, notebook, setting });
