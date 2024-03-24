import Head from "@/components/AppointmentHeader/Head"
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
  
    const [pageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
    const [miniPageNumberLimit, setMiniPageNumberLimit] = useState(0);
    const pages = [];
  
    for (let i = 1; i <= Math.ceil(data.length / itemPerPage); i++) {
      pages.push(i);
    }
    const lastIndex = currentPage * itemPerPage;
    const firstIndex = lastIndex - itemPerPage;
    const currentIndex = data.slice(firstIndex, lastIndex);
  
    const pageClick = (e) => {
      setCurrentPage(Number(e.target.id));
    };
  
    const prevClick = () => {
      setCurrentPage((prev) => prev - 1);
      if ((currentPage - 1) % pageNumberLimit == 0) {
        setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
        setMiniPageNumberLimit(miniPageNumberLimit - pageNumberLimit);
      }
    };
    const nextClick = () => {
      setCurrentPage((prev) => prev + 1);
      if (currentPage + 1 > maxPageNumberLimit) {
        setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
        setMiniPageNumberLimit(miniPageNumberLimit + pageNumberLimit);
      }
    };

    const filterData = currentIndex
    .filter((u)=>{
      return search.toLowerCase() === '' ? u : u.patientName.toLowerCase().includes(search)|| u.doctorName.toLowerCase().includes(search) || u.roomNo.toLowerCase().includes(search) || u.date.toLowerCase().includes(search)
    })

  return (
    <>
        {loading && <h1>Loading...</h1>}
        {error && <h1>Something went wrong</h1>}
        <Head />
        <div className="flex px-4 items-center m-4">
          <h2 className="font-semibold">Showing <span className="font-bold text-xl text-red-500">{currentIndex.length}</span> Appointments</h2>
          <input type="text" placeholder="Search..." className="border ml-4 w-[300px] px-2 py-1 rounded-md dark:text-black" onChange={(e)=> setSearch(e.target.value)}/>
        </div>
       <Table filterData={filterData}/>
       <div className={`${currentIndex.length=== 0 ? 'hidden':"flex items-center justify-start px-8 my-8 w-[100%] h-[40px] shadow-md fixed bottom-0 bg-blue-600`"}`}>
        <div className="pagination">
          <button
            type="button"
            className="py-1 w-[40px] mr-1 cursor-pointer rounded-sm bg-black text-white dark:bg-white dark:text-black"
            onClick={prevClick}
            disabled={currentPage === pages[0] ? true : false}
          >
            Prev
          </button>
          {pages.map((p, index) => {
            if (p < maxPageNumberLimit + 1 && p > miniPageNumberLimit) {
              return (
                <button
                  type="button"
                  className={
                    currentPage === p
                      ? " py-1 mr-1 w-[30px] cursor-pointer rounded-sm bg-red-600"
                      : "py-1 w-[30px]  cursor-pointer rounded-sm bg-black text-white dark:bg-white dark:text-black mr-1"
                  }
                  key={index}
                  id={p}
                  onClick={pageClick}
                >
                  {p}
                </button>
              );
            } else {
              return null;
            }
          })}
          <button
            type="button"
            className="py-1 w-[40px]  mr-1 cursor-pointer rounded-sm bg-black text-white dark:bg-white dark:text-black"
            onClick={nextClick}
            disabled={currentPage === pages[pages.length - 1] ? true : false}
          >
            Next
          </button>
        </div>
        </div>
    </>
  )
}

export default Appointment