/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import axios from "axios";
import moment from "moment";
import { MdDelete, MdEdit } from "react-icons/md";

const Table = ({filterData}) => {

  const url = "https://hospital-management-system-backend.vercel.app/api/v1/appointments";

  const handleCancel = (Id) => {
  
    axios.put(`${url}/${Id}`, {
      ...Id, Status: "Cancelled" , IsCancel : true
    })
    .then(res => {
      console.log(res.data);
    })
    .catch(error => {
      console.error("Error updating appointment status:", error);
    });
  };
  const handleClick = (Id)=>{
    axios.put(`${url}/${Id}`,{
      ...Id,Status:"Completed"
    })
  }
  const handelDelete = (Id) =>{
    const confirm = window.confirm('Do You want to delete ?')
    if(confirm){
      axios.delete(`${url}/${Id}`)
      .then(res=>{
        console.log(res.data)
      })
      .catch(err =>{
        console.log(err.message)
      })
    }
    }
  return (
    <>
      <table className="table border-collapse w-[90%] mx-[auto] shadow-green-200 shadow-md ">
        <thead className="border text-center font-bold bg-[#3b82f6] text-white">
          <tr>
            <th className="px-6 py-3">Patient Name</th>
            <th className="px-6 py-3">Appointment Date</th>
            <th className="px-6 py-3">Token No</th>
            <th className="px-6 py-3">Doctor Name</th>
            <th className="px-6 py-3">Room No</th>
            <th className="px-6 py-3">Status</th>
            <th>Is Cancel</th>
          </tr>
        </thead>
        <tbody>
          {
            filterData
              .map((d) => {
                return (
                  <tr
                    className="border hover:bg-[#649CF7] text-center font-medium text-sm hover:text-white"
                    key={d.Id}
                  >
                    <td className="px-6 py-2">{d.Patient.Name}</td>
                    <td className="px-6 py-2">
                      {moment(d.AppointmentDate).format("LLL")}
                    </td>
                    <td className="px-6 py-2">{d.Id}</td>
                    <td className="px-6 py-2">{d.Doctor.DoctorName}</td>
                    <td className="px-6 py-2">{d.Room.Name}</td>
                    <td className={`${d.IsCancel ? 'text-red-400' : d.Status === 'Pending' ? 'text-yellow-400' : 'text-green-400'} px-6 py-2`}>{d.Status}</td>
                    <td className="px-6 py-2 flex items-center justify-center">
                      <input
                        type="checkbox"
                        className="cursor-pointer"
                        checked={d.IsCancel}
                        onChange={() => handleCancel(d.Id)}
                      />
                      <MdEdit size={20}  className="text-blue-600 mx-2 cursor-pointer" onClick={()=>handleClick(d.Id)}/>
                      <MdDelete
                        className="text-red-400 mx-2 cursor-pointer"
                        size={20}
                        onClick={() => handelDelete(d.Id)}
                      />
                    </td>
                  </tr>
                );
              })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
