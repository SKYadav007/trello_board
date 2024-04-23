import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';

const SignUpPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:10000/api/v1/user/signup', {
        username,
        email,
        password,
      });
      console.log(response);
      toast.success("User created sucessfully!", {
        position: "top-right"
      });
      navigate("/login")
      // Redirect to login page or show success message
    } catch (error) {
      console.error(error);
      if (error.response.data.massage.includes("duplicate")) {
        toast.error("User details is exist, please enter the unique details!", {
          position: "top-right"
        });
      }

    }
  };

  const navigateToTheLoginPage = () => {
    navigate("/login")
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8">
          <div className="mb-6  rounded-lg  flex flex-col items-center">
            <img className='w-20 h-20 mb-4' src="../src/assets/logo.png" alt="trello" />
            <h2 className="text-2xl font-bold mb-2 text-center">Sign Up </h2>
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-bold mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border border-gray-400 p-2 rounded-md"
            />
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
              className="w-full border border-gray-400 p-2 rounded-md"
            />
          </div>
          <button type="submit" className="w-full bg-blue-400 text-white font-bold  py-2 px-4 rounded-md hover:bg-blue-500">
            Sign Up
          </button>

        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-700">Already have an account?</p>
          <button className="text-blue-500 hover:underline" onClick={navigateToTheLoginPage}>
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;