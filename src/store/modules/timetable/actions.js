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

export function move(fromList, from, to) {
  return {
    type: "@timetable/MOVE",
    payload: { fromList, from, to },
  };
}
