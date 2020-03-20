import produce from "immer";

const INITIAL_STATE = {
  data: [
    {
      id: 1,
      name: "Segunda",
      lessons: []
    },
    {
      id: 2,
      name: "Terça",
      lessons: []
    },
    {
      id: 3,
      name: "Quarta",
      lessons: []
    },
    {
      id: 4,
      name: "Quinta",
      lessons: []
    },
    {
      id: 5,
      name: "Sexta",
      lessons: []
    },
    {
      id: 6,
      name: "Sábado",
      lessons: []
    },
    {
      id: 7,
      name: "Domingo",
      lessons: []
    }
  ]
};

export default function timetable(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "@timetable/CREATE": {
      return produce(state, draft => {
        draft.data = state.data.map(day => {
          if (action.payload.day === day.name) {
            return { ...day, lessons: [...day.lessons, action.payload] };
          } else {
            return day;
          }
        });
      });
    }
    case "@timetable/REMOVE": {
      return produce(state, draft => {
        draft.data = state.data.map(day => {
          if (action.payload.day === day.name) {
            return {
              ...day,
              lessons: day.lessons.filter(item => item.id !== action.payload.id)
            };
          } else {
            return day;
          }
        });
      });
    }
    case "@timetable/EDIT": {
      return produce(state, draft => {
        draft.data = state.data.map(day => {
          if (action.payload.day === day.name) {
            return {
              ...day,
              lessons: day.lessons.map(lesson => {
                if (lesson.id === action.payload.id) {
                  return action.payload;
                } else {
                  return lesson;
                }
              })
            };
          } else {
            return day;
          }
        });
      });
    }
    default:
      return state;
  }
}
