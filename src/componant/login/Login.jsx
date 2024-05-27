import React, { useEffect, useState,memo } from 'react'
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useSelector, useDispatch } from 'react-redux';
import { setUserAuth } from '../../redux/userSlice';
import { toast } from 'react-toastify';
import Config from "../../Config.json"
import logo from "../../assets/logo.png"


const Login = memo(() => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  const navigateToThesignupPage = () => {
    navigate("/signup")
  }
  let BaseURL = Config.env[0].API_BASE_URL_LOCAL;
  if (Config.env[0].SERVER == "REMOTE") {
    BaseURL = Config.env[0].API_BASE_URL;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post(BaseURL+"/api/v1/user/login",
      {
        "email": email,
        "password": password
      }
    ).
      then((res) => {
        sessionStorage.setItem("currentUserToken", res.data.token);
        sessionStorage.setItem("crtUser", res.data.user);
        sessionStorage.setItem("crtUserID", res.data.id);
        sessionStorage.setItem("crtUserEmail", res.data.email);
        navigate("/home");
        setError("")
        toast.success("Login Sucessfully!", {
          position: "top-right"
        });
      }).
      catch((err) => {
        toast.error(err.response.data.massage, {
          position: "top-right"
        });
      });
      
    try {
      axios.get(BaseURL + "/api/v1/user/auth")
        .then((res) => {
          console.log(res);
          dispatch(setUserAuth(res))
          
        }).
        catch((err) => {
        });

    } catch (err) {
      console.log(err);
    };
  };



    


  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md">
        <form className="bg-pink-200 shadow-md rounded-lg p-8 ">

          <div className="mb-6  rounded-lg  flex flex-col items-center">
            <h1><span className='text-pink-400'>Trello.com</span></h1>
            {/* <img className='w-20 h-20 mb-4' src={logo} alt="trello" /> */}
            <h2 className="text-2xl font-bold mb-2 text-center">Login </h2>
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Username or Email'
              className="w-full border border-gray-400 p-2 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Password'
              className="w-full border border-gray-400 p-2 rounded-md"
            />
          </div>
          <p className='text-center py-3 text-red-500 font-semibold'>{error}</p>
          <button type="submit" className="w-full bg-pink-500 text-white font-bold py-2 px-4 rounded-md hover:bg-pink-600" onClick={handleSubmit}>
            Log In
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-700">Don't have an account?</p>
          <button className="text-pink-500 hover:underline" onClick={navigateToThesignupPage}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  )
})

export default Login