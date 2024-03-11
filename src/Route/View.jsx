import { routes } from "./data.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(routes)

export const View = () => {
    return (
        <RouterProvider router={router} />
    )
}