import produce from "immer";

const INITIAL_STATE = {
  tasks: []
};

export default function task(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "@task/CREATE": {
      return produce(state, draft => {
        draft.tasks = [...state.tasks, action.payload];
      });
    }
    case "@task/TOGGLE_DONE": {
      return produce(state, draft => {
        draft.tasks = state.tasks.map(task => {
          if (action.payload === task.id) {
            return { ...task, done: !task.done };
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
