// src/components/Login.js
import React from 'react';

function Login() {
  return (
    <div className="flex min-h-screen bg-gray-100 justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              className="w-full border rounded px-3 py-2 mt-1"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              className="w-full border rounded px-3 py-2 mt-1"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;