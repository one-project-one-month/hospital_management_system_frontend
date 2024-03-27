// eslint-disable-next-line no-unused-vars
import React from 'react'
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from 'react-router-dom';
const Head = () => {
  return (
    <div className="flex justify-between items-center px-6 m-4">
         <h1 className="text-3xl text-[#3b82f6]">All Appointments</h1>
        <Link to='/appointment/add' className="p-2 bg-[#3b82f6] flex items-center rounded-md">
          <AiOutlinePlus size={20}/> <p className="text-xl px-2 cursor-pointer">New  Appointment</p>
        </Link>
    </div>
  )
}

export default Head;