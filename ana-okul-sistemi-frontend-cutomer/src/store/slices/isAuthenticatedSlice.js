import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },

    // checkAuthSuccess(state) {
    //   state.isAuthenticated = true;
    //   state.loading = false;
    //   state.error = null;
    // },
    // checkAuthFailure(state, action) {
    //   state.isAuthenticated = false;
    //   state.loading = false;
    //   state.error = action.payload || "Authentication failed";
    // },
  },
});

export const { login, logout } = authSlice.actions;

// // Thunk fonksiyonu
// export const checkAuthentication = () => async (dispatch) => {
//   dispatch(checkAuthStart());
//   try {
//     // Cookie otomatik gönderilir, header göndermene gerek yok
//     const response = await apiClient.get(
//       `/api/v1/kindergarten/auth/is-authenticated-new`
//     );

//     if (response.status === 200) {
//       dispatch(checkAuthSuccess());
//     } else {
//       dispatch(checkAuthFailure("Unauthorized"));
//     }
//   } catch (error) {
//     if (error.response?.status === 401) {
//       dispatch(checkAuthFailure("Unauthorized"));
//     } else {
//       dispatch(checkAuthFailure(error.message));
//     }
//   }
// };

export default authSlice.reducer;
