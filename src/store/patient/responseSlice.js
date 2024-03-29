import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isResponseComplete: false,
};

const responceSlice = createSlice({
  name: 'response',
  initialState,
  reducers : {
    setIsResponseComplete: (state, action) => {
      state.isResponseComplete = action.payload;
    }
  }
});

export const { setIsResponseComplete } = responceSlice.actions;
export default responceSlice.reducer;