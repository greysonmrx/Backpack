import { takeLatest, all } from "redux-saga/effects";

export function createNotebook() {}

export function deleteNotebook() {}

export function createNote() {}

export function edit(data) {}

export default all([
  takeLatest("@notebook/CREATE", createNotebook),
  takeLatest("@notebook/REMOVE", deleteNotebook),
  takeLatest("@notebook/CREATE_NOTE", createNote),
  takeLatest("@notebook/EDIT", edit)
]);
