import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "loginSlice",
  initialState: {
    email: "",
    password: "",
  },
  reducers: {
    handleEmailInputChange: (state, action) => {
      console.log(action.payload);
      state.email = action.payload;
    },
    handlePasswordInputChange: (state, action) => {
      console.log(action.payload);
      state.password = action.payload;
    },
  },
});
export const { handleEmailInputChange, handlePasswordInputChange } =
  loginSlice.actions;
export default loginSlice.reducer;
