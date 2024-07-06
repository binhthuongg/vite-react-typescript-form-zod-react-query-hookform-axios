import { Tuple, configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducer";

const store = configureStore({
  reducer: rootReducer,
  middleware: () => new Tuple(),
});

export default store;
