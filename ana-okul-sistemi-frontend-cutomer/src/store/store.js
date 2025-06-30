import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from "./slices/LoadingSlice";
import authSliceReducer from "./slices/isAuthenticatedSlice";
export const store = configureStore({
  reducer: {
    loadingReducer,
    authSliceReducer,
  },
});
