import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../slice/counterslice';
import userReducer from '../slice/userSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    user:  userReducer
  },
});
