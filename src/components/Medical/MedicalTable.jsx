
import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import { MdDelete, MdEdit }from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
// eslint-disable-next-line react-hooks/rules-of-hooks
import moment from "moment";
import Modal from './EditMedical';

const MedicalTable = () => {

    const [records , setRecords]  = useState([]);
    const [patients, setPatients] = useState([])
    const [showModal , setShowModal] = useState(false);
    const [editMedical , setEditMedical] = useState([])
    console.log(editMedical)

    const getData = async() =>{
        await axios.get('https://hospital-management-system-backend.vercel.app/api/v1/medical-records')
        .then(res=>{
            console.log(res.data.data)
            setRecords(res.data.data)
        })
        .catch(err =>{
            console.log(err.message)
        })
    }
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


    useEffect(()=>{
        getData()
        getPatient()
    },[])

    const getPatientName = (patientId)=>{
    const newPatient =  patients.find((p)=>{
        return p.Id === patientId
      })
      if(newPatient){
        return newPatient.Name
      }else{
        return "Unknown"
      }
    }
    const handleEdit =(Id)=>{
      setShowModal(true)
      const selectMedical = records.find((r)=>{
        return r.Id === Id
      })    
      setEditMedical(selectMedical)  
    }
    const handleDelete = (Id) =>{
      const confirm = window.confirm('Do You Want To Delete?')
      if(confirm){
        axios.delete(`https://hospital-management-system-backend.vercel.app/api/v1/medical-records/${Id}`)
        .then(res=>{
          console.log(res.data)
        })
        .catch(err=>{
          console.log(err.message)
        })
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
      e.preventDefault()
      setShowModal(false)
      axios.put(`https://hospital-management-system-backend.vercel.app/api/v1/medical-records/${editMedical.Id}`,editMedical)
      .then(res=>{
        console.log(res.data)
        showSuccessToast('medical records changese successfully')
        window.location.reload()
      })
      .catch(err=>{
        console.log(err.message)
        showFailToast(err.message)
      })
    }

    const handleCross = ()=>{
      setShowModal(false)
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
  return (
    <>
        <table className="table border-collapse w-[90%] mx-[auto] shadow-green-200 shadow-md ">
        <thead className="border text-center font-bold bg-[#3b82f6] text-white">
          <tr>
            <th className="px-6 py-3">Patient Name</th>
            <th className="px-6 py-3">Start Date</th>
            <th className="px-6 py-3">End Date</th>
            <th className="px-6 py-3">Diagnosis</th>
            <th className="px-6 py-3">Note</th>
            <th className="px-6 py-3">Treatment</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
                {
                  records.map((r)=>{
                    return (
                      <tr
                      className="border hover:bg-[#649CF7] text-center font-medium text-sm hover:text-white"
                     key={r.Id}>
                      <td className="px-6 py-2">
                        {getPatientName(r.PatientID)}
                      </td>
                      <td className="px-6 py-2">
                      {moment(r.StartDate).format("LLL")}
                      </td>
                      <td className="px-6 py-2">{moment(r.EndDate).format("LLL")}</td>
                      <td className="px-6 py-2">{r.Diagnosis}</td>
                      <td className="px-6 py-2">{r.Note}</td>
                      <td className='px-6 py-2'>{r.Treatment}</td>
                      <td className="px-6 py-2 flex items-center justify-center">
                        <MdEdit className="text-blue-500 mx-2 cursor-pointer"
                          size={20} onClick={()=>handleEdit(r.Id)}/>
                          <Modal handleSave={handleSave} showModal={showModal} handleCross={handleCross} editMedical={editMedical} handleInputChange={handleInputChange} getPatientName={getPatientName}/>
                          <MdDelete
                              className="text-red-500 mx-2 cursor-pointer"
                              size={20} onClick={()=>handleDelete(r.Id)}
                          />
                      </td>
                    </tr>
                    )
                  })
                }
        </tbody>
      </table>
      <ToastContainer/>
    </>
  )
}

export default MedicalTable