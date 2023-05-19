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
import RouteProtector from "./RouteProtector";

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
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/all-toys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/toy/:id",
        element: (
          <RouteProtector>
            <ToyDetails></ToyDetails>
          </RouteProtector>
        ),
        loader: ({ params }) =>
          fetch(`https://mfarhad-toy-master.vercel.app/toy-details/${params.id}`),
      },
      {
        path: "/my-toys",
        element: (
          <RouteProtector>
            <MyToys></MyToys>
          </RouteProtector>
        ),
      },
      {
        path: "/add-toy",
        element: (
          <RouteProtector>
            <AddToy></AddToy>
          </RouteProtector>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

export default routers;
