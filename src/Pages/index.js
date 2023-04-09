import IndexLayout from "../Layouts/IndexLayout";
import MainLayout from "../Layouts/MainLayout";
import { createBrowserRouter } from "react-router-dom";
import Destinations from "./Destinations/Destinations";
import PageDetail from "./PageDetail/PageDetail";
import VerifiAcount from "./VerifiAcount/VerifiAcount";
import BlogPage from "./BlogPage/BlogPage";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <IndexLayout />,

    },
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/destinos",
                element: <Destinations />,
            },
            {
                path: "/details/:id",
                element: <PageDetail />,
            },
            {
                path: "/users/verify/:verify_code",
                element: <VerifiAcount />,
            },
            {
                path: "/signout",
                element: <IndexLayout />,
            },
            {
                path: "/Blog",
                element: <BlogPage />,
            },
        ],
    },
]);
