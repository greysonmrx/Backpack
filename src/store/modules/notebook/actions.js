export function create(data) {
  return {
    type: "@notebook/CREATE",
    payload: data,
  };
}

export function remove(id) {
  return {
    type: "@notebook/REMOVE",
    payload: id,
  };
}

export function createNote(data, id) {
  return {
    type: "@notebook/CREATE_NOTE",
    payload: { data, id },
  };
}

export function edit(data) {
  return {
    type: "@notebook/EDIT",
    payload: data,
  };
}

export function editNoteContent(data) {
  return {
    type: "@notebook/EDIT_NOTE_CONTENT",
    payload: data,
  };
}

export function removeNote(data) {
  return {
    type: "@notebook/REMOVE_NOTE",
    payload: data,
  };
}

export function editNote(data) {
  return {
    type: "@notebook/EDIT_NOTE",
    payload: data,
  };
}
