import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaMapMarkerAlt, FaBars, FaTimes } from 'react-icons/fa';

const Navigation = ({ currentPage, setCurrentPage, user, setUser, isMenuOpen, setIsMenuOpen }) => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1
                className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 cursor-pointer"
                onClick={() => setCurrentPage('home')}
                data-aos="fade-down"
              >
                TourExplorer
              </h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-6">
                {['home', 'tours', 'about', 'contact'].map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
                      currentPage === page
                        ? 'text-blue-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600 after:scale-x-100'
                        : 'text-gray-600 hover:text-blue-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300'
                    }`}
                    data-aos="fade-right"
                    data-aos-delay={100 * (['home', 'tours', 'about', 'contact'].indexOf(page) + 1)}
                  >
                    {page.charAt(0).toUpperCase() + page.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setCurrentPage('account')}
                  className="relative text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                  data-aos="fade-left"
                >
                  My Account
                </button>
                <button
                  onClick={() => setUser(null)}
                  className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-lg font-medium hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-sm"
                  data-aos="fade-left"
                  data-aos-delay="100"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setCurrentPage('login')}
                  className="relative text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                  data-aos="fade-left"
                >
                  Login
                </button>
                <button
                  onClick={() => setCurrentPage('signup')}
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-sm"
                  data-aos="fade-left"
                  data-aos-delay="100"
                >
                  Sign Up
                </button>
              </div>
            )}
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-blue-100 transition-colors duration-200"
            >
              {isMenuOpen ? <FaTimes className="h-6 w-6 text-gray-600" /> : <FaBars className="h-6 w-6 text-gray-600" />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className="absolute top-0 right-0 w-3/4 max-w-xs bg-white shadow-xl h-full transform transition-transform duration-300 ease-in-out"
            data-aos="slide-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end p-4">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-blue-100 transition-colors duration-200"
              >
                <FaTimes className="h-6 w-6 text-gray-600" />
              </button>
            </div>
            <div className="px-4 py-2 space-y-2">
              {['home', 'tours', 'about', 'contact'].map((page) => (
                <button
                  key={page}
                  onClick={() => {
                    setCurrentPage(page);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 text-base font-medium ${
                    currentPage === page ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  } rounded-lg transition-colors duration-200`}
                  data-aos="fade-up"
                  data-aos-delay={100 * (['home', 'tours', 'about', 'contact'].indexOf(page) + 1)}
                >
                  {page.charAt(0).toUpperCase() + page.slice(1)}
                </button>
              ))}
              {!user && (
                <>
                  <button
                    onClick={() => {
                      setCurrentPage('login');
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-3 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => {
                      setCurrentPage('signup');
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-3 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >
                    Sign Up
                  </button>
                </>
              )}
              {user && (
                <>
                  <button
                    onClick={() => {
                      setCurrentPage('account');
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-3 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    My Account
                  </button>
                  <button
                    onClick={() => {
                      setUser(null);
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-3 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;