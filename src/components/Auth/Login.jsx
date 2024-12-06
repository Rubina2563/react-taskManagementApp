import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-800 via-purple-700 to-indigo-900 flex items-center justify-center">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8 relative">
        {/* Decorative Circles */}
        <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-400 opacity-30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-purple-400 opacity-30 rounded-full blur-xl animate-pulse"></div>

        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Welcome Back!
        </h1>
        <form
          onSubmit={(e) => submitHandler(e)}
          className="w-full flex flex-col items-center gap-4"
        >
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:border-transparent placeholder-gray-500 text-gray-700 transition"
            type="email"
            placeholder="Email"
          />
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:border-transparent placeholder-gray-500 text-gray-700 transition"
            type="password"
            placeholder="Password"
          />
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:opacity-90 shadow-lg transition duration-300"
          >
            Login
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4 text-sm">
          Don't have an account?{' '}
          <a href="#" className="text-indigo-500 font-medium hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
