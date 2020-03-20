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
        // draft.data[0].lessons = [action.payload];
        draft.data = state.data.map(day => {
          if (action.payload.day === day.name) {
            return { ...day, lessons: [...day.lessons, action.payload] };
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