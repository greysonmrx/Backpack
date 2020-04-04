import produce from "immer";

const INITIAL_STATE = {
  tasks: [],
};

export default function task(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "@task/CREATE": {
      return produce(state, (draft) => {
        draft.tasks = [...state.tasks, action.payload];
      });
    }
    case "@task/TOGGLE_DONE": {
      return produce(state, (draft) => {
        draft.tasks = state.tasks.map((task) => {
          if (action.payload === task.id) {
            return { ...task, done: !task.done };
          } else {
            return task;
          }
        });
      });
    }
    case "@task/REMOVE": {
      return produce(state, (draft) => {
        draft.tasks = state.tasks.filter((task) => task.id !== action.payload);
      });
    }
    case "@task/EDIT": {
      return produce(state, (draft) => {
        draft.tasks = state.tasks.map((task) => {
          if (action.payload.id === task.id) {
            return { ...task, title: action.payload.title };
          } else {
            return task;
          }
        });
      });
    }
    default:
      return state;
  }
}
