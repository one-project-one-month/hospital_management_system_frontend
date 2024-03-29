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
import { ToastContainer, toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ListOfPatients from './ListOfPatients';

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
  // const isResponseComplete = useSelector(state =>state.response.isResponseComplete)
  // console.log(isResponseComplete);

  const [combinedDatas,setCombinedDatas] = useState ({});
  const [datas,setDatas] = useState ([]);
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(()=>{
    if(isPersonalFormComplete && isContactFormComplete && isHealthProfileComplete && healthProfile.bloodType ) {
      setCombinedDatas({name:personalForm.name,gender : personalForm.gender,phoneNumber : contactForm.phoneNumber,email:contactForm.email,bloodType : healthProfile.bloodType,birthDate : isoBirthDate,address : contactForm.address})
    }
  },[,isContactFormComplete, isPersonalFormComplete,isHealthProfileComplete,healthProfile])

  const handleSubmit = async(e) => {
    e.preventDefault();
    dispatch(setIsHealthProfileClick(true));
    if (Object.keys(combinedDatas).length !== 0) {
      try {
        const response = await toast.promise(
          axios.post('https://hospital-management-system-backend-7fee.vercel.app/api/v1/patients', combinedDatas),
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

  useEffect(() => {
    const fetchData = async() => {
      setIsLoading(true)
      try {
        const {data:{data}} = await axios.get('https://hospital-management-system-backend-7fee.vercel.app/api/v1/patients');
        console.log(data);
        setDatas(data)
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
      setIsLoading(false);
    }
    fetchData();
  }, [response])

  // useEffect(()=>{
  //   document.body.style.overflow = "hidden";
  //   return () => {
  //     document.body.style.overflow='scroll'
  //   }
  // },[])

  return (
    <>
    {!! isLoading && <p>Loading...</p>}
    {!!datas && datas.length > 0  ? (
    <ListOfPatients />
    ) : !isLoading  &&  (
    <form onSubmit={handleSubmit} className='w-full h-full bg-blue-100 mx-auto px-[60px] py-[70px] '>
      <div className='bg-white w-full max-h-full rounded-xl p-8'>
        <div className='text-center font-bold text-xl text-black'>Patient Registration</div>

        <Steppers
          isPersonalFormClick={isPersonalFormClick}
          isPersonalFormComplete={isPersonalFormComplete}
          isContactFormClick={isContactFormClick}
          isContactFormComplete={isContactFormComplete}
          isMedicalRecordClick={isHealthProfileClick}
          isMedicalRecordComplete={isHealthProfileComplete}
          response={response}
        />

        {!isPersonalFormComplete && <Personalinfo />}
        
        {isPersonalFormClick && isPersonalFormComplete && !isContactFormComplete && !isHealthProfileComplete && <Contactinfo />}

        {isPersonalFormClick && isPersonalFormComplete && isContactFormClick && isContactFormComplete && <HealthProfile />}

        {isPersonalFormClick && isPersonalFormComplete && isContactFormClick && isContactFormComplete && (
          <div className="max-w-screen-md mx-auto mt-8 text-right">
            <Button type='submit' className='text-white'>Submit</Button>
          </div>
        )}
        <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
      </div>
    </form>
  )}
  </>
  )
}

export default Pateint