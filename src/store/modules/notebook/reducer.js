import produce from "immer";

const INITIAL_STATE = {
  notebooks: [],
};

export default function notebook(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "@notebook/CREATE": {
      return produce(state, (draft) => {
        draft.notebooks = [...state.notebooks, action.payload];
      });
    }
    case "@notebook/REMOVE": {
      return produce(state, (draft) => {
        draft.notebooks = state.notebooks.filter(
          (notebook) => notebook.id !== action.payload
        );
      });
    }
    case "@notebook/CREATE_NOTE": {
      return produce(state, (draft) => {
        draft.notebooks = state.notebooks.map((notebook) => {
          if (notebook.id === action.payload.id) {
            return {
              ...notebook,
              notes: [...notebook.notes, action.payload.data],
            };
          } else {
            return notebook;
          }
        });
      });
    }
    case "@notebook/EDIT": {
      return produce(state, (draft) => {
        draft.notebooks = state.notebooks.map((notebook) => {
          if (action.payload.id === notebook.id) {
            return { ...notebook, name: action.payload.name };
          } else {
            return notebook;
          }
        });
      });
    }
    case "@notebook/EDIT_NOTE_CONTENT": {
      return produce(state, (draft) => {
        draft.notebooks = state.notebooks.map((notebook) => {
          if (action.payload.notebookId === notebook.id) {
            return {
              ...notebook,
              notes: notebook.notes.map((note) => {
                if (note.id === action.payload.id) {
                  return { ...note, content: action.payload.content };
                } else {
                  return note;
                }
              }),
            };
          } else {
            return notebook;
          }
        });
      });
    }
    case "@notebook/REMOVE_NOTE": {
      return produce(state, (draft) => {
        draft.notebooks = state.notebooks.map((notebook) => {
          if (action.payload.id === notebook.id) {
            return {
              ...notebook,
              notes: notebook.notes.filter(
                (item) => item.id !== action.payload.currentNoteId
              ),
            };
          } else {
            return notebook;
          }
        });
      });
    }
    case "@notebook/EDIT_NOTE": {
      return produce(state, (draft) => {
        draft.notebooks = state.notebooks.map((notebook) => {
          if (action.payload.id === notebook.id) {
            return {
              ...notebook,
              notes: notebook.notes.map((note) => {
                if (note.id === action.payload.currentNoteId) {
                  return {
                    ...note,
                    title: action.payload.title,
                    description: action.payload.description,
                  };
                } else {
                  return note;
                }
              }),
            };
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
