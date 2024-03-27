// eslint-disable-next-line no-unused-vars
import axios from 'axios'
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

const Specialist = () => {
    const [special , setSpecial] = useState({
        doctorName:"",
        specialist:""
    })

    const handleSpecial = (e)=>{
        setSpecial({
            ...special , [e.target.name] :e.target.value
        })
    }
    const handleSpecialSubmit = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:3000/spcialist' , special)
        .then(res =>{
            console.log(res.data)
            setSpecial({
                doctorName:'',
                spcialist:""
            })
            window.location.reload()
        })
        .catch(err=>{
            console.log(err.message)
        })
    }
  return (
    <form onSubmit={handleSpecialSubmit }>
            <div className='flex justify-between items-center px-12 mt-4'>
                <div className='flex flex-col w-[400px]'>
                    <label>Doctor Name</label>
                    <input
                        type='text'
                        placeholder='Doctor Name'
                        className='w-[100%] border p-2 rounded-md mt-2 text-black'
                        name='doctorName'
                        value={special.doctorName}
                        onChange={handleSpecial}
                    />
                </div>
                <div className='flex flex-col w-[400px]'>
                    <label>Specialist</label>
                    <input
                        type='text'
                        placeholder='Specialist'
                        className='w-[100%] border p-2 rounded-md mt-2 text-black'
                        name='specialist'
                        value={special.specialist}
                        onChange={handleSpecial}
                    />
                </div>
            </div>
                <button className='bg-[#2563eb] w-[100px] p-2 text-[#ffffff] rounded-md mx-12 mt-8' type='submit'>
                    Save
                </button>
        </form>
  )
}

export default Specialist