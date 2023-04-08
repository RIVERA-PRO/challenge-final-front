import { configureStore } from "@reduxjs/toolkit";
import alertReducer from "../../src/Store/Alert/reducer";

export const store = configureStore({
  reducer: {
    alert: alertReducer,


  },
});
