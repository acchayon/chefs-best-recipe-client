import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Blog from "../pages/Home/Blog/Blog";
import Authentic from "../layouts/Authentic";
import Login from "../pages/shared/Login/Login";
import Register from "../pages/shared/Register/Register";
import Recipe from "../pages/Recipe/Recipe";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "./ErrorPage";

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
                element: <PrivateRoute><Recipe></Recipe></PrivateRoute>,
                loader: ({params}) => fetch(`https://chefs-best-recipe-server-acchayon.vercel.app/recipe/${params.id}`)
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
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])
export default router;