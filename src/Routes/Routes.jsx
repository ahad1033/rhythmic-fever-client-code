import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Instructors from "../Pages/Instructors/Instructors";
import PrivateRoute from "./PrivateRoute";
import Classes from "../Pages/Classes/Classes";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'signup',
        element: <SignUp />
      },
      {
        path: '/instructor',
        element: <PrivateRoute><Instructors /></PrivateRoute>
      },
      {
        path: 'classes',
        element: <Classes />
      }
    ]
  },
  {
    path: '*',
    element: <ErrorPage />
  }
]);