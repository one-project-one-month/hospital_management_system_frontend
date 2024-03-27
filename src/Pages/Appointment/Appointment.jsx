import Head from "@/components/AppointmentHeader/Head"
import Paginate from "@/components/AppointmentHeader/Paginate"
import Table from "@/components/AppointmentHeader/Table"
import { UserFetch } from "@/services/UseFetch"
import { useState } from "react"

const Appointment = () => {

  const [search , setSearch] = useState('');
     const url = "http://localhost:3000/users";
    // eslint-disable-next-line no-unused-vars
    const {data , error , loading} = UserFetch(url);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemPerPage] = useState(5);
    
    const lastIndex = currentPage * itemPerPage;
    const firstIndex = lastIndex - itemPerPage;
    const currentIndex = data.slice(firstIndex, lastIndex);

    const filterData = data
    .filter((u)=>{
      return search.toLowerCase() === '' ? u : u.patientName.toLowerCase().includes(search)|| u.doctorName.toLowerCase().includes(search) || u.roomNo.toLowerCase().includes(search) || u.date.toLowerCase().includes(search)
    })

  return (
    <>
        {loading && <h1>Loading...</h1>}
        {error && <h1>Something went wrong</h1>}
        <Head />
        <div className="flex px-4 items-center m-4">
          <h2 className="font-semibold">Showing <span className="font-bold text-xl text-[#3b82f6]">{currentIndex.length}</span> Appointments</h2>
          <input type="text" placeholder="Search..." className="border ml-4 w-[300px] px-2 py-1 rounded-md dark:text-black" onChange={(e)=> setSearch(e.target.value)}/>
        </div>
       <Table filterData={filterData}/>
       <Paginate  setCurrentPage={setCurrentPage} itemPerPage={itemPerPage} currentPage={currentPage} currentIndex={currentIndex}/>
    </>
  )
}

export default Appointment