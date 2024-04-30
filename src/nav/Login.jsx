import React, { useEffect, useState } from "react";
import Login from "../componant/login/Login";
import { useNavigate } from "react-router-dom";
import TopProgressBar from "../componant/loader/TopProgresssBar"
import { useSelector } from 'react-redux';
import auth from "../util/api"
export default function LoginPage() {
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate();
  const user = useSelector(state => state.user);
  const token = sessionStorage.getItem("currentUserToken")


  useEffect(() => {
    if (token) {
      navigate("/home");
    } else {
      const intervel = setInterval(() => {
        clearTimeout(intervel);
        setLoading(false);
      }, 1000)

    }
  }, [token]);

  return loading ? <TopProgressBar /> : <Login />;
}