import { configureStore } from "@reduxjs/toolkit";
import loginSliceReducer from "./slices/LoginSlice";
import themeSliceReducer from "./slices/ThemeSlice";
import languageSliceReducer from "./slices/LanguageSlice";
import phoneCountrySliceReducer from "./slices/phoneCountrySlice";
export const store = configureStore({
  reducer: {
    loginSliceReducer,
    themeSliceReducer,
    languageSliceReducer,
    phoneCountrySliceReducer,
  },
});
