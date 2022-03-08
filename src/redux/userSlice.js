import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userApi from '../api/userApi';
import jwt_decode from 'jwt-decode';
export const userLogin = createAsyncThunk(
  'user/login',
  async (params, thunkApi) => {
    const userAuthen = await userApi.login(params);
    let user = null;
    if (userAuthen.access) {
      window.localStorage.setItem(
        'user',
        JSON.stringify({
          access: userAuthen.access,
          refresh: userAuthen.refresh,
        })
      );
      const tokenInfo = jwt_decode(userAuthen.access);
      const userInfo = await userApi.getInfo(tokenInfo.user_id);
      user = {
        ...userInfo,
        ...userAuthen,
      };
      console.log(user);
      window.localStorage.setItem('user', JSON.stringify(user));
      return user;
    }
    return user;
  }
);
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
    loginStart: (state, action) => {},
    loginSuccess: (state, action) => {},
  },
  extraReducers: {
    [userLogin.pending]: (state, action) => {
      state.isLoading = true;
      state.error = '';
    },
    [userLogin.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = 'Error';
    },
    [userLogin.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.current = action.payload;
    },
  },
});
