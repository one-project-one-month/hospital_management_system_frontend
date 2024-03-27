import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PatientInput from "@/components/AppointmentHeader/PatientInput";
import DoctorInput from "@/components/AppointmentHeader/DoctorInput";
import RoomInput from "@/components/AppointmentHeader/RoomInput";

const Addappointment = () => {
  const [isClose, setIsClose] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [isroom, setIsRoom] = useState(false);
  const [input, setInput] = useState("");
  const [doctorInput, setDoctorInput] = useState("");
  const [roomInput, setRoomInput] = useState("");
  const [todate, setToDate] = useState("");
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    patientId: "",
    doctorId: "",
    roomId: "",
    date: "",
    status: "",
  });

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleClick = () => {
    setIsClose(!isClose);
  };
  const handleRoom = () => {
    setIsRoom(!isroom);
  };
  useEffect(() => {
    const getPatient = async () => {
      const response = await fetch("http://localhost:3000/patient");
      const result = await response.json();
      setPatients(result);
    };
    getPatient();
  });
  useEffect(() => {
    const getDoctor = async () => {
      const response = await fetch("http://localhost:3000/Doctors");
      const result = await response.json();
      setDoctors(result);
    };
    getDoctor();
  });
  useEffect(() => {
    const getRoom = async () => {
      const response = await fetch("http://localhost:3000/Room");
      const result = await response.json();
      setRooms(result);
    };
    getRoom();
  });
  const handleChange = (e) => {
    setInput(e.target.value);
    setIsOpen(false);
    if (input === "") {
      setIsOpen(true);
    }
  };
  const handleDoctorChange = (e) => {
    setDoctorInput(e.target.value);
    setIsClose(false);
    if (doctorInput === "") {
      setIsClose(true);
    }
  };
  const handleRoomSearch = (e) => {
    setRoomInput(e.target.value);
    setIsRoom(false);
    if (roomInput === "") {
      setIsRoom(true);
    }
  };
  const handelOption = (name) => {
    setInput(name);
    setIsOpen(false);
  };
  const handelDoctorOption = (name) => {
    setDoctorInput(name);
    setIsClose(false);
  };
  const handleRoomInput = (No) => {
    setRoomInput(No);
    setIsRoom(false);
  };
  const handelClear = () => {
    setInput("");
    setIsOpen(false);
  };
  const handelDoctorClear = () => {
    setDoctorInput("");
    setIsClose(false);
  };
  const handleRoomClear = () => {
    setRoomInput("");
    setIsRoom(false)
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/users", userData)
      .then((res) => {
        console.log(res.data);
        navigate("/appointment");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <form
        className="flex justify-center items-center mt-8"
        onSubmit={handleSubmit}
      >
        <div className="border w-[90%] h-[100%] shadow-lg rounded-lg mb-4">
          <h2 className="text-center pt-2 text-3xl font-bold text-blue-300 mt-4">
            Made New Appointment
          </h2>
          <PatientInput patients={patients}  handelClear={handelClear} handelOption={handelOption} handleChange={handleChange} handleOpen={handleOpen} input={input} isOpen={isOpen}/>
          <DoctorInput doctors={doctors} handelDoctorClear={handelDoctorClear} handelDoctorOption={handelDoctorOption} handleDoctorChange={handleDoctorChange} isClose={isClose} handleClick={handleClick} doctorInput={doctorInput}/>
          <div className="w-[100%] h-[80px] px-4 mt-2 flex flex-col">
            <label className="text-xl font-bold text-red-400">Date</label>
            <input
              type="datetime-local"
              className="w-[100%] mt-2 border rounded-md h-[100%] px-4 text-black"
              value={todate}
              name="date"
              onChange={(e) => setToDate(e.target.value)}
            />
          </div>
          <RoomInput rooms={rooms} handleRoomClear={handleRoomClear} handleRoomInput={handleRoomInput} handleRoomSearch={handleRoomSearch} handleRoom={handleRoom} roomInput={roomInput}/>
          <div className="flex items-center justify-center m-4">
            <input
              type="submit"
              className="p-2 w-[30%] bg-[#1E88E5] text-white cursor-pointer text-xl font-semibold rounded-md"
              onClick={() =>
                setUserData({
                  ...userData,
                  patientId: input,
                  doctorId: doctorInput,
                  roomId: roomInput,
                  date: todate,
                })
              }
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default Addappointment;
