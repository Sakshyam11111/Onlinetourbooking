import React from 'react';
import { Calendar } from 'lucide-react';

const AccountPage = ({ user, bookings, setCurrentPage }) => (
  <div className="min-h-screen bg-gray-50 py-12">
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-8" data-aos="fade-up">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">My Account</h1>
        <p className="text-gray-600">Manage your bookings and preferences</p>
      </div>
      <div className="grid lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1" data-aos="fade-up" data-aos-delay="100">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-blue-600">JD</span>
              </div>
              <h3 className="font-semibold">{user?.name || 'Guest User'}</h3>
              <p className="text-sm text-gray-600">{user?.email}</p>
            </div>
            <nav className="space-y-2">
              <button className="w-full text-left px-3 py-2 rounded-lg bg-blue-50 text-blue-600 font-medium">My Bookings</button>
              <button className="w-full text-left px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50">Favorites</button>
              <button className="w-full text-left px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50">Profile Settings</button>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3" data-aos="fade-up" data-aos-delay="200">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">My Bookings</h2>
            {bookings.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4" data-aos="zoom-in">
                  <Calendar className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No bookings yet</h3>
                <p className="text-gray-600 mb-6">Start exploring our amazing tours and create your first booking!</p>
                <button
                  onClick={() => setCurrentPage('tours')}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  data-aos="zoom-in"
                >
                  Browse Tours
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {bookings.map((booking, index) => (
                  <div key={booking.id} className="border rounded-lg p-6" data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold">{booking.tour.title}</h3>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        {booking.status}
                      </span>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
                      <div>
                        <span className="font-medium">Travel Date:</span> {booking.date}
                      </div>
                      <div>
                        <span className="font-medium">Guests:</span> {booking.guests}
                      </div>
                      <div>
                        <span className="font-medium">Total:</span> Rs. {booking.tour.price * booking.guests}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AccountPage;