import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";

const NewMedical =() => {
  const [showModal, setShowModal] = React.useState(false);
  const[patients, setPatients] = useState([]);
  const [newDiseases , setNewDiseases] = useState([]);
  const [createRecord, setCreateRecord] = useState({
    "patientID":"",
    "startDate":"",
    "endDate":"",
    "diagnosis":"",
    "note":"",
    "treatment":"",
    "diseases":[],
  })

  const getPatient = async() =>{
    await axios.get('https://hospital-management-system-backend.vercel.app/api/v1/patients')
    .then(res =>{
      console.log(res.data.data)
      setPatients(res.data.data)
    })
    .catch(err=>{
      console.log(err.message)
    })
  }
  const getDisease = async() =>{
    await axios.get('https://hospital-management-system-backend.vercel.app/api/v1/diseases')
    .then(res =>{
      console.log(res.data.data)
      setNewDiseases(res.data.data)
    })
    .catch(err=>{
      console.log(err.message)
    })
  }
  useEffect(()=>{
    getPatient();
    getDisease();
  },[])


  const getDiseaseId = (e)=>{
    const disease = e.target.value;
    const selectDisease = newDiseases.find((d)=>{
      return d.Name === disease;
    })
    if(selectDisease){
      setCreateRecord({
        ...createRecord,diseases:[...createRecord.diseases,{id:selectDisease.Id} ]
      })
    }
  }

  const showSuccessToast = (message) => {
    toast.success(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      newestOnTop: false,
      closeOnClick: true,
      rtl: false,
      pauseOnFocusLoss: true,
      draggable: true,
      pauseOnHover: true,
      theme: "light",
    });
  };
  const showFailToast = (message) => {
    toast.error(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      newestOnTop: false,
      closeOnClick: true,
      rtl: false,
      pauseOnFocusLoss: true,
      draggable: true,
      pauseOnHover: true,
      theme: "light",
    });
  };
  const handleCreate =()=>{
    
    axios.post('https://hospital-management-system-backend.vercel.app/api/v1/medical-records' , createRecord)
    .then(res=>{
      console.log(res.data)
      showSuccessToast('medical records create successfully')
      window.location.reload()
    })
    .catch(err=>{
      console.log(err.message)
      showFailToast('Patient Name is already created')
    })
  }
  console.log(createRecord)
  const handleStartDate = (e) =>{
    const pointDate = e.target.value;
    const date = new Date(pointDate);
    const newDate = date.toISOString();
    setCreateRecord({
      ...createRecord, startDate: newDate
    })
  }
  const handleEndDate = (e) =>{
    const pointDate = e.target.value;
    const date = new Date(pointDate);
    const newDate = date.toISOString();
    setCreateRecord({
      ...createRecord, endDate: newDate
    })
  }
  return (
    <>
      <button className='bg-[#3b82f6] p-2 flex items-center rounded-md' onClick={() => setShowModal(true)}>
        <AiOutlinePlus size={20}/><span className="text-xl px-2 cursor-pointer">New Records</span></button>
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
                    New Medical Record
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
                <div className="p-8 flex jus flex-col">
                    <div className="mt-2 flex justify-between items-center">
                      <label className="text-xl text-black p-2">Patient</label>
                      <select
                        className="w-full border rounded-md h-[40px] text-black px-2"
                        value={createRecord.patientID}
                        onChange={(e) =>
                          setCreateRecord({ ...createRecord, patientID: Number(e.target.value) })
                        }
                      >
                          <option value="">Chose Patient Name</option>
                          {patients.map((patient) => (
                            <option key={patient.Id} value={patient.Id}>
                              {patient.Name}
                            </option>
                          ))}
                      </select>
                    </div>
                    <div className="mt-2 flex justify-between items-center">
                        <label className="text-xl text-black p-2">Start Date:</label>
                        <input type="datetime-local"  className="border p-2 text-black rounded-md" placeholder="Start Date" onChange={handleStartDate}/>
                    </div>
                    <div className="mt-2 flex justify-between items-center">
                        <label className="text-xl text-black p-2">End Date:</label>
                        <input type="datetime-local"  className="border p-2 text-black rounded-md" placeholder="End Date" onChange={handleEndDate}/>
                    </div>
                    <div className="mt-2 flex justify-between items-center">
                        <label className="text-xl text-black p-2">Diseases:</label>
                        <select
                          className="w-full border rounded-md h-[40px] text-black px-2"
                          onChange={getDiseaseId}
                        >
                          <option value="">Select Disease</option>
                          {newDiseases.map((disease) => (
                            <option key={disease.Id} value={disease.Name}>
                              {disease.Name}
                            </option>
                          ))}
                        </select>
                    </div>
                    <div className="mt-2 flex justify-between items-center">
                        <label className="text-xl text-black p-2">Diagnosis:</label>
                        <textarea className="w-[100%] p-2 border text-black" placeholder="Diagnosis" onChange={(e)=>{setCreateRecord({...createRecord,diagnosis:e.target.value})}}></textarea>
                    </div>
                    <div className="mt-2 flex justify-between items-center">
                        <label className="text-xl text-black p-2">Note:</label>
                       <textarea className="w-[100%] p-2 border text-black" placeholder="Note" onChange={(e)=>{setCreateRecord({...createRecord,note:e.target.value})}}></textarea>
                    </div>
                    <div className="mt-2 flex justify-between items-center">
                        <label className="text-xl text-black p-2">Treatment:</label>
                        <textarea className="w-[100%] p-2 border text-black" placeholder="Treatment" onChange={(e)=>{setCreateRecord({...createRecord,treatment:e.target.value})}}></textarea>
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
                    onClick={handleCreate}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
                <ToastContainer />
    </>
  );
}

export default NewMedical