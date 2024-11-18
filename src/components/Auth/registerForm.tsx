import React from 'react';

const RegisterForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <form className="bg-white bg-opacity-10 p-8 rounded-2xl shadow-lg w-80">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Username</label>
          <input type="text" className="w-full p-2 rounded-lg bg-gray-200" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input type="email" className="w-full p-2 rounded-lg bg-gray-200" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Password</label>
          <input type="password" className="w-full p-2 rounded-lg bg-gray-200" />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
