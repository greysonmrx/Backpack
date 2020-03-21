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
