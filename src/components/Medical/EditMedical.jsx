import React from "react";
import { MdEdit } from "react-icons/md";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <MdEdit  className="text-[#3b82f6] mx-2 cursor-pointer"
                            size={20}
      onClick={() => setShowModal(true)}/>
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
                    onClick={() => setShowModal(false)}
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
                        <input type="text"  className="border p-2 text-black rounded-md" placeholder="Name"/>
                    </div>
                    <div className="mt-2 flex justify-between items-center">
                        <label className="text-xl text-black p-2">Start Date:</label>
                        <input type="text"  className="border p-2 text-black rounded-md" placeholder="Start Date"/>
                    </div>
                    <div className="mt-2 flex justify-between items-center">
                        <label className="text-xl text-black p-2">End Date:</label>
                        <input type="text"  className="border p-2 text-black rounded-md" placeholder="End Date"/>
                    </div>
                    <div className="mt-2 flex justify-between items-center">
                        <label className="text-xl text-black p-2">Diagnosis:</label>
                        <textarea className="w-[100%] p-2 border text-black" placeholder="Diagnosis"></textarea>
                    </div>
                    <div className="mt-2 flex justify-between items-center">
                        <label className="text-xl text-black p-2">Note:</label>
                       <textarea className="w-[100%] p-2 border text-black" placeholder="Note"></textarea>
                    </div>
                    <div className="mt-2 flex justify-between items-center">
                        <label className="text-xl text-black p-2">Treatment:</label>
                        <textarea className="w-[100%] p-2 border text-black" placeholder="Treatment"></textarea>
                    </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
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
