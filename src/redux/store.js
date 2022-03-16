import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import noticeSlice from './noticeSlice';

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    notice: noticeSlice.reducer,
  },
});

export default store;
