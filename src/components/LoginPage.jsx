import React, { useState } from 'react';

const LoginPage = ({ setUser, setCurrentPage }) => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });

  const handleLogin = (e) => {
    e.preventDefault();
    setUser({ name: 'John Doe', email: loginData.email });
    setCurrentPage('home');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-md mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-8" data-aos="fade-up">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
            <p className="text-gray-600">Sign in to your account</p>
          </div>
          <form onSubmit={handleLogin}>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                value={loginData.email}
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                data-aos="fade-up"
                data-aos-delay="100"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input
                type="password"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                data-aos="fade-up"
                data-aos-delay="200"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              Sign In
            </button>
          </form>
          <div className="text-center mt-6" data-aos="fade-up" data-aos-delay="400">
            <p className="text-gray-600">
              Don't have an account?
              <button
                onClick={() => setCurrentPage('signup')}
                className="text-blue-600 hover:underline ml-1"
              >
                Sign up
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;