import React from 'react';

const AboutPage = () => (
  <div className="min-h-screen bg-gray-50 py-12">
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center mb-12" data-aos="fade-up">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About TourExplorer</h1>
        <p className="text-xl text-gray-600">Crafting unforgettable travel experiences since 2010</p>
      </div>
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8" data-aos="fade-up" data-aos-delay="100">
        <h2 className="text-2xl font-bold mb-6">Our Story</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          TourExplorer was founded with a simple mission: to make extraordinary travel experiences accessible to everyone.
          Our team of passionate travel experts curates unique adventures that go beyond typical tourist destinations,
          focusing on authentic cultural experiences and sustainable tourism practices.
        </p>
        <p className="text-gray-600 leading-relaxed">
          With over a decade of experience in the travel industry, we've helped thousands of travelers discover hidden gems,
          create lasting memories, and connect with diverse cultures around the world. Every tour is carefully designed to
          provide the perfect balance of adventure, comfort, and cultural immersion.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-6 text-center" data-aos="fade-up" data-aos-delay="200">
          <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
          <h3 className="font-semibold mb-2">Years of Experience</h3>
          <p className="text-gray-600 text-sm">Crafting perfect travel experiences</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 text-center" data-aos="fade-up" data-aos-delay="300">
          <div className="text-3xl font-bold text-blue-600 mb-2">50k+</div>
          <h3 className="font-semibold mb-2">Happy Travelers</h3>
          <p className="text-gray-600 text-sm">Satisfied customers worldwide</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 text-center" data-aos="fade-up" data-aos-delay="400">
          <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
          <h3 className="font-semibold mb-2">Destinations</h3>
          <p className="text-gray-600 text-sm">Across 6 continents</p>
        </div>
      </div>
    </div>
  </div>
);

export default AboutPage;