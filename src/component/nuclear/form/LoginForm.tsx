import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import CookieManager from 'src/component/util/CookieManager';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const authType = "EMAIL_PASSWORD";

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const loginData = {
      authType,
      email,
      password,
    };
    axios.post('/auth/login',JSON.stringify(loginData),{headers: {'Content-Type': 'application/json',}})
    .then((response) => {
        console.log(response);
        toast("Success");
        new CookieManager().setCookie("isLoggedin",true);
    }).catch((error) => {
      toast("Failed");
      new CookieManager().setCookie("isLoggedin",true);
      console.log(error);
    });

   
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-4 bg-white shadow-md rounded-lg">
      
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          className="w-full p-2 border border-gray-300 rounded mt-1"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700">Password</label>
        <input
          type="password"
          id="password"
          className="w-full p-2 border border-gray-300 rounded mt-1"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
