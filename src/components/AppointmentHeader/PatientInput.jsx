// eslint-disable-next-line no-unused-vars
import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiOutlineXMark } from "react-icons/hi2";

// eslint-disable-next-line react/prop-types
const PatientInput = ({patients,handleChange,handelClear,handleOpen ,input,handelOption,isOpen}) => {
  return (
    <div>
        <div className="relative w-[100%] h-[80px] px-4 mt-2">
            <label className="font-bold text-xl text-red-400">
              Patient Name
            </label>
            <div className="relative h-[40px] mt-2">
              <input
                type="text"
                className="border w-[100%] h-[100%] p-2 rounded-md text-black"
                name="patientID"
                value={input}
                onChange={handleChange}
                placeholder="Patient Name"
              />
              <div className="absolute top-2 right-2 cursor-pointer flex items-center justify-center">
                <HiOutlineXMark
                  size={25}
                  onClick={handelClear}
                  className={`${input === "" ? "hidden" : "block"}`}
                />
                <MdKeyboardArrowDown size={30} onClick={handleOpen} />
              </div>
            </div>
            <div
              className={`${
                // eslint-disable-next-line no-undef
                isOpen
                  ? "block border absolute w-[90%] h-[100px] overflow-y-scroll text-center z-10 bg-black"
                  : "hidden"
              }`}
            >
              {patients
                // eslint-disable-next-line react/prop-types
                .filter((item) => {
                  // eslint-disable-next-line react/prop-types
                  return input.toLowerCase() === ""
                    ? item
                    : item.name.toLowerCase().includes(input);
                })
                .map((patient) => {
                  return (
                    <option
                      value={patient.name}
                      key={patient.id}
                      className="border cursor-pointer text-xl font-semibold text-white hover:bg-gray-500 text-center"
                      // eslint-disable-next-line no-undef
                      onClick={() => handelOption(patient.name)}
                    >
                      {patient.name}
                    </option>
                  );
                })}
            </div>
          </div>
    </div>
  )
}

export default PatientInput