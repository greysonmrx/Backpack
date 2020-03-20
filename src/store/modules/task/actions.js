export function create(data) {
  return {
    type: "@task/CREATE",
    payload: data
  };
}
