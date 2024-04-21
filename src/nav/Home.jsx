import React, { useEffect, useState } from "react";
import Home from "../componant/home/Home";
import TopProgressBar from "../componant/loader/TopProgresssBar"
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

export default function HomeNav() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const user = useSelector(state => state.user.auth);
  const token = localStorage.getItem("currentUserToken")
  


  useEffect(() => {
    
    if (token) {
      const intervel = setInterval(() => {
        clearInterval(intervel);
        setLoading(false);
      }, 1000)
      navigate("/home");
    } else {
      const intervel = setInterval(() => {
        clearInterval(intervel);
        setLoading(false);
      }, 1000)
      navigate("/login");
    }
  }, [token]);

  return loading ? <TopProgressBar /> : <Home />;
}