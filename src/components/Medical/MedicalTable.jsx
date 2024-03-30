
import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import { MdDelete }from "react-icons/md";
// eslint-disable-next-line react-hooks/rules-of-hooks
import moment from "moment";

const MedicalTable = () => {

    const [records , setRecords]  = useState([]);
    const [patients, setPatients] = useState([])


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
    </>
  )
}

export default MedicalTable