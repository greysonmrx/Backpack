import { combineReducers } from "redux";

import timetable from "./timetable/reducer";
import task from "./task/reducer";

export default combineReducers({ timetable, task });
