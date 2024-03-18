import { configureStore } from '@reduxjs/toolkit';
import formReducer from './formSlice'
import contactReducer from './contactSlice'

const store = configureStore({
  reducer: {
    form: formReducer,
    contact : contactReducer,
  }
});

export default store;
