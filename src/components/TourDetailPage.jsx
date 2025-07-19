import React from 'react';
import { MapPin, Star, Clock, Heart, Share2, Check, Phone, Mail } from 'lucide-react';

const TourDetailPage = ({ selectedTour, setCurrentPage, toggleFavorite, favorites }) => {
  const handleImageError = (e) => {
    e.target.src = e.target.dataset.fallback;
  };

  if (!selectedTour) return <div className="text-center py-12" data-aos="fade-up">Tour not found</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Image */}
      <div className="relative h-96 md:h-[500px] overflow-hidden" data-aos="fade-in">
        <img
          src={selectedTour.image}
          alt={selectedTour.title}
          data-fallback={selectedTour.fallbackImage}
          onError={handleImageError}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute bottom-8 left-8 text-white" data-aos="fade-up" data-aos-delay="200">
          <span className="bg-blue-600 px-3 py-1 rounded-full text-sm font-semibold mb-2 inline-block">{selectedTour.category}</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{selectedTour.title}</h1>
          <div className="flex items-center text-lg">
            <MapPin className="h-5 w-5 mr-2" />
            <span>{selectedTour.location}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2" data-aos="fade-up" data-aos-delay="100">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="flex items-center mr-6">
                    <Star className="h-5 w-5 text-yellow-400 fill-current mr-1" />
                    <span className="text-lg font-semibold">{selectedTour.rating}</span>
                    <span className="text-gray-600 ml-1">({selectedTour.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-gray-500 mr-1" />
                    <span className="text-gray-600">{selectedTour.duration}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => toggleFavorite(selectedTour.id)}
                    className={`p-3 rounded-full ${favorites.includes(selectedTour.id) ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-600'} hover:bg-red-500 hover:text-white transition-colors`}
                  >
                    <Heart className="h-5 w-5" />
                  </button>
                  <button className="p-3 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4">Tour Overview</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">{selectedTour.description}</p>

              <h3 className="text-xl font-bold mb-4">Tour Highlights</h3>
              <ul className="grid md:grid-cols-2 gap-3 mb-6">
                {selectedTour.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-center" data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">{highlight}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-bold mb-4">What's Included</h3>
              <ul className="grid md:grid-cols-2 gap-3">
                {selectedTour.includes.map((item, index) => (
                  <li key={index} className="flex items-center" data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
                    <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1" data-aos="fade-up" data-aos-delay="200">
            <div className="bg-white rounded-xl shadow-lg p-8 sticky top-8">
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-blue-600">Rs. {selectedTour.price}</span>
                <span className="text-gray-600 block">per person</span>
              </div>
              <button
                onClick={() => setCurrentPage('booking')}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-lg font-semibold text-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg mb-4"
              >
                Book Now
              </button>
              <div className="text-center text-sm text-gray-500 mb-6">
                Free cancellation up to 24 hours before departure
              </div>
              <div className="border-t pt-6">
                <h4 className="font-semibold mb-3">Need Help?</h4>
                <div className="flex items-center mb-2">
                  <Phone className="h-4 w-4 text-gray-500 mr-2" />
                  <span className="text-sm text-gray-600">+977 (1) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 text-gray-500 mr-2" />
                  <span className="text-sm text-gray-600">support@tourexplorer.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetailPage;