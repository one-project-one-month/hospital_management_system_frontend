import NotFound from "@/components/NotFound/NotFound.jsx";
import Main from "../Layout/Main/Main.jsx";
import { Home } from "../Pages/Home/Home.jsx";
import Appointment from "@/Pages/Appointment/Appointment.jsx";
import AddAppointment from "@/Pages/Appointment/AddAppointment.jsx";
import Room from "@/Pages/Room/Room.jsx";
import Disease from "@/Pages/Disease/Disease.jsx";
import DoctorContainer from "@/Pages/Doctor/Doctor.jsx";
import DoctorSpecialist from "@/Pages/DoctorSpecialist/DoctorSpecialist.jsx";
import Pateint from "@/Pages/patient/Pateint.jsx";

export const routes = [
  {
    path: "/",
    Component: Main,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "doctor",
        children: [
          {
            index: true,
            Component: DoctorContainer,
          },
          {
            path: "doctorSpecialist",
            Component: DoctorSpecialist,
          },
        ],
      },
      {
        path: "patient",
        children: [
          {
            index: true,
            Component: Pateint,
          },
          {
            path: "medicalRecords",
            element: <h1>Medical Records</h1>,
          },
        ],
      },
      {
        path: "appointment",
        children: [
          {
            index: true,
            Component: Appointment,
          },
          {
            path: "/appointment/add",
            Component: AddAppointment,
          },
        ],
      },
      {
        path:"room",
        children:[
          {
            index:true,
            Component:Room
          },
          {
            path:'disease',
            Component:Disease
          }
        ]
      }
    ],
  },
];
