import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactPage = () => (
  <div className="min-h-screen bg-gray-50 py-12">
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center mb-12" data-aos="fade-up">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-xl text-gray-600">We're here to help plan your perfect adventure</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-8" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" data-aos="fade-up" data-aos-delay="200" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input type="email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" data-aos="fade-up" data-aos-delay="300" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea rows="4" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" data-aos="fade-up" data-aos-delay="400"></textarea>
            </div>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors" data-aos="zoom-in" data-aos-delay="500">
              Send Message
            </button>
          </form>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8" data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-2xl font-bold mb-6">Get in touch</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <Phone className="h-6 w-6 text-blue-600 mr-3 mt-1" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-600">+977-1123456789</p>
                <p className="text-sm text-gray-500">Mon-Fri 9AM-6PM</p>
              </div>
            </div>
            <div className="flex items-start">
              <Mail className="h-6 w-6 text-blue-600 mr-3 mt-1" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">support@tourexplorer.com</p>
                <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
              </div>
            </div>
            <div className="flex items-start">
              <MapPin className="h-6 w-6 text-blue-600 mr-3 mt-1" />
              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="text-gray-600">123 Adventure Street<br />Travel City, 12345</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ContactPage;