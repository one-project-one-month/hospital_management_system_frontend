import React from 'react'
import { useState } from 'react';
import Steppers from './Steppers';
import { Button } from '@/components/ui/button';
import { useDispatch, useSelector } from 'react-redux';
import { setContactInfo, setIsContactFormComplete, setIsContactFormClick } from '../../store/contactSlice';

const Contactinfo = () => {
  const contactInfo = useSelector(state => state.contact.contactInfo);
  const isContactFormClick = useSelector(state => state.contact.isClick);
  const dispatch = useDispatch();
  
  const changeHandler = (e) => {
    const { name, value } = e.target;
    dispatch(setContactInfo({ name, value }));
  }
  
  const clickHandler = () => {
    dispatch(setIsContactFormClick(true));
    // Check if contact info form is complete
    const contactInfoFormComplete = Object.keys(contactInfo).every(key => contactInfo[key]);
    dispatch(setIsContactFormComplete(contactInfoFormComplete));
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
          <h4 className="text-lg font-bold">Contact info</h4>
          <div className='flex flex-col items-center gap-6 w-full mx-auto mt-3 p-3'>
            <div className='flex w-full items-center'>
              <div className='w-full flex flex-col'>
                <label className='text-base font-semibold'>Phone number</label>
                <input 
                  type="text" 
                  name="phoneNumber" 
                  id="phoneNumber" 
                  className={`w-[80%] bg-gray-50 outline ${isContactFormClick && !contactInfo.phoneNumber ? 'outline-red-400' : 'outline-gray-300'} text-gray-900 
                  text-sm rounded-lg focus:ring-blue-500 block p-2.5 mt-3`}
                  value={contactInfo.phoneNumber}
                  onChange={changeHandler}
                  placeholder='Enter your phone number'
                />
                { isContactFormClick && !contactInfo.phoneNumber ? <div className='w-full flex items-center mt-1 gap-1'> 
                    <span className=''>{infoRedIcon}</span>
                    <span className='h-full text-xs text-red-500'>Please fill in your phone number</span>
                </div>
                :
                <div className='w-full flex items-center mt-1 gap-1'> 
                    <span className=''>{infoWhiteIcon}</span>
                    <span className='h-full text-xs text-white'>Please fill in a full name</span>
                </div>
                }
              </div>
              <div className='w-full flex flex-col'>
                <label className='text-base font-semibold'>Email</label>
                <input 
                  type="text" 
                  name="email" 
                  id="email" 
                  className={`w-[80%] bg-gray-50 outline ${isContactFormClick && !contactInfo.email ? 'outline-red-400' : 'outline-gray-300'} text-gray-900 
                  text-sm rounded-lg focus:ring-blue-500 block p-2.5 mt-3`}
                  value={contactInfo.email}
                  onChange={changeHandler}
                  placeholder='Enter your email'
                />
                { isContactFormClick && !contactInfo.email ? <div className='w-full flex items-center mt-1 gap-1'> 
                    <span className=''>{infoRedIcon}</span>
                    <span className='h-full text-xs text-red-500'>Please fill in your email</span>
                </div>
                :
                <div className='w-full flex items-center mt-1 gap-1'> 
                    <span className=''>{infoWhiteIcon}</span>
                    <span className='h-full text-xs text-white'>Please fill in your email</span>
                </div>
                }
              </div>
            </div>
              <div className="w-full flex flex-col">
                <label className='text-base font-semibold'>Address</label>
                <input 
                  type="text" 
                  name="address" 
                  id="address" 
                  className={`w-[40%] bg-gray-50 outline ${isContactFormClick && !contactInfo.address ? 'outline-red-400' : 'outline-gray-300'} text-gray-900 
                  text-sm rounded-lg focus:ring-blue-500 block p-2.5 mt-3`}
                  value={contactInfo.address}
                  onChange={changeHandler}
                  placeholder='Enter your address'
                />
                { isContactFormClick && !contactInfo.address ? <div className='w-full flex items-center mt-1 gap-1'> 
                    <span className=''>{infoRedIcon}</span>
                    <span className='h-full text-xs text-red-500'>Please fill in your address</span>
                </div>
                :
                <div className='w-full flex items-center mt-1 gap-1'> 
                    <span className=''>{infoWhiteIcon}</span>
                    <span className='h-full text-xs text-white'>Please fill in your address</span>
                </div>
                }
              </div>
          </div>
        </div>

        <div className="max-w-screen-md mx-auto mt-8 text-right">
            <Button onClick={clickHandler} >Next</Button>
        </div>
    </>
  )
}

export default Contactinfo