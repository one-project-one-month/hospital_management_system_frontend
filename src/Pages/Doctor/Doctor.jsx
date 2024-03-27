
/* eslint-disable react/prop-types */
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Avatar } from "@radix-ui/react-avatar";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const sampleDoctorData = [
  {
    id: 1,
    name: "Dr. John Doe",
    position: "Cardiologist",
    start_duty: "08:00 AM",
    end_duty: "04:00 PM",
    phoneNumber: "+1234567890",
    image: "https://example.com/doctor1.jpg",
  },
  {
    id: 2,
    name: "Dr. Jane Smith",
    position: "Pediatrician",
    start_duty: "09:00 AM",
    end_duty: "05:00 PM",
    phoneNumber: "+0987654321",
    image: "https://example.com/doctor2.jpg",
  },
];

const DoctorCard = (props) => {
  const doctorName = props.doctorName;
  const doctorPosition = props.doctorPosition;
  const start_duty = props.startDuty;
  const end_duty = props.endDuty;
  const phoneNumber = props.phoneNumber;
  const image = "https://github.com/shadcn.png";
  return (
    <Card className="w-[350px] flex flex-col">
      <CardHeader className="text-center">
        <Avatar className="w-32 h-32 items-center justify-center m-auto">
          <AvatarImage
            src={image}
            alt={doctorName + " avatar"}
            className="rounded-full"
          />
          <AvatarFallback>Doctor</AvatarFallback>
        </Avatar>
        <CardTitle className="text-xl m-2">{doctorName}</CardTitle>
        <CardDescription>{doctorPosition}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="flex justify-between p-2">
          Phone: <span>{phoneNumber}</span>
        </p>
        <p className="flex justify-between p-2">
          Time:{" "}
          <span>
            {start_duty} - {end_duty}
          </span>
        </p>
      </CardContent>
    </Card>
  );
};

const DcotorsContainer = () => {
  const [doctors, setDoctors] = useState([]);

  const showSuccessToast = (message) => {
    toast.success(message, {
      position: "top-center",
      autoClose: 3000,
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
  const showFailToast = (message) => {
    toast.error(message, {
      position: "top-center",
      autoClose: 3000,
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

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const response = await axios.get(
    //       "https://hospital-management-system-backend-7fee.vercel.app/api/v1/doctor"
    //     );
    //     if (response.status === 200) {
    //       const data = await response.data;
    //       setDoctors(data);
    //       showSuccessToast("✅ Data fetched successfully");
    //     }
    //   } catch (error) {
    //     showFailToast("❌ Something went wrong");
    //     console.log(error);
    //   }
    // };
    // fetchData();
    setDoctors(sampleDoctorData);
  }, []);

  return (
    <>
      {doctors.length === 0 ? (
        <div className="text-center mt-4 text-2xl p-[45vh]">
          No doctors found.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {doctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              doctorName={doctor.name}
              doctorPosition={doctor.position}
              startDuty={doctor.start_duty}
              endDuty={doctor.end_duty}
              phoneNumber={doctor.phoneNumber}
              image={doctor.image}
            />
          ))}
        </div>
      )}
      <ToastContainer />
    </>
  );
};

export default DcotorsContainer;
