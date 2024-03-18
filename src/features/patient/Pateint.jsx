import React from 'react'
import Steppers from './Steppers'
import Personalinfo from './Personalinfo'
import MedicalRecords from './MedicalRecords'
import { useSelector } from 'react-redux';
import Contactinfo from './Contactinfo';

const Pateint = () => {
//   const { isPersonalClick,personalForm,isContactClick,contactForm } = useSelector(state => state.info);
//   console.log(isContactClick)
//   console.log(personalForm)

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit} className='w-full h-screen bg-blue-100 px-[100px] py-[40px]'>
      <div className='bg-white w-full h-full rounded-xl p-8'>
        <div className='text-center font-bold text-xl'>Patient Registration</div>
        <div className='text-center text-red-400 mt-2 text-sm'>Please fill in patients' informations</div>
        {/* <Steppers isPersonalClick={isPersonalClick} isPersonalFormComplete={personalForm} isContactClick={isContactClick} isContactFormComplete={contactForm} />
        {(!personalForm || !isPersonalClick.isClick) && <Personalinfo/>} */}
        {/* {isPersonalClick && personalForm && <Contactinfo/> } */}
        {/* <MedicalRecords/> */}
        {/* <Personalinfo/> */}
        <Contactinfo/> 
      </div>
    </form>
  )
}

export default Pateint