import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    healthProfileInfo : {
        bloodType :'',
    },
    isFormComplete: false,
    isClick: false
}

export const healthProfileSlice = createSlice({
    name : 'healthProfile',
    initialState,
    reducers : {
        setHealthProfileInfo : (state,action) => {
        state.healthProfileInfo = {...state.healthProfileInfo , ...action.payload}
        },
        setIsHealthProfileComplete : (state,action) => {
        state.isFormComplete = action.payload

        },
        setIsHealthProfileClick : (state,action) => {
        state.isClick = action.payload
        }
    }
    
})
export const {setHealthProfileInfo,setIsHealthProfileComplete,setIsHealthProfileClick} = healthProfileSlice.actions
export default healthProfileSlice.reducer