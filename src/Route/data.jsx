import NotFound from '@/components/NotFound/NotFound.jsx'
import Main from '../Layout/Main/Main.jsx'
import { Home } from '../Pages/Home/Home.jsx'
import Pateint from '@/features/patient/Pateint.jsx'

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
                        element: <Pateint/>
                    },
                    {
                        path: "medicalRecords",
                        element: <h1>Medical Records</h1>,
                    }
                ]
            }
        ]
    },
]