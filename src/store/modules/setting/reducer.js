import produce from "immer";

const INITIAL_STATE = {
  settings: [
    {
      value: true
    }
  ]
};

export default function setting(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "@setting/SET": {
      return produce(state, draft => {
        draft.settings[action.payload.index].value = action.payload.value;
      });
    }
    default:
      return state;
  }
}
