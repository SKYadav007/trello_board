import * as React from "react";

import {
  createBrowserRouter,
  Link,
} from "react-router-dom";

import Dashboard from '../nav/Dashboard'
import Login from "../nav/Login"
import Signup from "../nav/Signup"
import Home from "../nav/Home"

const router = createBrowserRouter([
  {
    path: "/signup",
    element: (
      <Signup/>
    ),
  },
  {
    path: "/login",
    element: (
        <Login/>
    ),
  },
  {
    path: "/home",
    element: (
        <Home/>
    ),
  },
  {
    path: "/",
    element: (
        <Dashboard/>
    ),
  },
  
]);

export default router;