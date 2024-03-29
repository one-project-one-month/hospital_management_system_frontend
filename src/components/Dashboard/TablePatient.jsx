import axios from "axios"
import { useEffect, useState } from "react"
import moment from "moment";


const TablePatient = () => {
    const [patientData , setPatientData] = useState([])
    const getData = async()=>{
        await axios.get('https://hospital-management-system-backend.vercel.app/api/v1/patients')
        .then(res =>{
            console.log(res.data.data)
            setPatientData(res.data.data)
        })
        .catch(err =>{
            console.log(err.message)
        })
    }
    useEffect(()=>{
        getData();
    },[])
  return (
    <div>
        <h1 className="text-2xl px-6 mt-4 text-sky-400 py-2"> Patients</h1>
        <div className="h-[380px] overflow-y-scroll mx-6 shadow-green-200 shadow-md">
            <table className="border-collapse w-[100%]">
                <thead className="border text-center font-bold bg-[#3b82f6] text-white">
                    <tr>
                        <th className="px-6 py-3">Name</th>
                        <th className="px-6 py-3">Email</th>
                        <th className="px-6 py-3">Gender</th>
                        <th className="px-6 py-3">Ph No</th>
                        <th className="px-6 py-3">BirthDate</th>
                        <th className="px-6 py-3">Blood Type</th>
                        <th className="px-6 py-3">Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        patientData.map((p)=>{
                            return(
                                <tr className="border hover:bg-[#649CF7] text-center font-medium text-sm hover:text-white" key={p.Id}>
                                <td className="px-6 py-2">{p.Name}</td>
                                <td className="px-6 py-2">{p.Email}</td>
                                <td className="px-6 py-2">{p.Gender}</td>
                                <td className="px-6 py-2">{p.PhoneNumber}</td>
                                <td className="px-6 py-2">{moment(p.BirthDate).format("LLL")}</td>
                                <td className="px-6 py-2">{p.BloodType}</td>
                                <td className="px-6 py-2">{p.Address}</td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default TablePatient