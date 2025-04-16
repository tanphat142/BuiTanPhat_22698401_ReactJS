import { createSlice } from '@reduxjs/toolkit';

const AuthSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isLoggedIn: false,
  },
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    setUserInfo: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { login, logout, setUserInfo } = AuthSlice.actions;
export default AuthSlice.reducer;