/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import moment from "moment";


// eslint-disable-next-line react/prop-types
export default function Modal({showModal,handleCross,handleSave,editMedical,handleInputChange,getPatientName}) {
  return (
    <>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative w-full bg-white">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-xl font-semibold text-black">
                    Edit Medical Record
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={handleCross}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="p-8 flex flex-col">
                    <div className="flex justify-between items-center">
                        <label className="text-xl text-black p-2">Name:</label>
                        <input type="text"  className="border p-2 text-black rounded-md" placeholder="Name" disabled value={getPatientName(editMedical.PatientID)} onChange={handleInputChange} name="Name"/>
                    </div>
                    <div className="mt-2 flex justify-between items-center">
                        <label className="text-xl text-black p-2">Start Date:</label>
                        <input type="text"  className="border p-2 text-black rounded-md" placeholder="Start Date" disabled value={moment(editMedical.StartDate).format("LLL")}  onChange={handleInputChange} name="StartDate"/>
                    </div>
                    <div className="mt-2 flex justify-between items-center">
                        <label className="text-xl text-black p-2">End Date:</label>
                        <input type="text"  className="border p-2 text-black rounded-md" placeholder="End Date" disabled value={moment(editMedical.EndDate).format("LLL")} onChange={handleInputChange} name="EndDate"/>
                    </div>
                    <div className="mt-2 flex justify-between items-center">
                        <label className="text-xl text-black p-2">Diseases:</label>
                        <input type="text"  className="border p-2 text-black rounded-md" placeholder="Diseases" disabled value={editMedical.Diseases[0].Name} onChange={handleInputChange} name="Diseases"/>
                    </div>
                    <div className="mt-2 flex justify-between items-center">
                        <label className="text-xl text-black p-2">Diagnosis:</label>
                        <textarea className="w-[100%] p-2 border text-black" placeholder="Diagnosis" value={editMedical.Diagnosis} onChange={handleInputChange} name="Diagnosis"></textarea>
                    </div>
                    <div className="mt-2 flex justify-between items-center">
                        <label className="text-xl text-black p-2">Note:</label>
                       <textarea className="w-[100%] p-2 border text-black" placeholder="Note" value={editMedical.Note} onChange={handleInputChange} name="Note"></textarea>
                    </div>
                    <div className="mt-2 flex justify-between items-center">
                        <label className="text-xl text-black p-2">Treatment:</label>
                        <textarea className="w-[100%] p-2 border text-black" placeholder="Treatment" value={editMedical.Treatment} onChange={handleInputChange} name="Treatment"></textarea>
                    </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleCross}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleSave}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
