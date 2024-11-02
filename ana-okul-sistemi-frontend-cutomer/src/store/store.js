import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from "./slices/LoadingSlice";
export const store = configureStore({
  reducer: {
    loadingReducer,
  },
});
