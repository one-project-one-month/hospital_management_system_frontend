// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import Specialist from '@/components/Specialist/Specialist'
import AllSpecialist from '@/components/Specialist/AllSpecialist'
import { UserFetch } from '@/services/UseFetch';
import EditSpecialist from '@/components/Specialist/EditSpecialist';

const DoctorSpecialist = () => {
    const specialistUrl = 'http://localhost:3000/spcialist';
    const {data} = UserFetch(specialistUrl);
    const [edit , setEdit] =  useState({
        doctorName:"",
        specialist:""
    })
    const handleUpdate =(id) =>{
        setEdit(id)
    }

  return (
    <>
        <h2 className='text-xl p-4'>Doctor Speciallist</h2>
        {
            edit ? <EditSpecialist  edit={edit}  setEdit={setEdit}/> : <Specialist data={data}/>
        }
        <AllSpecialist data={data} handleUpdate={handleUpdate}/>
    </>
  )
}

export default DoctorSpecialist