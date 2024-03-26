import NotFound from '@/components/NotFound/NotFound.jsx'
import Main from '../Layout/Main/Main.jsx'
import { Home } from '../Pages/Home/Home.jsx'
import Appointment from '@/Pages/Appointment/Appointment.jsx'
import AddAppointment from '@/Pages/Appointment/AddAppointment.jsx'
import Pateint from '@/features/patient/Pateint.jsx'
import Room from '@/Pages/Room/Room.jsx'
import Disease from '@/Pages/Disease/Disease.jsx'

export const routes = [
    {
        path: "/",
        Component: Main,
        errorElement: <NotFound/>,
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
                        element: <h1>Doctor List</h1>,
                    },
                    {
                        path: "doctorSpecialist",
                        element: <h1>Doctor Specialist</h1>,
                    },
                    {
                        path: "/Disease",
                        element: <Disease />,
                    }
                ]
            },
            {
                path: "patient",
                children: [
                    {
                        index: true,
                        Component: Pateint
                    },
                    {
                        path: "medicalRecords",
                        element: <h1>Medical Records</h1>,
                    },
                    {
                        path: "/Room",
                        element: <Room />,
                    }
                ]
            },
            {
                path: "appointment",
                children: [
                    {
                        index: true,
                        Component:Appointment
                    },
                    {
                        path:"/appointment/add",
                        Component:AddAppointment
                    }
                ]
            },
            
        ]
    },
]