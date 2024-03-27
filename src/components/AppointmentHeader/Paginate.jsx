// eslint-disable-next-line no-unused-vars
import { UserFetch } from '@/services/UseFetch';
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const Paginate = ({setCurrentPage,itemPerPage,currentPage,currentIndex}) => {
    const url = 'http://localhost:3000/users'
    const {data}  = UserFetch(url)
  
   

    const [pageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
    const [miniPageNumberLimit, setMiniPageNumberLimit] = useState(0);
    const pages = [];

      
    for (let i = 1; i <= Math.ceil(data.length / itemPerPage); i++) {
        pages.push(i);
      }

      
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


  return (
    // eslint-disable-next-line react/prop-types
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
  )
}

export default Paginate