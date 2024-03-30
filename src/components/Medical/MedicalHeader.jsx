// eslint-disable-next-line no-unused-vars
import React from 'react'
import NewMedical from './NewMedical';

const MedicalHeader = () => {
  return (
    <div className="flex justify-between items-center px-6 m-4">
        <h1 className="text-3xl text-[#3b82f6]">Medical Records</h1>
        <NewMedical />
    </div>
  )
}

export default MedicalHeader