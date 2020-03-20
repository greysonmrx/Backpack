import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: "backpack",
      storage,
      whitelist: ["timetable", "task", "notebook", "setting"]
    },
    reducers
  );

  return persistedReducer;
};
