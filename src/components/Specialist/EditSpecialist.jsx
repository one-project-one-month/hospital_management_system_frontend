// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
const EditSpecialist = ({edit,setEdit}) => {

    const handleEdit = (e) =>{
        setEdit({
            ...edit,[e.target.name] : e.target.value
        })
    }

  return (
    <form>
    <div className='flex justify-between items-center px-12 mt-4'>
        <div className='flex flex-col w-[400px]'>
            <label>Doctor Name</label>
            <input
                type='text'
                placeholder='Doctor Name'
                className='w-[100%] border p-2 rounded-md mt-2 text-black'
                name='doctorName'
                // eslint-disable-next-line react/prop-types
                value={edit.doctorName}
                onChange={handleEdit}
            />
        </div>
        <div className='flex flex-col w-[400px]'>
            <label>Specialist</label>
            <input
                type='text'
                placeholder='Specialist'
                className='w-[100%] border p-2 rounded-md mt-2 text-black'
                name='specialist'
                // eslint-disable-next-line react/prop-types
                value={edit.specialist}
                onChange={handleEdit}
            />
        </div>
    </div>
        <button className='bg-[#2563eb] w-[100px] p-2 text-[#ffffff] rounded-md mx-12 mt-8' type='submit'>
            Save
        </button>
</form>
  )
}

export default EditSpecialist