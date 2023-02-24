import { createBrowserRouter } from "react-router-dom"
import BlogCardOpen from "../components/blogCardOpen/BlogCardOpen"
import TempSection from "../components/tempSection/TempSection"
import Blog from "./../components/blog/Blog"
import Home from "./../components/home/index"

export const Router = createBrowserRouter([

    {
        path: "/",
        element: <Home />,
        errorElement: <Home />,
    },
    {
        path: "/product",
        element: <TempSection />,
        errorElement: <Blog />,
    },
    {
        path: "/solution",
        element: <TempSection />,
        errorElement: <Blog />,
    },
    {
        path: "/blog",
        element: <Blog />,
        errorElement: <Blog />,
    },
    {
        path: "/blog/:id",
        element: <BlogCardOpen />,
        errorElement: <Blog />,
    },

]
)