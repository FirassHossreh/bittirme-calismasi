import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  initialState: false,
  name: "loading",
  reducers: {
    setLoadin: (state, action) => {
      return action.payload;
    },
  },
});
export const { setLoadin } = loadingSlice.actions;
export default loadingSlice.reducer;
