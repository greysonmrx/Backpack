export function create(data) {
  return {
    type: "@notebook/CREATE",
    payload: data
  };
}

export function remove(id) {
  return {
    type: "@notebook/REMOVE",
    payload: id
  };
}

export function createNote(data, id) {
  return {
    type: "@notebook/CREATE_NOTE",
    payload: { data, id }
  };
}
