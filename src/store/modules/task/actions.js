export function create(data) {
  return {
    type: "@task/CREATE",
    payload: data
  };
}

export function toggleDone(id) {
  return {
    type: "@task/TOGGLE_DONE",
    payload: id
  };
}

export function remove(id) {
  return {
    type: "@task/REMOVE",
    payload: id
  };
}

export function edit(data) {
  return {
    type: "@task/EDIT",
    payload: data
  };
}
