import React from 'react';
import { MapPin, Clock, Check } from 'lucide-react';

const BookingPage = ({ selectedTour, bookingData, setBookingData, handleBooking }) => {
  const handleImageError = (e) => {
    e.target.src = e.target.dataset.fallback;
  };

  if (!selectedTour) return <div className="text-center py-12" data-aos="fade-up">Please select a tour first</div>;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8" data-aos="fade-up">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Complete Your Booking</h1>
          <p className="text-gray-600">You're one step away from your adventure!</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2" data-aos="fade-up" data-aos-delay="100">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <form onSubmit={handleBooking}>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Travel Date</label>
                    <input
                      type="date"
                      value={bookingData.date}
                      onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Number of Guests</label>
                    <select
                      value={bookingData.guests}
                      onChange={(e) => setBookingData({ ...bookingData, guests: parseInt(e.target.value) })}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                        <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      value={bookingData.name}
                      onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      value={bookingData.email}
                      onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={bookingData.phone}
                    onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-4 rounded-lg font-semibold text-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                  data-aos="zoom-in"
                >
                  Confirm Booking
                </button>
              </form>
            </div>
          </div>

          {/* Booking Summary */}
          <div className="lg:col-span-1" data-aos="fade-up" data-aos-delay="200">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              <h3 className="text-xl font-bold mb-4">Booking Summary</h3>
              <div className="mb-4">
                <img
                  src={selectedTour.image}
                  alt={selectedTour.title}
                  data-fallback={selectedTour.fallbackImage}
                  onError={handleImageError}
                  className="w-full h-32 object-cover rounded-lg mb-3"
                />
                <h4 className="font-semibold">{selectedTour.title}</h4>
                <p className="text-sm text-gray-600">{selectedTour.location}</p>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between mb-2">
                  <span>Duration:</span>
                  <span>{selectedTour.duration}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Price per person:</span>
                  <span>Rs. {selectedTour.price}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Guests:</span>
                  <span>{bookingData.guests}</span>
                </div>
                <div className="flex justify-between font-bold text-lg border-t pt-2">
                  <span>Total:</span>
                  <span>Rs. {selectedTour.price * bookingData.guests}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;