import React from 'react';
import { MapPin, Star, Clock, Shield, Camera, ArrowRight, Heart } from 'lucide-react';

const HomePage = ({ setCurrentPage, tours, toggleFavorite, favorites, setSelectedTour }) => {
  const handleImageError = (e) => {
    e.target.src = e.target.dataset.fallback;
  };

  return (
    <div className="min-h-screen bg-blue-50">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-700 via-blue-500 to-blue-300 overflow-hidden">
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-6" data-aos="fade-up">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Embark on
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">
              Unforgettable Journeys
            </span>
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-blue-100">
            Discover handpicked adventures tailored for thrill-seekers and explorers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setCurrentPage('tours')}
              className="bg-blue-600 text-white px-8 py-3 rounded-4xl text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              Explore Tours <ArrowRight className="inline ml-2 h-5 w-5" />
            </button>
            <button
              className="border-2 border-blue-200 text-blue-200 px-8 py-3 rounded-4xl text-lg font-semibold hover:bg-blue-200 hover:text-blue-900 transition-all duration-300"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              Watch Video
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-pulse" data-aos="fade-up" data-aos-delay="400">
          <div className="w-8 h-12 border-2 border-blue-200 rounded-full flex justify-center items-start">
            <div className="w-1.5 h-4 bg-blue-200 rounded-full mt-2"></div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Why Travel with Us?</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">Unmatched experiences backed by quality and care</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div
              className="relative p-8 bg-blue-50 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-blue-400 w-14 h-14 rounded-full flex items-center justify-center">
                <Shield className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Trusted Safety</h3>
              <p className="text-gray-500">Travel with peace of mind with our top-tier safety measures and expert guides.</p>
            </div>
            <div
              className="relative p-8 bg-blue-50 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-cyan-500 w-14 h-14 rounded-full flex items-center justify-center">
                <Camera className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Epic Moments</h3>
              <p className="text-gray-500">Capture stunning memories with exclusive destinations and unique experiences.</p>
            </div>
            <div
              className="relative p-8 bg-blue-50 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-400 to-blue-600 w-14 h-14 rounded-full flex items-center justify-center">
                <Clock className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Always Supported</h3>
              <p className="text-gray-500">Our 24/7 support team is here to assist you at every step of your journey.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Tours */}
      <div className="py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Top Destinations</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">Explore our handpicked selection of must-visit places</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tours.slice(0, 3).map((tour, index) => (
              <div
                key={tour.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl group"
                data-aos="fade-up"
                data-aos-delay={100 * (index + 1)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    data-fallback={tour.fallbackImage}
                    onError={handleImageError}
                    className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <button
                    onClick={() => toggleFavorite(tour.id)}
                    className={`absolute top-3 right-3 p-2 rounded-full shadow-md ${favorites.includes(tour.id) ? 'bg-blue-600 text-white' : 'bg-white/80 text-gray-600'
                      } hover:bg-blue-600 hover:text-white transition-all duration-200`}
                  >
                    <Heart className="h-5 w-5" fill={favorites.includes(tour.id) ? 'currentColor' : 'none'} />
                  </button>
                  <div className="absolute bottom-3 left-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {tour.category}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{tour.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{tour.rating} ({tour.reviews})</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {tour.title}
                  </h3>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="text-sm">{tour.duration}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-xl font-bold text-blue-600">Rs. {tour.price}</span>
                      <span className="text-gray-500 text-sm block">per person</span>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedTour(tour);
                      setCurrentPage('tour-detail');
                    }}
                    className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="400">
            <button
              onClick={() => setCurrentPage('tours')}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300"
            >
              View All Tours
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;