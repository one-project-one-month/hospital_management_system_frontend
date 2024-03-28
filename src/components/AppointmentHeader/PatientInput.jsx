// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'


// eslint-disable-next-line react/prop-types
const PatientInput = ({userData,setUserData,patients}) => {


  const [selectedPatient , setSelectedPatient] = useState(null)

  const handelPatients = (e) =>{
    const patient = e.target.value;
    // eslint-disable-next-line react/prop-types
    const selectPatient = patients.find((p)=> {
      return p.Name === patient })
      if(selectPatient){
        setSelectedPatient(selectPatient.Id)
        setUserData({
          ...userData,PatientId : selectedPatient
        })
      }
  }
  return (
    <div>
        <div className="relative w-[100%] h-[80px] px-4 mt-2">
            <label className="font-bold text-xl text-red-400">
              Patient Name
            </label>
            <div className="relative h-[40px] mt-2">
              <input
                type="text"
                className="border w-[100%] h-[100%] p-2 rounded-md text-black"
                name="patientName"
                onChange= {handelPatients}
                placeholder="Patient Name"/>
          </div>
          </div>
    </div>
  )
}

export default PatientInput