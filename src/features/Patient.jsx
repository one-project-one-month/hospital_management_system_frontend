import React from 'react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

const Patient = () => {
  const [personalInfo, setPersonalInfo] = useState({
    fullName :'',
    dateOfBirth : '',
    gender : ''
  });

  const changeHandler = (e) => {
    const {name,value} = e.target;
    setPersonalInfo((prevInfo) => ({...prevInfo,[name] : value } ))
  }

  const isFormComplete = Object.keys(personalInfo).every(key => personalInfo[key]);

  return (
    <div className='w-full h-screen bg-blue-100 px-[100px] py-[40px]'>
      <div className='bg-white w-full h-full rounded-xl p-8'>
        <div className='text-center font-bold text-xl'>Patient Registration</div>
        <div className='text-center text-red-400 mt-2 text-sm'>Please fill in patients' informations</div>
        <div className="flex items-start max-w-screen-md mx-auto mt-8">
          <div className="w-full">
            <div className="flex items-center w-full">
              <div className="w-8 h-8 shrink-0 mx-[-1px] bg-blue-600 p-1.5 flex items-center justify-center rounded-full">
                <span className="text-base text-white font-bold">1</span>
              </div>
              <div className="w-full h-1 mx-4 rounded-lg bg-blue-600"></div>
            </div>
            <div className="mt-2 mr-4">
              <h6 className="text-base font-semibold text-blue-500">Personal Info</h6>
              <p className="text-xs text-gray-400">Completed</p>
            </div>
          </div>
          <div className="w-full">
            <div className="flex items-center w-full">
              <div className="w-8 h-8 shrink-0 mx-[-1px] bg-blue-600 p-1.5 flex items-center justify-center rounded-full">
                <span className="text-base text-white font-bold">2</span>
              </div>
              <div className="w-full h-1 mx-4 rounded-lg bg-blue-600"></div>
            </div>
            <div className="mt-2 mr-4">
              <h6 className="text-base font-semibold text-blue-500">Contact Info</h6>
              <p className="text-xs text-gray-400">Completed</p>
            </div>
          </div>
          <div className="w-fit">
            <div className="flex items-center">
              <div className="w-8 h-8 shrink-0 mx-[-1px] bg-gray-300 p-1.5 flex items-center justify-center rounded-full">
                <span className="text-base text-white font-bold">3</span>
              </div>
            </div>
            <div className="mt-2">
              <h6 className="text-base font-semibold text-blue-500">Medical Record</h6>
              <p className="text-xs text-gray-400">Pending</p>
            </div>
          </div>
        </div>
        <div className="max-w-screen-lg mx-auto mt-6">
          <h4 className="text-lg font-bold">Personal Info</h4>
          <div className='flex flex-col items-center gap-5 w-full mx-auto mt-3 p-3'>
            <div className='flex w-full items-center'>
              <div className='w-full flex flex-col'>
                <label className='text-base font-semibold'>Full Name</label>
                <input 
                  type="text" 
                  id='fullName'
                  className='w-[80%] bg-gray-50 border border-gray-300 text-gray-900 
                  text-sm rounded-lg focus:ring-blue-500 block p-2.5 mt-3' 
                  placeholder='Enter Full Name'
                  value={personalInfo.fullName}
                  onChange={changeHandler}
                  name="fullName"
                />
              </div>
              <div className='w-full flex flex-col'>
                <label className='text-base font-semibold'>Date of birth</label>
                <input 
                  type="date" 
                  name="" 
                  id="dob" 
                  className='w-[80%] bg-gray-50 border border-gray-300 text-gray-900 
                  text-sm rounded-lg focus:ring-blue-500 block p-2.5 mt-3'
                  value={personalInfo.dateOfBirth}
                  onChange={changeHandler}
                  name="dateOfBirth"
                />
              </div>
            </div>
              <div className="w-full flex flex-col">
                <label className='text-base font-semibold'>Select Gender</label>
                <select id="gender" value={personalInfo.gender} onChange={changeHandler}
                  name="gender" className="bg-gray-50 border  text-gray-900 
                text-sm rounded-lg focus:ring-blue-500  block w-[40%] p-2.5 mt-3 border-r-8 border-transparent outline outline-gray-300">
                    <option value="">Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
              </div>
          </div>
        </div>
        { isFormComplete && <div className="max-w-screen-md mx-auto mt-16 text-right">
            <Button>Continue</Button>
        </div>
        }
      </div>
    </div>

  )
}

export default Patient