import React from 'react';
import { Check } from 'lucide-react';

const ConfirmationPage = ({ setCurrentPage }) => (
  <div className="min-h-screen bg-gray-50 py-12">
    <div className="max-w-2xl mx-auto px-4 text-center">
      <div className="bg-white rounded-xl shadow-lg p-8" data-aos="fade-up">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6" data-aos="zoom-in">
          <Check className="h-10 w-10 text-green-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Booking Confirmed!</h1>
        <p className="text-xl text-gray-600 mb-8">Your adventure awaits! We've sent a confirmation email with all the details.</p>
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h3 className="font-semibold mb-2">Booking Reference</h3>
          <p className="text-2xl font-mono font-bold text-blue-600">TR{Date.now().toString().slice(-6)}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => setCurrentPage('home')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            Back to Home
          </button>
          <button
            onClick={() => setCurrentPage('account')}
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            View My Bookings
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default ConfirmationPage;