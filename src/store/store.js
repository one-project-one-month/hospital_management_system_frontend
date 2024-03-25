import { configureStore } from '@reduxjs/toolkit';
import formReducer from './patient/form'
import contactReducer from './patient/contactSlice'
import medicalRecordReducer from './patient/medicalRecordSlice'

const store = configureStore({
  reducer: {
    form: formReducer,
    contact : contactReducer,
    medicalRecord : medicalRecordReducer
  }
});

export default store;
