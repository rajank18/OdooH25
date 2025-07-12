import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from '../api/axiosInstance'; // ✅ import axios instance


const Loginpage = ({ onLogin }) => {
const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await axios.post('/auth/login', {
        email,
        password
      });

      const { token } = res.data;

      // Optional: store in localStorage
      localStorage.setItem('token', token);

      const username = email.split('@')[0];
      onLogin(username); // could use decoded username from token for better accuracy

      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };


  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center font-sans">
      <div className="bg-white shadow-md rounded-md p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="text-right">
            <a href="#" className="text-sm text-blue-500 cursor-pointer">Forgot password?</a>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Login
          </button>
          <div className="text-right">
         
            <a href="#" onClick={() => navigate('/signup')}>Doesn't have an account? Sign Up</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Loginpage;