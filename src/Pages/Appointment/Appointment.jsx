import Head from "@/components/AppointmentHeader/Head"
import Paginate from "@/components/AppointmentHeader/Paginate"
import Table from "@/components/AppointmentHeader/Table"
import axios from "axios"
import { useEffect, useState } from "react"

const Appointment = () => {

  const [search , setSearch] = useState('');
  const [data , setData] = useState([]);

     const url = "https://hospital-management-system-backend.vercel.app/api/v1/appointments";
    // eslint-disable-next-line no-unused-vars

    const fetchData = async() =>{
      await axios.get(url)
      .then(res =>{
       setData(res.data.data)
      })
    }
    useEffect(()=>{
      fetchData()
    },[])
    
    const [currentPage, setCurrentPage] = useState(1);
    const [itemPerPage] = useState(10);
    
    const lastIndex = currentPage * itemPerPage;
    const firstIndex = lastIndex - itemPerPage;
    const currentIndex = data.slice(firstIndex, lastIndex);

    const filterData = data
    .filter((u)=>{
      return search.toLowerCase() === '' ? u :u.Patient.Name.toLowerCase().includes(search) || u.Doctor.DoctorName.toLowerCase().includes(search) || u.Room.Name.toLowerCase().includes(search) || u.AppointmentDate.toLowerCase().includes(search) || u.Status.toLowerCase().includes(search)
    })

  return (
    <>
        <Head />
        <div className="flex px-4 items-center m-4">
          <h2 className="font-semibold">Showing <span className="font-bold text-xl text-[#3b82f6]">{currentIndex.length}</span> Appointments</h2>
          <input type="text" placeholder="Search..." className="border ml-4 w-[300px] px-2 py-1 rounded-md dark:text-black" onChange={(e)=> setSearch(e.target.value)}/>
        </div>
       <Table filterData={filterData}/>
       <Paginate  setCurrentPage={setCurrentPage} itemPerPage={itemPerPage} currentPage={currentPage} currentIndex={currentIndex}data={data} />
    </>
  )
}

export default Appointment