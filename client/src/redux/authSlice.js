import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  user: localStorage.getItem("user") || null,
  password: localStorage.getItem("password") || null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.password = null;
      state.error = null;
      localStorage.removeItem("user");
      localStorage.removeItem("password");
    },
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", action.payload);
    },
    setPassword: (state, action) => {
      state.password = action.payload;
      localStorage.setItem("password", action.payload);
    },
  },
});

export const { logout, setUser, setPassword } = authSlice.actions;

export const selectAuth = (state) => state.auth;

export default authSlice.reducer;
