import { configureStore } from '@reduxjs/toolkit';
import formReducer from './form'
import contactReducer from './contactSlice'
import medicalRecordReducer from './medicalRecordSlice'

const store = configureStore({
  reducer: {
    form: formReducer,
    contact : contactReducer,
    medicalRecord : medicalRecordReducer
  }
});

export default store;
