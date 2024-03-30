// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
// eslint-disable-next-line react/prop-types
const DoctorInput = ({userData,setUserData,doctors}) => {
  
  const [selectedDoctorId, setSelectedDoctorId] = useState(null);

  const handelDoctor = (e) =>{
    const doctor = e.target.value;
    console.log(doctor)
    // eslint-disable-next-line react/prop-types
    const selectDoctor = doctors.find((d) =>{
     return d.DoctorName === doctor;
    })
    console.log(selectDoctor)
    console.log(selectedDoctorId)
    
   if(selectDoctor){
    setSelectedDoctorId(selectDoctor.Id)
    setUserData({
      ...userData,DoctorId : selectedDoctorId
    })
   }
   else{
    setSelectedDoctorId(null)
   }
  }

  return (
    <div>
            <div className=" relative w-[100%] h-[80px] px-4 mt-2">
            <label className="font-bold text-xl text-red-400">
              Doctor Name
            </label>
            <div className=" relative h-[40px] mt-2">
              <input
                type="text"
                className="border w-[100%] h-[100%] p-2 rounded-md text-black"
                name="doctorName"
                onChange= {handelDoctor}
                placeholder="Doctor Name"
                />
            </div>
          </div>
    </div>
  )
}

export default DoctorInput