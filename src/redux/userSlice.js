import { createSlice } from '@reduxjs/toolkit';

const getCrurrentStorage = () => {
  const currentString = window.localStorage.getItem('user');
  if (currentString) return JSON.parse(currentString);
  return null;
};
export default createSlice({
  name: 'user',
  initialState: {
    current: getCrurrentStorage(),
    isLoading: false,
    error: null,
  },
  reducers: {
    loginStart: (state, action) => {
      state.isLoading = true;
      state.error = '';
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.error = '';
      state.current = action.payload;
    },
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
