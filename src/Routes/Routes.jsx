import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ViewDetails from "../Component/ViewDetails/ViewDetails";




   const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path:'/registration',
            element: <Register></Register>
        },
        {
            path: '/job/:id',
            element: <ViewDetails></ViewDetails>,
            loader: ({params})=> fetch(`http://localhost:5000/job/${params.id}`)
        }
    ]
  },
]);            
export default router;

