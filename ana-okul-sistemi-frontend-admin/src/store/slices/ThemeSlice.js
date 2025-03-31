import { createSlice } from "@reduxjs/toolkit";
const themeOption = localStorage.getItem("theme-option");
const themeSlice = createSlice({
  name: "themeSlice",
  initialState: { themeOption: themeOption || "light" },
  reducers: {
    handleThemeChange: (state, action) => {
      state.themeOption = action.payload;
    },
  },
});
export const { handleThemeChange } = themeSlice.actions;
export default themeSlice.reducer;
