import { createSlice } from "@reduxjs/toolkit";

//The userSlice.js detects whether the user has logged into the store website or not.
//Depending if the user has signed in or not, this file will run a message on every page, so that the user has the confirmation that he is still logged in.
export const userSlice = createSlice({
  name: "user",
  initialState: {
    username: "",
    isLoggedIn: false,
  },
  reducers: {
    login: (state, action) => {
      state.username = action.payload.username;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.username = "";
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
