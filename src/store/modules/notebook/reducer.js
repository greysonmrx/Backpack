import produce from "immer";

const INITIAL_STATE = {
  notebooks: []
};

export default function notebook(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "@notebook/CREATE": {
      return produce(state, draft => {
        draft.notebooks = [...state.notebooks, action.payload];
      });
    }
    case "@notebook/REMOVE": {
      return produce(state, draft => {
        draft.notebooks = state.notebooks.filter(
          notebook => notebook.id !== action.payload
        );
      });
    }
    default:
      return state;
  }
}
