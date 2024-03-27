import { configureStore } from '@reduxjs/toolkit';
import formReducer from './patient/form'
import contactReducer from './patient/contactSlice'
import healthProfileReducer from './patient/healthProfile'

const store = configureStore({
  reducer: {
    form: formReducer,
    contact : contactReducer,
    healthProfile : healthProfileReducer
  }
});

export default store;
