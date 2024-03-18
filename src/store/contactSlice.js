import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contactInfo: {
    phoneNumber: '',
    email: '',
    address: ''
  },
  isFormComplete: false,
  isClick: false
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    setContactInfo: (state, action) => {
      state.contactInfo[action.payload.name] = action.payload.value;
    },
    setIsContactFormComplete: (state, action) => {
      state.isFormComplete = action.payload;
    },
    setContactIsClick: (state, action) => {
      state.isClick = action.payload;
    }
  }
});

export const { setContactInfo, setIsContactFormComplete, setContactIsClick } = contactSlice.actions;
export default contactSlice.reducer;
