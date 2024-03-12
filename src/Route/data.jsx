import { Home } from '../Pages/Home/Home.jsx'
import {SignUp} from "../Pages/SignUp/SignUp.jsx";

export const routes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/signup",
        element: <SignUp />
    }
]