import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../slice/counterslice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    
  },
});
