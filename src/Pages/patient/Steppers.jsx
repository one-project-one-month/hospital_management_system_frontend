import React from 'react'

  const Steppers = ({isPersonalFormClick,isPersonalFormComplete,isContactFormClick,isContactFormComplete,   isMedicalRecordClick,isMedicalRecordComplete,response}) => {

  return (
    <div className="flex items-start max-w-screen-md mx-auto mt-8">
          <div className="w-full">
            <div className="flex items-center w-full">
              <div className={`w-8 h-8 shrink-0 mx-[-1px] ${isPersonalFormClick && isPersonalFormComplete  ? `bg-blue-600` :`bg-gray-300`} p-1.5 flex items-center justify-center rounded-full`}>
                <span className="text-base text-white font-bold">1</span>
              </div>
              <div className={`w-full h-1 mx-4 rounded-lg ${isPersonalFormClick && isPersonalFormComplete ? `bg-blue-600` : `bg-gray-300`}`}></div>
            </div>
            <div className="mt-2 mr-4">
              <h6 className="text-base font-semibold text-blue-500">Personal Info</h6>
              <p className="text-xs text-gray-400">{isPersonalFormClick && isPersonalFormComplete ? `Completed` : `Pending`}</p>
            </div>
          </div>
          <div className="w-full">
            <div className="flex items-center w-full">
              <div className={`w-8 h-8 shrink-0 mx-[-1px] ${isContactFormClick && isContactFormComplete  ? `bg-blue-600` :`bg-gray-300`} p-1.5 flex items-center justify-center rounded-full`}>
                <span className="text-base text-white font-bold">2</span>
              </div>
              <div className={`w-full h-1 mx-4 rounded-lg ${isContactFormClick && isContactFormComplete  ? `bg-blue-600` :`bg-gray-300`}`}></div>
            </div>
            <div className="mt-2 mr-4">
              <h6 className="text-base font-semibold text-blue-500">Contact Info</h6>
              <p className="text-xs text-gray-400">{isContactFormClick && isContactFormComplete ? `Completed` : `Pending`}</p>
            </div>
          </div>
          <div className="w-[37%]">
            <div className="flex items-center">
              <div className={`w-8 h-8 shrink-0 mx-[-1px] ${isMedicalRecordClick && isMedicalRecordComplete && response? `bg-blue-600` :`bg-gray-300`} p-1.5 flex items-center justify-center rounded-full`}>
                <span className="text-base text-white font-bold">3</span>
              </div>
            </div>
            <div className="mt-2">
              <h6 className="text-base font-semibold text-blue-500">Health Profile</h6>
              <p className="text-xs text-gray-400">{isMedicalRecordClick && isMedicalRecordComplete && response ? `Completed` : `Pending`}</p>
            </div>
          </div>
    </div>
  )
}

export default Steppers