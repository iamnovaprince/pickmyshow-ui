import React from 'react';
import {Link, useLocation } from 'react-router-dom';
import LoginForm from 'src/component/nuclear/form/LoginForm';
import SignupForm from 'src/component/nuclear/form/SignupForm';


const AuthPage = () => {
  const location = useLocation();
  const isLogin = location.pathname.split('/')[2] === 'login';
  const userType = location.pathname.split('/')[1];
  console.log(userType);
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between mb-6">
          <h2 className="text-2xl font-bold">{isLogin ? 'Login' : 'Sign Up'}</h2>
          <Link to={isLogin ? '/admin/signup' : '/admin/login'} className="text-blue-600 hover:underline">
            {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Login'}
          </Link>
        </div>
        {isLogin ? <LoginForm /> : <SignupForm />}
      </div>
    </div>
  );
};

export default AuthPage;
