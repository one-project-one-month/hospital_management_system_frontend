import axios from "axios";
import { useEffect, useState } from "react";
import moment from "moment";


const TableAppointment = () => {

    const [data , setData] = useState([]);



    const getData = async() =>{
        await axios.get('https://hospital-management-system-backend.vercel.app/api/v1/appointments')
        .then(res =>{
            setData(res.data.data)
        })
        .catch(err=>{
            console.log(err.message)
        })
    }
    useEffect(()=>{
        getData();
    },[])
  return (
    <>
    <div>
        <h1 className="text-2xl px-6 mt-4 text-sky-400 py-2"> Appointments</h1>
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
                {
                    data.map((d)=>{
                        return (
                            <tr className="border hover:bg-gray-400 text-center font-medium text-sm" key={d.Id}>
                            <td className="px-6 py-2">{d.Patient.Name}</td>
                            <td className="px-6 py-2">{moment(d.AppointmentDate).format("LLL")}</td>
                            <td className="px-6 py-2">11</td>
                            <td className="px-6 py-2">{d.Doctor.DoctorName}</td>
                            <td className="px-6 py-2">{d.Room.Name}</td>
                            <td className={`${d.IsCancel ? 'text-red-400' : d.Status === 'Pending' ? 'text-yellow-400' : 'text-green-400'} px-6 py-2`}>{d.Status}</td>
                        </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
    </div>
    </>
  )
}

export default TableAppointment