import React, { useState } from 'react';

const SignupForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const signupData = {
      firstName,
      lastName,
      email,
      password,
    };

    // Submit signupData to your API
    fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(signupData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Signup Success:', data);
      })
      .catch(error => {
        console.error('Signup Error:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-4 bg-white shadow-md rounded-lg">
      <div className="mb-4">
        <label htmlFor="firstName" className="block text-gray-700">First Name</label>
        <input
          type="text"
          id="firstName"
          className="w-full p-2 border border-gray-300 rounded mt-1"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="lastName" className="block text-gray-700">Last Name</label>
        <input
          type="text"
          id="lastName"
          className="w-full p-2 border border-gray-300 rounded mt-1"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
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
      <button type="submit" className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700">
        Sign Up
      </button>
    </form>
  );
};

export default SignupForm;
