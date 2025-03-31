import { createSlice } from "@reduxjs/toolkit";
import i18n from "../../config/i18n";
const languageOption = localStorage.getItem("language-option");
const LanguageSlice = createSlice({
  name: "languageSlice",
  initialState: { languageOption: languageOption || i18n.language },
  reducers: {
    handleLanguageChange: (state, action) => {
      state.languageOption = action.payload;
    },
  },
});
export const { handleLanguageChange } = LanguageSlice.actions;
export default LanguageSlice.reducer;
