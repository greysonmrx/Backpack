import produce from "immer";

const INITIAL_STATE = {
  data: [
    {
      id: 1,
      name: "Segunda",
      lessons: [],
    },
    {
      id: 2,
      name: "Terça",
      lessons: [],
    },
    {
      id: 3,
      name: "Quarta",
      lessons: [],
    },
    {
      id: 4,
      name: "Quinta",
      lessons: [],
    },
    {
      id: 5,
      name: "Sexta",
      lessons: [],
    },
    {
      id: 6,
      name: "Sábado",
      lessons: [],
    },
    {
      id: 0,
      name: "Domingo",
      lessons: [],
    },
  ],
};

export default function timetable(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "@timetable/CREATE": {
      return produce(state, (draft) => {
        draft.data = state.data.map((day) => {
          if (action.payload.day === day.name) {
            return { ...day, lessons: [...day.lessons, action.payload] };
          } else {
            return day;
          }
        });
      });
    }
    case "@timetable/REMOVE": {
      return produce(state, (draft) => {
        draft.data = state.data.map((day) => {
          if (action.payload.day === day.name) {
            return {
              ...day,
              lessons: day.lessons.filter(
                (item) => item.id !== action.payload.id
              ),
            };
          } else {
            return day;
          }
        });
      });
    }
    case "@timetable/EDIT": {
      return produce(state, (draft) => {
        const {
          data: { day: currentDay, id },
          initialDay,
        } = action.payload;

        if (currentDay !== initialDay) {
          const dataWithoutLesson = state.data.map((day) => {
            if (initialDay === day.name) {
              return {
                ...day,
                lessons: day.lessons.filter(
                  (item) => item.id !== action.payload.data.id
                ),
              };
            } else {
              return day;
            }
          });

          draft.data = dataWithoutLesson.map((day) => {
            if (currentDay === day.name) {
              return {
                ...day,
                lessons: [...day.lessons, action.payload.data],
              };
            } else {
              return day;
            }
          });
        } else {
          draft.data = state.data.map((day) => {
            if (currentDay === day.name) {
              return {
                ...day,
                lessons: day.lessons.map((lesson) => {
                  if (lesson.id === id) {
                    return action.payload.data;
                  } else {
                    return lesson;
                  }
                }),
              };
            } else {
              return day;
            }
          });
        }
      });
    }
    case "@timetable/MOVE": {
      return produce(state, (draft) => {
        const { fromList, from, to } = action.payload;

        const dragged = draft.data[fromList].lessons[from];

        draft.data[fromList].lessons.splice(from, 1);
        draft.data[fromList].lessons.splice(to, 0, dragged);
        console.log("move");
      });
    }
    default:
      return state;
  }
}
