import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    medicalRecordInfo : {
        bloodType :'',
    },
    isFormComplete: false,
    isClick: false
}

export const medicalRecordSlice = createSlice({
    name : 'medicalRecord',
    initialState,
    reducers : {
        setMedicalRecordInfo : (state,action) => {
        state.medicalRecordInfo = {...state.medicalRecordInfo , ...action.payload}
        },
        setIsMedicalRecordComplete : (state,action) => {
        state.isFormComplete = action.payload

        },
        setIsMedicalRecordClick : (state,action) => {
        state.isClick = action.payload
        }
    }
    
})
export const {setMedicalRecordInfo,setIsMedicalRecordComplete,setIsMedicalRecordClick} = medicalRecordSlice.actions
export default medicalRecordSlice.reducer