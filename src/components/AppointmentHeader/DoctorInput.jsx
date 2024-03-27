// eslint-disable-next-line no-unused-vars
import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiOutlineXMark } from "react-icons/hi2";
// eslint-disable-next-line react/prop-types
const DoctorInput = ({doctorInput,handleDoctorChange,handelDoctorClear,handleClick,isClose,doctors,handelDoctorOption}) => {
  return (
    <div>
            <div className=" relative w-[100%] h-[80px] px-4 mt-2">
            <label className="font-bold text-xl text-red-400">
              Doctor Name
            </label>
            <div className=" relative h-[40px] mt-2">
              <input
                type="text"
                className="border w-[100%] h-[100%] p-2 rounded-md text-black"
                name="doctorID"
                value={doctorInput}
                onChange={handleDoctorChange}
                placeholder="Doctor Name"
              />
              <div className="absolute top-2 right-2 cursor-pointer flex items-center justify-center">
                <HiOutlineXMark
                  size={25}
                  onClick={handelDoctorClear}
                  className={`${doctorInput === "" ? "hidden" : "block"}`}
                />
                <MdKeyboardArrowDown size={30} onClick={handleClick} />
              </div>
            </div>
            <div
              className={`${
                isClose
                  ? "block border absolute w-[90%] h-[100px] overflow-y-scroll text-center bg-black z-10"
                  : "hidden"
              }`}
            >
              {doctors
                // eslint-disable-next-line react/prop-types
                .filter((item) => {
                  // eslint-disable-next-line react/prop-types
                  return doctorInput.toLowerCase() === ""
                    ? item
                    : item.name.toLowerCase().includes(doctorInput);
                })
                .map((doctor) => {
                  return (
                    <option
                      value={doctor.name}
                      key={doctor.id}
                      className="border cursor-pointer text-xl font-semibold text-white hover:bg-gray-500"
                      onClick={() => handelDoctorOption(doctor.name)}
                    >
                      {doctor.name}
                    </option>
                  );
                })}
            </div>
          </div>
    </div>
  )
}

export default DoctorInput