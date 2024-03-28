import { useEffect, useState } from "react";
import PatientInput from "@/components/AppointmentHeader/PatientInput";
import DoctorInput from "@/components/AppointmentHeader/DoctorInput";
import RoomInput from "@/components/AppointmentHeader/RoomInput";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Addappointment = () => {
  const [patients, setPatients] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [userData, setUserData] = useState({
    DoctorId: "",
    PatientId: "",
    AppointmentDate: "",
    RoomId: ""
  });

  const navigate = useNavigate();
  useEffect(() => {
    const getPatient = async () => {
      const response = await fetch("https://hospital-management-system-backend.vercel.app/api/v1/patients");
      const result = await response.json();
      console.log(result.data)
      setPatients(result.data);
    };
    getPatient();
  }, []);

  useEffect(() => {
    const getDoctor = async () => {
      const response = await fetch("https://hospital-management-system-backend.vercel.app/api/v1/doctors");
      const result = await response.json();
      setDoctors(result.data);
    };
    getDoctor();
  },[]);

  useEffect(() => {
    const getRoom = async () => {
      const response = await fetch("https://hospital-management-system-backend.vercel.app/api/v1/rooms");
      const result = await response.json();
      setRooms(result.data);
    };
    getRoom();
  },[]);

  const showFailToast = (message) => {
    toast.error(message, {
      position: "top-center",
      autoClose: 5000,
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
  const handleDate = (e) =>{
    const pointDate = e.target.value;
    const date = new Date(pointDate);
    const newDate = date.toISOString();
    setUserData({
      ...userData, AppointmentDate: newDate , Status:"Pending" , IsCancel : false
    })
  }
    
  const handleSubmit =  (e) => {
  e.preventDefault();
  console.log(userData)
    axios.post('https://hospital-management-system-backend.vercel.app/api/v1/appointments', userData)
    .then(res=>{
      console.log(res.data)
      navigate('/appointment')

    })
    .catch(err=>{
      console.log(err.message)
      showFailToast('can not find Name')
    })
};
  return (
    <div>
      <form
        className="flex justify-center items-center mt-8"
        onSubmit={handleSubmit}
      >
        <div className="border w-[80%] h-[100%] shadow-lg rounded-lg mb-4">
          <h2 className="text-center pt-2 text-3xl font-bold text-blue-300 mt-4">
            Made New Appointment
          </h2>
          <PatientInput userData={userData} setUserData={setUserData} patients={patients}/>
          <DoctorInput userData={userData} setUserData={setUserData} doctors={doctors}/>
          <div className="w-[100%] h-[80px] px-4 flex flex-col mt-6">
            <label className="text-xl font-bold text-red-400">Date</label>
            <input
              type="datetime-local"
              className="w-[100%] mt-2 border rounded-md h-[100%] px-4 text-black"
              name="date"
              onChange= {handleDate}
            />
          </div>
          <RoomInput userData={userData}  setUserData={setUserData} rooms={rooms}/>
          <div className="flex items-center justify-center m-4">
            <input
              type="submit"
              className="p-2 w-[30%] bg-[#1E88E5] text-white cursor-pointer text-xl font-semibold rounded-md"
            />
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Addappointment;
