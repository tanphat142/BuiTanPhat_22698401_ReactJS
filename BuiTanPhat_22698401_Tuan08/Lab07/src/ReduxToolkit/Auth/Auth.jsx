import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout, setUserInfo } from './AuthSlice';

const Auth = () => {
  const { user, isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    if (username.trim() && email.trim()) {
      dispatch(setUserInfo({ username, email }));
      dispatch(login());
      setUsername('');
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        {isLoggedIn ? (
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Welcome, {user?.username}!
            </h1>
            <p className="text-gray-600 mb-6">Email: {user?.email}</p>
            <button
              onClick={() => dispatch(logout())}
              className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>
        ) : (
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Login</h1>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              onClick={handleLogin}
              className="w-full px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Auth;