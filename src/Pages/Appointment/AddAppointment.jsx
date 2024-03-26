import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const AddAppointment = () => {
  const [addUser , setAddUser] = useState({
    patientName:"",
    doctorName:"",
    date:"",
    roomNo:""
  })
  const navigate = useNavigate()
  const handleChange = (e) =>{
    setAddUser({
      ...addUser,[e.target.name]:e.target.value
    })
  }
  const handelAdd = (e) =>{
    e.preventDefault();
    axios.post("http://localhost:3000/users",addUser)
    .then(res=>{
      console.log(res.data)
      navigate('/appointment')
    })
    .catch(err =>{
      console.log(err.message)
    })
  }
  return (
    <>
    <form className="mx-auto flex items-center justify-center flex-col mt-8" onSubmit={handelAdd}>
      <div className="border  w-[300px]  shadow-md shadow-green-200 rounded-md">
        <h2 className="text-blue-400 text-center p-4 text-2xl font-bold">Make A Appointment</h2>
        <div className="px-4">
          <label className="text-xl text-red-500 font-medium">Patient Name</label>
          <input type="text" className="border rounded-sm w-[100%] mt-2 dark:text-black px-2 py-1" placeholder="Patient Name" name="patientName" value={addUser.patientName} onChange={handleChange}/>
        </div>
        <div className="px-4 mt-2">
          <label className="text-xl text-red-500 font-medium">Doctor Name</label>
          <input type="text" className="border rounded-sm w-[100%] mt-2 dark:text-black px-2 py-1" placeholder="Doctor Name" name="doctorName" value={addUser.doctorName} onChange={handleChange}/>
        </div>
        <div className="px-4 mt-2">
          <label className="text-xl text-red-500 font-medium">Date</label>
          <input type="datetime-local" className="border rounded-sm w-[100%] mt-2 dark:text-black px-2 py-1" name="date" value={addUser.date} onChange={handleChange}/>
        </div>
        <div className="px-4 mt-2">
          <label className="text-xl text-red-500 font-medium">Room Number</label>
          <input type="text" className="border rounded-sm w-[100%] mt-2 dark:text-black px-2 py-1" placeholder="Room No" name="roomNo" value={addUser.roomNo} onChange={handleChange}/>
        </div>
        <div className="flex items-center mx-auto justify-center">
          <input type="submit" value="Submit" className="px-2 py-1 bg-green-500 w-[70%] m-4 cursor-pointer rounded-md"/>
        </div>
      </div>
    </form>
    </>
  )
}

export default AddAppointment