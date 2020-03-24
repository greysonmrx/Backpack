import { takeLatest, all } from "redux-saga/effects";

export function set() {}

export default all([takeLatest("@setting/SET", set)]);
