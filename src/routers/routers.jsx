import { createBrowserRouter } from "react-router-dom";
import Main from "./../layout/Main";
import Home from "./../pages/Home/Home";
import Login from "./../pages/Login/Login";
import MyToys from "./../pages/MyToys/MyToys";
import AllToys from "./../pages/AllToys/AllToys";
import AddToy from "./../pages/AddToy/AddToy";
import Register from "./../pages/Register/Register";
import Blogs from "./../pages/Blogs/Blogs";
import ToyDetails from "./../pages/ToyDetails/ToyDetails";
import Error from "./../pages/Error/Error";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/my-toys",
        element: <MyToys></MyToys>,
      },
      {
        path: "/all-toys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/add-toys",
        element: <AddToy></AddToy>,
      },
      {
        path: "/toy-details/:id",
        element: <ToyDetails></ToyDetails>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

export default routers;
