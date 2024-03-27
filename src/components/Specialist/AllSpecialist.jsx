// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
const AllSpecialist = ({data,handleUpdate}) => {
  return (
    <>
        <table className='w-[90%] text-center mx-auto mt-6 border-collapse'>
            <thead>
                <tr className="border text-center font-bold bg-[#3b82f6] text-white">
                    <th className="px-6 py-3">Doctor Name</th>
                    <th className="px-6 py-3">Specialist</th>
                    <th className="px-6 py-3">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    // eslint-disable-next-line react/prop-types
                    data.map((d)=>{
                        return (
                            <tr className="border hover:bg-[#649CF7] text-center font-medium text-sm hover:text-white" key={d.id}>
                            <td className="px-6 py-2">{d.doctorName}</td>
                            <td className="px-6 py-2">{d.specialist}</td>
                            <td className="px-6 py-2">
                                <button className='bg-[#2563eb] w-[80px] p-1 text-[#ffffff] rounded-md mr-4' onClick={()=> handleUpdate(d.id)}>Edit</button>
                                <button className='bg-[#2563eb] w-[80px] p-1 text-[#ffffff] rounded-md'>Delete</button>
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

export default AllSpecialist;