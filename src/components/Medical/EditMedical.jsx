/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { MdEdit } from "react-icons/md";
import moment from "moment";
import axios from "axios";

// eslint-disable-next-line react/prop-types
export default function Modal({props,patients}) {
  console.log(props)

  const [edtiDisease , setEditDisease] = useState([]);
  const [editMedical, setEditMedical] = useState({
    // eslint-disable-next-line react/prop-types
    "patientID":props.PatientID,
    // eslint-disable-next-line react/prop-types
    "startDate":props.StartDate,
    // eslint-disable-next-line react/prop-types
    "endDate":props.EndDate,
    // eslint-disable-next-line react/prop-types
    "diagnosis":props.Diagnosis,
    // eslint-disable-next-line react/prop-types
    "note":props.Note,
    "treatment":props.Treatment,
    "diseases":[{id:props.Id}],
  })


const getDisease = async() =>{
  await axios.get('https://hospital-management-system-backend.vercel.app/api/v1/diseases')
  .then(res =>{
    setEditDisease(res.data.data)
  })
  .catch(err=>{
    console.log(err.message)
  })
}
useEffect(()=>{
  getDisease()
},[])
  // eslint-disable-next-line react/prop-types
const getPatient = (pID)=>{
  const selectPatient =  patients.find((p)=>{
    return p.Id === pID
  })
  if(selectPatient){
    return selectPatient.Name
  }
  else{
    return "Unknown"
  }
}

const getDisases = (gId)=>{
  console.log(gId[0])
  const selectDisease = edtiDisease.find((e)=>{
    return e.Id = gId[0]
  })
  console.log(selectDisease)
  if(selectDisease){
    return selectDisease.Name
  }else{
    return "Unknown Disease"
  }
}

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditMedical({
      ...editMedical,
      [name]: value,
    });
  };

  const handleSave =(e)=>{
    console.log(editMedical)
    setShowModal(false)
    e.preventDefault()
    axios.put(`https://hospital-management-system-backend.vercel.app/api/v1/medical-records${editMedical.Id}`, editMedical)
    .then(res =>{
      console.log(res.data)
    })
    .catch(err=>{
      console.log(err.message)
    })
  }
  return (
    <>
      <MdEdit  className="text-[#3b82f6] mx-2 cursor-pointer"
                            size={20}
      onClick={handleModal}/>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative w-full bg-white">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-xl font-semibold text-black">
                    Edit Medical Record
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="p-8 flex flex-col">
                    <div className="flex justify-between items-center">
                        <label className="text-xl text-black p-2">Name:</label>
                        <input type="text"  className="border p-2 text-black rounded-md" placeholder="Name" disabled value={getPatient(editMedical.patientID)} onChange={handleInputChange} name="name"/>
                    </div>
                    <div className="mt-2 flex justify-between items-center">
                        <label className="text-xl text-black p-2">Start Date:</label>
                        <input type="text"  className="border p-2 text-black rounded-md" placeholder="Start Date" value={moment(editMedical.startDate).format("LLL")}  onChange={handleInputChange}/>
                    </div>
                    <div className="mt-2 flex justify-between items-center">
                        <label className="text-xl text-black p-2">End Date:</label>
                        <input type="text"  className="border p-2 text-black rounded-md" placeholder="End Date" value={moment(editMedical.endDate).format("LLL")} onChange={handleInputChange}/>
                    </div>
                    <div className="mt-2 flex justify-between items-center">
                        <label className="text-xl text-black p-2">Diseases:</label>
                        <input type="text"  className="border p-2 text-black rounded-md" placeholder="Diseases" disabled value={getDisases(editMedical.diseases)} onChange={handleInputChange} name="diseases"/>
                    </div>
                    <div className="mt-2 flex justify-between items-center">
                        <label className="text-xl text-black p-2">Diagnosis:</label>
                        <textarea className="w-[100%] p-2 border text-black" placeholder="Diagnosis" value={editMedical.diagnosis} onChange={handleInputChange} name="diagnosis"></textarea>
                    </div>
                    <div className="mt-2 flex justify-between items-center">
                        <label className="text-xl text-black p-2">Note:</label>
                       <textarea className="w-[100%] p-2 border text-black" placeholder="Note" value={editMedical.note} onChange={handleInputChange} name="note"></textarea>
                    </div>
                    <div className="mt-2 flex justify-between items-center">
                        <label className="text-xl text-black p-2">Treatment:</label>
                        <textarea className="w-[100%] p-2 border text-black" placeholder="Treatment" value={editMedical.treatment} onChange={handleInputChange} name="treatment"></textarea>
                    </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleSave}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
