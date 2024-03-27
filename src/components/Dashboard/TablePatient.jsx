

const TablePatient = () => {
  return (
    <div>
        <h1 className="text-2xl px-6 mt-4 text-sky-400 py-2"> Patients</h1>
        <div className="h-[380px] overflow-y-scroll mx-6 shadow-green-200 shadow-md">
            <table className="border-collapse w-[100%]">
                <thead className="border text-center font-bold bg-[#3b82f6] text-white">
                    <tr>
                        <th className="px-6 py-3">PatientName</th>
                        <th className="px-6 py-3">AppointmentDate</th>
                        <th className="px-6 py-3">Token No</th>
                        <th className="px-6 py-3">Doctor Name</th>
                        <th className="px-6 py-3">Room No</th>
                        <th className="px-6 py-3">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border hover:bg-[#649CF7] text-center font-medium text-sm hover:text-white">
                        <td className="px-6 py-2">AungAung</td>
                        <td className="px-6 py-2">March 24 ,2024 3:00 PM</td>
                        <td className="px-6 py-2">11</td>
                        <td className="px-6 py-2">Kyaw Kyaw</td>
                        <td className="px-6 py-2">104</td>
                        <td className="px-6 py-2">Approved</td>
                    </tr>
                    <tr className="border hover:bg-gray-400 text-center font-medium text-sm">
                        <td className="px-6 py-2">AungAung</td>
                        <td className="px-6 py-2">March 24 ,2024 3:00 PM</td>
                        <td className="px-6 py-2">11</td>
                        <td className="px-6 py-2">Kyaw Kyaw</td>
                        <td className="px-6 py-2">104</td>
                        <td className="px-6 py-2">Approved</td>
                    </tr>
                    <tr className="border hover:bg-gray-400 text-center font-medium text-sm">
                        <td className="px-6 py-2">AungAung</td>
                        <td className="px-6 py-2">March 24 ,2024 3:00 PM</td>
                        <td className="px-6 py-2">11</td>
                        <td className="px-6 py-2">Kyaw Kyaw</td>
                        <td className="px-6 py-2">104</td>
                        <td className="px-6 py-2">Approved</td>
                    </tr>
                    <tr className="border hover:bg-gray-400 text-center font-medium text-sm">
                        <td className="px-6 py-2">AungAung</td>
                        <td className="px-6 py-2">March 24 ,2024 3:00 PM</td>
                        <td className="px-6 py-2">11</td>
                        <td className="px-6 py-2">Kyaw Kyaw</td>
                        <td className="px-6 py-2">104</td>
                        <td className="px-6 py-2">Approved</td>
                    </tr>
                    <tr className="border hover:bg-gray-400 text-center font-medium text-sm">
                        <td className="px-6 py-2">AungAung</td>
                        <td className="px-6 py-2">March 24 ,2024 3:00 PM</td>
                        <td className="px-6 py-2">11</td>
                        <td className="px-6 py-2">Kyaw Kyaw</td>
                        <td className="px-6 py-2">104</td>
                        <td className="px-6 py-2">Approved</td>
                    </tr>
                    <tr className="border hover:bg-gray-400 text-center font-medium text-sm">
                        <td className="px-6 py-2">AungAung</td>
                        <td className="px-6 py-2">March 24 ,2024 3:00 PM</td>
                        <td className="px-6 py-2">11</td>
                        <td className="px-6 py-2">Kyaw Kyaw</td>
                        <td className="px-6 py-2">104</td>
                        <td className="px-6 py-2">Approved</td>
                    </tr>
                    <tr className="border hover:bg-gray-400 text-center font-medium text-sm">
                        <td className="px-6 py-2">AungAung</td>
                        <td className="px-6 py-2">March 24 ,2024 3:00 PM</td>
                        <td className="px-6 py-2">11</td>
                        <td className="px-6 py-2">Kyaw Kyaw</td>
                        <td className="px-6 py-2">104</td>
                        <td className="px-6 py-2">Approved</td>
                    </tr>
                    <tr className="border hover:bg-gray-400 text-center font-medium text-sm">
                        <td className="px-6 py-2">AungAung</td>
                        <td className="px-6 py-2">March 24 ,2024 3:00 PM</td>
                        <td className="px-6 py-2">11</td>
                        <td className="px-6 py-2">Kyaw Kyaw</td>
                        <td className="px-6 py-2">104</td>
                        <td className="px-6 py-2">Approved</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default TablePatient