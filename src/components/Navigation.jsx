import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MapPin, Menu, X } from 'lucide-react';

const Navigation = ({ currentPage, setCurrentPage, user, setUser, isMenuOpen, setIsMenuOpen }) => {
  useEffect(() => {
    AOS.init({
      duration: 400,
      once: true,
    });
  }, []);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1
                className="text-2xl font-bold text-blue-600 cursor-pointer"
                onClick={() => setCurrentPage('home')}
                data-aos="fade-down"
              >
                TourExplorer
              </h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {['home', 'tours', 'about', 'contact'].map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-3 py-2 text-sm font-medium ${currentPage === page ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
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
                  className="text-gray-600 hover:text-blue-600"
                  data-aos="fade-left"
                >
                  My Account
                </button>
                <button
                  onClick={() => setUser(null)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
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
                  className="text-gray-600 hover:text-blue-600"
                  data-aos="fade-left"
                >
                  Login
                </button>
                <button
                  onClick={() => setCurrentPage('signup')}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  data-aos="fade-left"
                  data-aos-delay="100"
                >
                  Sign Up
                </button>
              </div>
            )}
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden" data-aos="fade-down">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            {['home', 'tours', 'about', 'contact'].map((page) => (
              <button
                key={page}
                onClick={() => { setCurrentPage(page); setIsMenuOpen(false); }}
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600"
                data-aos="fade-up"
                data-aos-delay={100 * (['home', 'tours', 'about', 'contact'].indexOf(page) + 1)}
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </button>
            ))}
            {!user && (
              <>
                <button
                  onClick={() => { setCurrentPage('login'); setIsMenuOpen(false); }}
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  Login
                </button>
                <button
                  onClick={() => { setCurrentPage('signup'); setIsMenuOpen(false); }}
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600"
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
                  onClick={() => { setCurrentPage('account'); setIsMenuOpen(false); }}
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  My Account
                </button>
                <button
                  onClick={() => { setUser(null); setIsMenuOpen(false); }}
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;