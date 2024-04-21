import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useSelector, useDispatch } from 'react-redux';
import { setUserAuth } from '../../redux/userSlice';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigateToThesignupPage = () => {
    navigate("/signup")
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:10000/api/v1/user/login",
      {
        "email": email,
        "password": password
      }
    ).
      then((res) => {
        dispatch(setUserAuth(res.data))
        // console.log(res.data);
  
        localStorage.setItem("currentUserToken",res.data.token);
        navigate("/home");
      }).
      catch((err) => console.log(err));

  };


  
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md">
        <form className="bg-white shadow-md rounded-lg p-8 ">

          <div className="mb-6  rounded-lg  flex flex-col items-center">
            <img className='w-20 h-20 mb-4' src="../src/assets/logo.png" alt="trello" />
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
          <button type="submit" className="w-full bg-blue-400 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-500" onClick={handleSubmit}>
            Log In
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-700">Don't have an account?</p>
          <button className="text-blue-500 hover:underline" onClick={navigateToThesignupPage}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login