export function create(data) {
  return {
    type: "@timetable/CREATE",
    payload: data,
  };
}

export function remove(id, day) {
  return {
    type: "@timetable/REMOVE",
    payload: { id, day },
  };
}

export function edit(data, initialDay) {
  return {
    type: "@timetable/EDIT",
    payload: { data, initialDay },
  };
}
