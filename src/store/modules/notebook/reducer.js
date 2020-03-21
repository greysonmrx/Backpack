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
    case "@notebook/CREATE_NOTE": {
      return produce(state, draft => {
        draft.notebooks = state.notebooks.map(notebook => {
          if (notebook.id === action.payload.id) {
            return {
              ...notebook,
              notes: [...notebook.notes, action.payload.data]
            };
          } else {
            return notebook;
          }
        });
      });
    }
    case "@notebook/EDIT": {
      return produce(state, draft => {
        draft.notebooks = state.notebooks.map(notebook => {
          console.log(action.payload.id, "/", notebook.id);
          if (action.payload.id === notebook.id) {
            return { ...notebook, name: action.payload.name };
          } else {
            return notebook;
          }
        });
      });
    }
    default:
      return state;
  }
}
