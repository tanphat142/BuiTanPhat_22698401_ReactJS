import { createSlice } from '@reduxjs/toolkit';

const ThemeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: 'light', // Giá trị ban đầu là "light"
  },
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
  },
});

export const { toggleTheme } = ThemeSlice.actions;
export default ThemeSlice.reducer;