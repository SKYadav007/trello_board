import React, { useEffect, useState } from "react";
import SignUpPage from "../componant/SignUpPage/SignUpPage";
import { useNavigate } from "react-router-dom";
import TopProgressBar from "../componant/loader/TopProgresssBar"

export default function Signup() {
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate();
  useEffect(() => {
    const intervel = setInterval(() => {
      clearTimeout(intervel);
      setLoading(false);
    }, 1000)

  }, []);
  return loading ? <TopProgressBar /> : <SignUpPage />;
}