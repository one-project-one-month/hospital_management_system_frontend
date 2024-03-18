import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  personalInfo: {
    fullName: '',
    dateOfBirth: '',
    gender: ''
  },
  isFormComplete: false,
  isClick: false
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setPersonalInfo: (state, action) => {
      state.personalInfo = { ...state.personalInfo, ...action.payload };
    },
    setIsFormComplete: (state, action) => {
      state.isFormComplete = action.payload;
    },
    setIsClick: (state, action) => {
      state.isClick = action.payload;
    }
  }
});

export const { setPersonalInfo, setIsFormComplete, setIsClick } = formSlice.actions;
export default formSlice.reducer;