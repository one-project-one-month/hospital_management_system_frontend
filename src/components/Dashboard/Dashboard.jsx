import axios from 'axios';
import {Bed,Stethoscope} from 'lucide-react'
import { useEffect, useState } from 'react'

const Dashboard = () => {
  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [appointments, setAppointments] =useState([])
  const getPatient = ()=>{
    axios.get('https://hospital-management-system-backend.vercel.app/api/v1/patients')
    .then(res =>{
      console.log(res.data.data)
      setPatients(res.data.data)
    })
    .catch(err=>{
      console.log(err.message)
    })
  }
  const getDoctor = ()=>{
    axios.get('https://hospital-management-system-backend.vercel.app/api/v1/doctors')
    .then(res =>{
      console.log(res.data.data)
      setDoctors(res.data.data)
    })
    .catch(err=>{
      console.log(err.message)
    })
  }
  const getAppointment = ()=>{
    axios.get('https://hospital-management-system-backend.vercel.app/api/v1/appointments')
    .then(res =>{
      console.log(res.data.data)
      setAppointments(res.data.data)
    })
    .catch(err=>{
      console.log(err.message)
    })
  }
  useEffect(()=>{
    getPatient()
    getDoctor()
    getAppointment()
  },[])
  return (
    <div className="grid lg:grid-cols-3 gap-4 mt-4 mx-6 md:grid-cols-2 sm:grid-cols-1">
    <div className="border bg-[#8E24AA] text-white rounded-lg flex justify-between p-8 shadow-md shadow-white">
      <div className="title">
        <h2 className='text-1xl'>Appointments</h2>
        <h1 className='text-3xl mt-4'>{appointments.length}</h1>
      </div>
      <div className="bg-[#CE93D8] rounded-full w-[100px] h-[100px] relative shadow-md">
        <Bed  size={30} className='absolute top-9 right-9 text-white'/>
      </div>
    </div>
    <div className="border bg-[#00ACC1] text-white rounded-lg flex justify-between p-8 shadow-md shadow-white">
      <div className="title">
        <h2 className='text-xl'>Patients</h2>
        <h1 className='text-3xl mt-4'>{patients.length}</h1>
      </div>
      <div className="bg-[#26C6DA] rounded-full w-[100px] h-[100px] relative shadow-md">
        <Bed  size={30} className='absolute top-9 right-9 text-white'/>
      </div>
    </div>
    <div className="border bg-[#1E88E5] text-white rounded-lg flex justify-between p-8 shadow-md shadow-white">
      <div className="title">
        <h2 className='text-xl'>Doctors</h2>
        <h1 className='text-3xl mt-4'>{doctors.length}</h1>
      </div>
      <div className="bg-[#42A5F5] rounded-full w-[100px] h-[100px] relative shadow-md">
        <Stethoscope  size={30} className='absolute top-9 right-9 text-white'/>
      </div>
    </div>
  </div>
  )
}

export default Dashboard