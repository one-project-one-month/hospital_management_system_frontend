import React from 'react'
import Steppers from './Steppers'
import Personalinfo from './Personalinfo'
import MedicalRecords from './MedicalRecords'
import { useSelector } from 'react-redux';
import Contactinfo from './Contactinfo';

const Pateint = () => {
  const isPersonalFormComplete = useSelector(state => state.form.isFormComplete);
  const isPersonalFormClick = useSelector(state => state.form.isClick);
  const isContactFormComplete = useSelector(state => state.contact.isFormComplete);
  const isContactFormClick = useSelector(state => state.contact.isClick);
  const isMedicalRecordComplete = useSelector(state => state.medicalRecord.isFormComplete);
  const isMedicalRecordClick = useSelector(state => state.medicalRecord.isClick);

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit} className='w-full h-screen bg-blue-100 px-[100px] py-[40px]'>
      <div className='bg-white w-full h-full rounded-xl p-8'>
        <div className='text-center font-bold text-xl'>Patient Registration</div>
        {/* <div className='text-center text-red-400 mt-2 text-sm'>Please fill in patients' informations</div> */}

        <Steppers isPersonalFormClick={isPersonalFormClick} isPersonalFormComplete={isPersonalFormComplete} isContactFormClick={isContactFormClick} isContactFormComplete={isContactFormComplete} isMedicalRecordClick={isMedicalRecordClick} isMedicalRecordComplete={isMedicalRecordComplete}/>

        { !isPersonalFormComplete && <Personalinfo/> }

        {isPersonalFormClick && isPersonalFormComplete && !isContactFormComplete && !isMedicalRecordComplete && <Contactinfo/> }

        {isPersonalFormClick && isPersonalFormComplete && isContactFormClick && isContactFormComplete && !isMedicalRecordComplete && <MedicalRecords/>}
      </div>
    </form>
  )
}

export default Pateint