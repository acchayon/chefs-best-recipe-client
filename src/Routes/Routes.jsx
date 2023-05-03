import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Blog from "../pages/Home/Blog/Blog";
import Authentic from "../layouts/Authentic";
import Login from "../pages/shared/Login/Login";
import Register from "../pages/shared/Register/Register";
import Recipe from "../pages/Recipe/Recipe";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/recipe/:id',
                element: <Recipe></Recipe>,
                loader: ({params}) => fetch(`http://localhost:5000/recipe/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    },
    {
        path: '/',
        element: <Authentic></Authentic>,
        children: [
            {
                path: '/',
                element: <Navigate to='/'></Navigate>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])
export default router;