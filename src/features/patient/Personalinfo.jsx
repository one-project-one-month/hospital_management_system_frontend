import React from 'react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import Steppers from './Steppers';
import { useDispatch, useSelector } from 'react-redux';
import { setPersonalInfo, setIsPersonalFormComplete, setIsPersonalFormClick } from '../../store/patient/form';

const Personalinfo = () => {
  const personalInfo = useSelector(state => state.form.personalInfo);
  const isPersonalFormClick = useSelector(state => state.form.isClick);
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    dispatch(setPersonalInfo({ [name]: value }));
  }

  const clickHandler = () => {
    dispatch(setIsPersonalFormClick(true));
    // Check if personal info form is complete
    const personalInfoFormComplete = Object.keys(personalInfo).every(key => personalInfo[key]);
    dispatch(setIsPersonalFormComplete(personalInfoFormComplete));
  }

  const infoRedIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-4 h-4 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
  </svg> ;
  const infoWhiteIcon =< svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-4 h-4 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
  </svg> ;


  return (
    <>
      <div className="max-w-screen-lg mx-auto mt-6 ">
          <h4 className="text-lg font-bold text-black">Personal info</h4>
          <div className='flex flex-col items-center gap-6 w-full mx-auto mt-3 p-3'>
            <div className='flex w-full items-center'>
              <div className='w-full flex flex-col'>
                <label className='text-base font-semibold text-black'>Full name</label>
                <input 
                  type="text" 
                  name="fullName" 
                  id="fullName" 
                  className={`w-[80%] bg-gray-50 outline ${isPersonalFormClick && !personalInfo.fullName ? 'outline-red-400' : 'outline-gray-300'} text-gray-900 
                  text-sm rounded-lg focus:ring-blue-500 block p-2.5 mt-3`}
                  value={personalInfo.fullName}
                  onChange={changeHandler}
                  placeholder='Enter full name'
                />
                {isPersonalFormClick && !personalInfo.fullName ? (
                  <div className='w-full flex items-center mt-1 gap-1'> 
                    <span className=''>{infoRedIcon}</span>
                    <span className='h-full text-xs text-red-500'>Please fill in a full name</span>
                  </div>
                ) : (
                  <div className='w-full flex items-center mt-1 gap-1'> 
                    <span className=''>{infoWhiteIcon}</span>
                    <span className='h-full text-xs text-white'>Please fill in a full name</span>
                  </div>
                )}
              </div>
              <div className='w-full flex flex-col'>
                <label className='text-base font-semibold text-black'>Date of birth</label>
                <input 
                  type="date" 
                  name="dateOfBirth" 
                  id="dob" 
                  className={`w-[80%] bg-gray-50 outline ${isPersonalFormClick && !personalInfo.fullName ? 'outline-red-400' : 'outline-gray-300'} text-gray-900 
                  text-sm rounded-lg focus:ring-blue-500 block p-2.5 mt-3`}
                  value={personalInfo.dateOfBirth}
                  onChange={changeHandler}
                />
                { isPersonalFormClick && !personalInfo.dateOfBirth ? <div className='w-full flex items-center mt-1 gap-1'> 
                    <span className=''>{infoRedIcon}</span>
                    <span className='h-full text-xs text-red-500'>Please fill in a complete birthday</span>
                </div>
                :
                <div className='w-full flex items-center mt-1 gap-1'> 
                    <span className=''>{infoWhiteIcon}</span>
                    <span className='h-full text-xs text-white'>Please fill in a complete birthday</span>
                </div>
                }
              </div>
            </div>
              <div className="w-full flex flex-col">
                <label className='text-base font-semibold text-black'>Select Gender</label>
                <select id="gender" value={personalInfo.gender} onChange={changeHandler}
                  name="gender" className={`bg-gray-50 outline  text-gray-900 
                text-sm rounded-lg focus:ring-blue-500  block w-[40%] p-2.5 mt-3 border-r-8 border-transparent ${isPersonalFormClick && !personalInfo.gender ? 'outline-red-400' : 'outline-gray-300'} `}>
                    <option value="">Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                { isPersonalFormClick && !personalInfo.gender ? <div className='w-full flex items-center mt-1 gap-1'> 
                    <span className=''>{infoRedIcon}</span>
                    <span className='h-full text-xs text-red-500'>Please select your gender</span>
                </div>
                :
                <div className='w-full flex items-center mt-1 gap-1'> 
                    <span className=''>{infoWhiteIcon}</span>
                    <span className='h-full text-xs text-white'>Please select your gender</span>
                </div>
                }
              </div>
          </div>
      </div>
      <div className="max-w-screen-md mx-auto mt-8 text-right">
        <Button onClick={clickHandler} type='button' className=' text-white' >Next</Button>
      </div>
    </>

  )
}

export default Personalinfo