import { configureStore } from '@reduxjs/toolkit';
import chatReducer from '../redux/chatSlice';
import authReducer from '../redux/authSlice';

export default configureStore({
  reducer: {
    chat: chatReducer,
    auth: authReducer,
  },
});
