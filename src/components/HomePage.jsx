import React from 'react';
import { MapPin, Star, Clock, Shield, Camera, ArrowRight, Heart } from 'lucide-react';

const HomePage = ({ setCurrentPage, tours, toggleFavorite, favorites, setSelectedTour }) => {
  const handleImageError = (e) => {
    e.target.src = e.target.dataset.fallback;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-700" data-aos="fade-in">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4" data-aos="fade-up" data-aos-delay="200">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Discover Amazing
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Adventures
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Explore breathtaking destinations and create unforgettable memories with our curated tour experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setCurrentPage('tours')}
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-xl"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              Explore Tours <ArrowRight className="inline ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300" data-aos="zoom-in" data-aos-delay="400">
              Watch Video
            </button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce" data-aos="fade-up" data-aos-delay="500">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose TourExplorer?</h2>
            <p className="text-xl text-gray-600">Experience the difference with our premium tour services</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow" data-aos="fade-up" data-aos-delay="100">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Safe & Secure</h3>
              <p className="text-gray-600">Your safety is our priority. All tours are conducted with the highest safety standards and experienced guides.</p>
            </div>
            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow" data-aos="fade-up" data-aos-delay="200">
              <div className="bg-gradient-to-r from-green-500 to-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Camera className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Memorable Experiences</h3>
              <p className="text-gray-600">Create lasting memories with our carefully curated experiences and photo opportunities at every destination.</p>
            </div>
            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow" data-aos="fade-up" data-aos-delay="300">
              <div className="bg-gradient-to-r from-orange-500 to-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer support ensures you're never alone during your journey with us.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Tours */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Tours</h2>
            <p className="text-xl text-gray-600">Discover our most popular destinations</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.slice(0, 3).map((tour, index) => (
              <div
                key={tour.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
                data-aos="fade-up"
                data-aos-delay={100 * (index + 1)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    data-fallback={tour.fallbackImage}
                    onError={handleImageError}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <button
                      onClick={() => toggleFavorite(tour.id)}
                      className={`p-2 rounded-full ${favorites.includes(tour.id) ? 'bg-red-500 text-white' : 'bg-white text-gray-600'} hover:bg-red-500 hover:text-white transition-colors`}
                    >
                      <Heart className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">{tour.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <MapPin className="h-4 w-4 text-gray-500 mr-1" />
                    <span className="text-gray-600 text-sm">{tour.location}</span>
                    <div className="ml-auto flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{tour.rating} ({tour.reviews})</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 hover:text-blue-600 cursor-pointer">{tour.title}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="text-sm">{tour.duration}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-blue-600">Rs. {tour.price}</span>
                      <span className="text-gray-600 text-sm block">per person</span>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedTour(tour);
                      setCurrentPage('tour-detail');
                    }}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
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
              className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
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