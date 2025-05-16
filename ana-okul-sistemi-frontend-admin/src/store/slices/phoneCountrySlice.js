import { createSlice } from "@reduxjs/toolkit";
const phoneCountrySlice = createSlice({
  name: "phoneCountrySlice",
  initialState: { phoneCountrySlice: "" },
  reducers: {
    handlephoneCountryChange: (state, action) => {
      state.phoneCountrySlice = action.payload;
    },
  },
});
export const { handlephoneCountryChange } = phoneCountrySlice.actions;
export default phoneCountrySlice.reducer;
