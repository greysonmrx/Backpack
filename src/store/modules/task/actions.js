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
