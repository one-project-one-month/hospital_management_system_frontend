import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  personalInfo: {
    name: '',
    birthDate: '',
    gender: ''
  },
  isFormComplete: false,
  isClick: false
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers : {
    setPersonalInfo: (state, action) => {
      state.personalInfo = { ...state.personalInfo, ...action.payload };
    },
    setIsPersonalFormComplete: (state, action) => {
      state.isFormComplete = action.payload;
    },
    setIsPersonalFormClick: (state, action) => {
      state.isClick = action.payload;
    }
  }
});

export const { setPersonalInfo, setIsPersonalFormComplete, setIsPersonalFormClick } = formSlice.actions;
export default formSlice.reducer;