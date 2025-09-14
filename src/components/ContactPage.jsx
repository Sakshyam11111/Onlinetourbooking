import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6" data-aos="fade-up" data-aos-delay="100">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="200">
            We're here to help plan your perfect adventure. Get in touch and let's make your travel dreams come true.
          </p>
        </div>

        {/* Success Message */}
        {submitted && (
          <div className="mb-8 bg-green-50 border border-green-200 rounded-xl p-4 flex items-center justify-center text-green-700" data-aos="zoom-in">
            <CheckCircle className="h-5 w-5 mr-2" />
            Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2" data-aos="fade-left">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 hover:shadow-2xl transition-all duration-300">
              <h2 className="text-3xl font-bold mb-8 text-gray-800" data-aos="fade-up" data-aos-delay="100">
                Send us a message
              </h2>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div data-aos="fade-up" data-aos-delay="200">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full p-4 border-2 rounded-xl transition-all duration-200 focus:outline-none ${
                        errors.name 
                          ? 'border-red-300 focus:border-red-500 bg-red-50' 
                          : 'border-gray-200 focus:border-blue-500 bg-gray-50 focus:bg-white'
                      }`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <p className="mt-2 text-sm text-red-600 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div data-aos="fade-up" data-aos-delay="300">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full p-4 border-2 rounded-xl transition-all duration-200 focus:outline-none ${
                        errors.email 
                          ? 'border-red-300 focus:border-red-500 bg-red-50' 
                          : 'border-gray-200 focus:border-blue-500 bg-gray-50 focus:bg-white'
                      }`}
                      placeholder="Enter your email address"
                    />
                    {errors.email && (
                      <p className="mt-2 text-sm text-red-600 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="400">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full p-4 border-2 rounded-xl transition-all duration-200 focus:outline-none resize-none ${
                      errors.message 
                        ? 'border-red-300 focus:border-red-500 bg-red-50' 
                        : 'border-gray-200 focus:border-blue-500 bg-gray-50 focus:bg-white'
                    }`}
                    placeholder="Tell us about your travel plans, questions, or how we can help you..."
                  />
                  {errors.message && (
                    <p className="mt-2 text-sm text-red-600 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.message}
                    </p>
                  )}
                </div>
                <div data-aos="zoom-in" data-aos-delay="500">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-[1.02] flex items-center justify-center space-x-2 shadow-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6" data-aos="fade-right">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 hover:shadow-2xl transition-all duration-300">
              <h2 className="text-2xl font-bold mb-8 text-gray-800" data-aos="fade-up" data-aos-delay="100">
                Get in touch
              </h2>
              <div className="space-y-8">
                <div className="flex items-start group" data-aos="fade-up" data-aos-delay="200">
                  <div className="bg-blue-100 p-3 rounded-xl group-hover:bg-blue-200 transition-colors">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                    <p className="text-gray-600 font-medium">+977-1123456789</p>
                    <p className="text-sm text-gray-500">Mon-Fri 9AM-6PM NPT</p>
                  </div>
                </div>
                <div className="flex items-start group" data-aos="fade-up" data-aos-delay="300">
                  <div className="bg-green-100 p-3 rounded-xl group-hover:bg-green-200 transition-colors">
                    <Mail className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600 font-medium">support@tourexplorer.com</p>
                    <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start group" data-aos="fade-up" data-aos-delay="400">
                  <div className="bg-purple-100 p-3 rounded-xl group-hover:bg-purple-200 transition-colors">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-800 mb-1">Office</h3>
                    <p className="text-gray-600 font-medium">
                      123 Adventure Street<br />
                      Thamel, Kathmandu 44600<br />
                      Nepal
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Response Times */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-6 text-white" data-aos="zoom-in" data-aos-delay="500">
              <h3 className="text-xl font-bold mb-4">Quick Response Promise</h3>
              <div className="space-y-3 text-blue-100">
                <div className="flex items-center" data-aos="fade-up" data-aos-delay="600">
                  <CheckCircle className="h-5 w-5 mr-2 text-blue-200" />
                  <span>Email responses within 24 hours</span>
                </div>
                <div className="flex items-center" data-aos="fade-up" data-aos-delay="700">
                  <CheckCircle className="h-5 w-5 mr-2 text-blue-200" />
                  <span>Phone support during business hours</span>
                </div>
                <div className="flex items-center" data-aos="fade-up" data-aos-delay="800">
                  <CheckCircle className="h-5 w-5 mr-2 text-blue-200" />
                  <span>Emergency contact available 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;