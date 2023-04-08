import { configureStore } from "@reduxjs/toolkit";
import alertReducer from "../../src/Store/Alert/reducer";
import UserVerifi from "../../src/Store/User/reducer"
export const store = configureStore({
  reducer: {
    alert: alertReducer,
    user: UserVerifi

  },
});
