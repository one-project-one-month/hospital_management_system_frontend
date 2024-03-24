import NotFound from '@/components/NotFound/NotFound.jsx'
import Main from '../Layout/Main/Main.jsx'
import { Home } from '../Pages/Home/Home.jsx'
import Appointment from '@/Pages/Appointment/Appointment.jsx'
import AddAppointment from '@/Pages/Appointment/AddAppointment.jsx'

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
                    }
                ]
            },
            {
                path: "patient",
                children: [
                    {
                        index: true,
                        element: <h1>Patient List</h1>
                    },
                    {
                        path: "medicalRecords",
                        element: <h1>Medical Records</h1>,
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
            }
        ]
    },
]