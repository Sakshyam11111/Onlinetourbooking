import React, { useState } from 'react';

const SignUpPage = ({ setUser, setCurrentPage }) => {
  const [signUpData, setSignUpData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleSignUp = (e) => {
    e.preventDefault();
    // Mock signup: set user and navigate to home
    setUser({ name: signUpData.name, email: signUpData.email });
    setCurrentPage('home');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-md mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-8" data-aos="fade-up">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Create an Account</h1>
            <p className="text-gray-600">Join TourExplorer to start your adventure</p>
          </div>
          <form onSubmit={handleSignUp}>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                value={signUpData.name}
                onChange={(e) => setSignUpData({ ...signUpData, name: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                data-aos="fade-up"
                data-aos-delay="100"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                value={signUpData.email}
                onChange={(e) => setSignUpData({ ...signUpData, email: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                data-aos="fade-up"
                data-aos-delay="200"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input
                type="password"
                value={signUpData.password}
                onChange={(e) => setSignUpData({ ...signUpData, password: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                data-aos="fade-up"
                data-aos-delay="300"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              Sign Up
            </button>
          </form>
          <div className="text-center mt-6" data-aos="fade-up" data-aos-delay="500">
            <p className="text-gray-600">
              Already have an account?
              <button
                onClick={() => setCurrentPage('login')}
                className="text-blue-600 hover:underline ml-1"
              >
                Sign in
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;