import React from 'react'
import Steppers from './Steppers'
import Personalinfo from './Personalinfo'
import MedicalRecords from './MedicalRecords'
import { useSelector } from 'react-redux';
import Contactinfo from './Contactinfo';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import {setIsMedicalRecordClick} from '../../store/medicalRecordSlice'
import { useDispatch } from 'react-redux';
import { ToastContainer, toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SuccessFull from './SuccessFull';

const Pateint = () => {
  const isPersonalFormComplete = useSelector(state => state.form.isFormComplete);
  const isPersonalFormClick = useSelector(state => state.form.isClick);
  const personalForm = useSelector(state => state.form.personalInfo)
  const isContactFormComplete = useSelector(state => state.contact.isFormComplete);
  const isContactFormClick = useSelector(state => state.contact.isClick);
  const contactForm = useSelector(state => state.contact.contactInfo);
  const isMedicalRecordComplete = useSelector(state => state.medicalRecord.isFormComplete);
  const isMedicalRecordClick = useSelector(state => state.medicalRecord.isClick);
  const medicalRecord = useSelector(state => state.medicalRecord.medicalRecordInfo)
  const [response, setResponse] = useState(false)

  const [combinedDatas,setCombinedDatas] = useState ({});
  // console.log(isMedicalRecordClick)
  // console.log(medicalRecord.bloodType);
  const dispatch = useDispatch();

  useEffect(()=>{
    if(isPersonalFormComplete && isContactFormComplete && isMedicalRecordComplete && medicalRecord.bloodType ) {
      setCombinedDatas({...personalForm,...contactForm,...medicalRecord})
    }
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

  const handleSubmit = async(e) => {
    console.log('gh');
    e.preventDefault();
    dispatch(setIsMedicalRecordClick(true));
    if (Object.keys(combinedDatas).length !== 0) {
      try {
        const res = await axios.post('http://localhost:3001/patients', combinedDatas);
        if(res.status === 201) {
          showSuccessToast('Successfully added a pateint')
          setResponse(true);
        }
      } catch (error) {
        console.log(error);
      }
    } 
  }

  return (
    <form onSubmit={handleSubmit} className='w-full h-screen bg-blue-100 px-[100px] py-[40px]'>
      <div className='bg-white w-full h-full rounded-xl p-8'>
        <div className='text-center font-bold text-xl'>Patient Registration</div>
        {/* <div className='text-center text-red-400 mt-2 text-sm'>Please fill in patients' informations</div> */}

        <Steppers isPersonalFormClick={isPersonalFormClick} isPersonalFormComplete={isPersonalFormComplete} isContactFormClick={isContactFormClick} isContactFormComplete={isContactFormComplete} isMedicalRecordClick={isMedicalRecordClick} isMedicalRecordComplete={isMedicalRecordComplete}
        response={response}/>

        { !isPersonalFormComplete && <Personalinfo/> }

        {isPersonalFormClick && isPersonalFormComplete && !isContactFormComplete && !isMedicalRecordComplete && <Contactinfo/> }

        {isPersonalFormClick && isPersonalFormComplete && isContactFormClick && isContactFormComplete && <MedicalRecords/>}

        {isPersonalFormClick && isPersonalFormComplete && isContactFormClick && isContactFormComplete && <div className="max-w-screen-md mx-auto mt-8 text-right">
          <Button type='submit'>Submit</Button>
        </div>
        }
        <ToastContainer/>
        {/* <SuccessFull/> */}
      </div>
    </form>
  )
}

export default Pateint