import { Home } from '../Pages/Home/Home.jsx'
import { Room } from '../Pages/Room/Room.jsx'
import { Disease } from '../Pages/Disease/Disease.jsx'

export const routes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/Room",
        element: <Room />
    },
    {
        path: "/Disease",
        element: <Disease />
    }
]