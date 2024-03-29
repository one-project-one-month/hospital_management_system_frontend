import { configureStore } from '@reduxjs/toolkit';
import formReducer from './patient/form'
import contactReducer from './patient/contactSlice'
import healthProfileReducer from './patient/healthProfile'
import responseReducer from './patient/responseSlice'

const store = configureStore({
  reducer: {
    form: formReducer,
    contact : contactReducer,
    healthProfile : healthProfileReducer,
    response : responseReducer
  }
});

export default store;
