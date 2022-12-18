import { createSlice } from "@reduxjs/toolkit";


//userRedux

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: {},
    isFetching: false,
    error: false,
  },

  reducers: {

    //Reducer user register
    registerStart: (state) => {
      state.isFetching = true;
    },
    registerSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.error = false;
    },
    registerFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    //Reducer user login
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.error = false;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    //Reducer user logout
    logoutStart: (state) => {
      state.isFetching = false;
      state.currentUser = {};
    },
  },
});

export const { registerStart, registerSuccess, registerFailure, loginStart, loginSuccess, loginFailure, logoutStart } = userSlice.actions;
export default userSlice.reducer;