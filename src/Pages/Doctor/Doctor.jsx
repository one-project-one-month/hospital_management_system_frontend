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
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DoctorCard = (props) => {
  let data = props.props;
  const doctorName = data.DoctorName;
  const doctorPosition = data?.Specialist?.Name;
  const start_duty = data.StartDuty;
  const end_duty = data.EndDuty;
  const phoneNumber = data.MobileNumber;
  const image = "https://github.com/shadcn.png";
  return (
    <Card className="w-[250px] flex flex-col shadow-md shadow-green-400">
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
        <p className="flex justify-between">
          Time:{" "}
          <span>
            {start_duty}AM - {end_duty}PM
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
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://hospital-management-system-backend.vercel.app/api/v1/doctors"
        );
        if (response.status === 200) {
          const data = await response.data.data;

          showSuccessToast("✅ Data fetched successfully");
          return data;
        }
      } catch (error) {
        showFailToast("❌ Something went wrong");
        console.log(error);
        return [];
      }
    };
    fetchData().then((data) => {
      setDoctors(data);
    });
  }, []);

  return (
    <>
      {doctors.length === 0 ? (
        <div className="text-center mt-4 text-2xl p-[45vh]">
          No doctors found.
        </div>
      ) : (
        <div className="m-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.Id} props={doctor} />
          ))}
        </div>
      )}
      <ToastContainer />
    </>
  );
};

export default DcotorsContainer;
