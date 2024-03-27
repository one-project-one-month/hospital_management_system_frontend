/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import Steppers from './Steppers'
import Personalinfo from './Personalinfo'
import HealthProfile from './HealthProfile'
import { useSelector } from 'react-redux';
import Contactinfo from './Contactinfo';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import {setIsHealthProfileClick} from '../../store/patient/healthProfile'
import { useDispatch } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import { ToastContainer, toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
<<<<<<< HEAD:src/features/patient/Pateint.jsx
=======
// eslint-disable-next-line no-unused-vars
import SuccessFull from './SuccessFull';
>>>>>>> upstream/main:src/Pages/patient/Pateint.jsx

const Pateint = () => {
  const isPersonalFormComplete = useSelector(state => state.form.isFormComplete);
  const isPersonalFormClick = useSelector(state => state.form.isClick);
  const personalForm = useSelector(state => state.form.personalInfo)
  const birthDate = useSelector(state => state.form.personalInfo.birthDate);
  const isoBirthDate = birthDate ? new Date(birthDate).toISOString() : '';
  const isContactFormComplete = useSelector(state => state.contact.isFormComplete);
  const isContactFormClick = useSelector(state => state.contact.isClick);
  const contactForm = useSelector(state => state.contact.contactInfo);
  const isHealthProfileComplete = useSelector(state => state.healthProfile.isFormComplete);
  const isHealthProfileClick = useSelector(state => state.healthProfile.isClick);
  const healthProfile = useSelector(state => state.healthProfile.healthProfileInfo)
  const [response, setResponse] = useState(false)

  const [combinedDatas,setCombinedDatas] = useState ({});

  const dispatch = useDispatch();

  useEffect(()=>{
    if(isPersonalFormComplete && isContactFormComplete && isHealthProfileComplete && healthProfile.bloodType ) {
      setCombinedDatas({name:personalForm.name,gender : personalForm.gender,phoneNumber : contactForm.phoneNumber,email:contactForm.email,bloodType : healthProfile.bloodType,birthDate : isoBirthDate,address : contactForm.address})
    }
<<<<<<< HEAD:src/features/patient/Pateint.jsx
  },[,isContactFormComplete, isPersonalFormComplete,isHealthProfileComplete,healthProfile])
=======
  // eslint-disable-next-line no-sparse-arrays
  },[,isContactFormComplete, isPersonalFormComplete,isMedicalRecordComplete,medicalRecord])

  const showSuccessToast = (message) => {
    toast.success(message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        newestOnTop: false,
        closeOnClick: true,
        rtl: false,
        pauseOnFocusLoss: true,
        draggable: true,
        pauseOnHover: true,
        theme: "light",
    });
};
>>>>>>> upstream/main:src/Pages/patient/Pateint.jsx

  const handleSubmit = async(e) => {
    e.preventDefault();
    dispatch(setIsHealthProfileClick(true));
    if (Object.keys(combinedDatas).length !== 0) {
      try {
        const response = await toast.promise(
          axios.post('http://localhost:3001/patients', combinedDatas),
          {
            pending: 'Adding in progress,please wait...',
            success: 'Successfully added a pateint',
            error: 'Server error'
          }
        );
        if(response.status >= 200 && response.status < 300) {
         setResponse(true)
        }
      }
      catch (error) {
        console.log(error);
      }
    } 
  }

<<<<<<< HEAD:src/features/patient/Pateint.jsx
  useEffect(()=>{
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow='scroll'
    }
  },[])
=======
  return (
    <form onSubmit={handleSubmit} className='w-[100%] h-[91%] bg-blue-100 px-[100px] py-[40px]'>
      <div className='bg-white w-full h-full rounded-xl p-8'>
        <div className='text-center font-bold text-xl'>Patient Registration</div>
        {/* <div className='text-center text-red-400 mt-2 text-sm'>Please fill in patients' informations</div> */}
>>>>>>> upstream/main:src/Pages/patient/Pateint.jsx

  return (
    <form onSubmit={handleSubmit} className='w-full h-full bg-blue-100 mx-auto px-[60px] py-[70px] '>
      <div className='bg-white w-full max-h-full rounded-xl p-8'>
        <div className='text-center font-bold text-xl text-black'>Patient Registration</div>

        <Steppers isPersonalFormClick={isPersonalFormClick} isPersonalFormComplete={isPersonalFormComplete} isContactFormClick={isContactFormClick} isContactFormComplete={isContactFormComplete} isMedicalRecordClick={isHealthProfileClick} isMedicalRecordComplete={isHealthProfileComplete}
        response={response}/>

        { !isPersonalFormComplete && <Personalinfo/> }

        {isPersonalFormClick && isPersonalFormComplete && !isContactFormComplete && !isHealthProfileComplete && <Contactinfo/> }

        {isPersonalFormClick && isPersonalFormComplete && isContactFormClick && isContactFormComplete && <HealthProfile/>}

        {isPersonalFormClick && isPersonalFormComplete && isContactFormClick && isContactFormComplete && <div className="max-w-screen-md mx-auto mt-8 text-right">
          <Button type='submit' className='text-white'>Submit</Button>
        </div>
        }
        <ToastContainer 
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition: Bounce />
      </div>
    </form>
  )
}

export default Pateint