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
    default:
      return state;
  }
}
