import React from 'react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

const Patient = () => {
  const [personalInfo, setPersonalInfo] = useState({
    fullName :'',
    dateOfBirth : '',
    gender : ''
  });
  const [isFormComplete,setIsFormComplete] = useState (false);

  const [isClick,setIsClick] = useState (false);

  const changeHandler = (e) => {
    const {name,value} = e.target;
    setPersonalInfo((prevInfo) => ({...prevInfo,[name] : value } ))
  }
  
  const clickHandler = () => {
        setIsClick(true)
        const formComplete = Object.keys(personalInfo).every(key => personalInfo[key]);
        setIsFormComplete(formComplete)
  }

  const infoRedIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-4 h-4 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
  </svg> ;
  const infoWhiteIcon =< svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-4 h-4 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
  </svg> ;

  console.log(!!personalInfo.dateOfBirth);

  return (
    <div className='w-full h-screen bg-blue-100 px-[100px] py-[40px]'>
      <div className='bg-white w-full h-full rounded-xl p-8'>
        <div className='text-center font-bold text-xl'>Patient Registration</div>
        <div className='text-center text-red-400 mt-2 text-sm'>Please fill in patients' informations</div>
        <div className="flex items-start max-w-screen-md mx-auto mt-8">
          <div className="w-full">
            <div className="flex items-center w-full">
              <div className={`w-8 h-8 shrink-0 mx-[-1px] ${isClick && isFormComplete  ? `bg-blue-600` :`bg-gray-300`} p-1.5 flex items-center justify-center rounded-full`}>
                <span className="text-base text-white font-bold">1</span>
              </div>
              <div className={`w-full h-1 mx-4 rounded-lg ${isClick && isFormComplete ? `bg-blue-600` : `bg-gray-300`}`}></div>
            </div>
            <div className="mt-2 mr-4">
              <h6 className="text-base font-semibold text-blue-500">Personal Info</h6>
              <p className="text-xs text-gray-400">{isClick && isFormComplete ? `Completed` : `Pending`}</p>
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
        <div className="max-w-screen-lg mx-auto mt-6 ">
          <h4 className="text-lg font-bold">Personal Info</h4>
          <div className='flex flex-col items-center gap-6 w-full mx-auto mt-3 p-3'>
            <div className='flex w-full items-center'>
              <div className='w-full flex flex-col'>
                <label className='text-base font-semibold'>Full name</label>
                <input 
                  type="text" 
                  name="fullName" 
                  id="fullName" 
                  className={`w-[80%] bg-gray-50 outline ${isClick && !personalInfo.fullName ? 'outline-red-400' : 'outline-gray-300'} text-gray-900 
                  text-sm rounded-lg focus:ring-blue-500 block p-2.5 mt-3`}
                  value={personalInfo.fullName}
                  onChange={changeHandler}
                  placeholder='Enter full name'
                />
                { isClick && !personalInfo.fullName ? <div className='w-full flex items-center mt-1 gap-1'> 
                    <span className=''>{infoRedIcon}</span>
                    <span className='h-full text-xs text-red-500'>Please fill in a full name</span>
                </div>
                :
                <div className='w-full flex items-center mt-1 gap-1'> 
                    <span className=''>{infoWhiteIcon}</span>
                    <span className='h-full text-xs text-white'>Please fill in a full name</span>
                </div>
                }
              </div>
              <div className='w-full flex flex-col'>
                <label className='text-base font-semibold'>Date of birth</label>
                <input 
                  type="date" 
                  name="dateOfBirth" 
                  id="dob" 
                  className={`w-[80%] bg-gray-50 outline ${isClick && !personalInfo.fullName ? 'outline-red-400' : 'outline-gray-300'} text-gray-900 
                  text-sm rounded-lg focus:ring-blue-500 block p-2.5 mt-3`}
                  value={personalInfo.dateOfBirth}
                  onChange={changeHandler}
                />
                { isClick && !personalInfo.dateOfBirth ? <div className='w-full flex items-center mt-1 gap-1'> 
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
                <label className='text-base font-semibold'>Select Gender</label>
                <select id="gender" value={personalInfo.gender} onChange={changeHandler}
                  name="gender" className={`bg-gray-50 outline  text-gray-900 
                text-sm rounded-lg focus:ring-blue-500  block w-[40%] p-2.5 mt-3 border-r-8 border-transparent ${isClick && !personalInfo.fullName ? 'outline-red-400' : 'outline-gray-300'} `}>
                    <option value="">Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                { isClick && !personalInfo.gender ? <div className='w-full flex items-center mt-1 gap-1'> 
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
            <Button onClick={clickHandler} >Next</Button>
        </div>
      </div>
    </div>

  )
}

export default Patient