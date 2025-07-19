import React, { useState } from 'react';
import { MapPin, Star, Clock, Heart, Share2 } from 'lucide-react';

const ToursPage = ({ tours, setCurrentPage, setSelectedTour, toggleFavorite, favorites }) => {
  const [filterCategory, setFilterCategory] = useState('All');
  const categories = ['All', 'Adventure', 'Luxury', 'Cultural', 'Wildlife', 'Eco-Tourism', 'Spiritual'];
  const filteredTours = filterCategory === 'All' ? tours : tours.filter(tour => tour.category === filterCategory);

  const handleImageError = (e) => {
    e.target.src = e.target.dataset.fallback;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">All Tours</h1>
          <p className="text-xl text-gray-600">Choose your perfect adventure</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12" data-aos="fade-up" data-aos-delay="100">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilterCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-colors ${filterCategory === category ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-blue-100'}`}
              data-aos="zoom-in"
              data-aos-delay={100 * (categories.indexOf(category) + 1)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map((tour, index) => (
            <div
              key={tour.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  data-fallback={tour.fallbackImage}
                  onError={handleImageError}
                  className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <button
                    onClick={() => toggleFavorite(tour.id)}
                    className={`p-2 rounded-full ${favorites.includes(tour.id) ? 'bg-red-500 text-white' : 'bg-white text-gray-600'} hover:bg-red-500 hover:text-white transition-colors`}
                  >
                    <Heart className="h-5 w-5" />
                  </button>
                  <button className="p-2 rounded-full bg-white text-gray-600 hover:bg-gray-100 transition-colors">
                    <Share2 className="h-5 w-5" />
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
                <h3 className="text-xl font-bold mb-2">{tour.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{tour.description}</p>
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
                  onClick={() => { setSelectedTour(tour); setCurrentPage('tour-detail'); }}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                >
                  View Details & Book
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToursPage;