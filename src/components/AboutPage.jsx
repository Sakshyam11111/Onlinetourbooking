import React, { useState, useEffect } from 'react';
import { Users, Award, Globe, Heart, Star, MapPin, Calendar, Shield, Leaf, Camera } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('story');

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      easing: 'ease-in-out', // Smooth easing
      once: true, // Animations occur only once
    });
  }, []);

  const stats = [
    { number: '15+', label: 'Years of Experience', description: 'Crafting perfect travel experiences', icon: Calendar },
    { number: '50k+', label: 'Happy Travelers', description: 'Satisfied customers worldwide', icon: Users },
    { number: '100+', label: 'Destinations', description: 'Across 6 continents', icon: MapPin },
    { number: '500+', label: 'Tour Packages', description: 'Unique experiences available', icon: Globe }
  ];

  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      image: '👩‍💼',
      description: 'With 20+ years in travel industry, Sarah founded TourExplorer to make authentic travel accessible to all.',
      specialization: 'Cultural Tourism & Sustainable Travel'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Operations',
      image: '👨‍💻',
      description: 'Michael ensures every tour runs smoothly with his expertise in logistics and customer service.',
      specialization: 'Tour Operations & Quality Management'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Adventure Specialist',
      image: '👩‍🏔️',
      description: 'Emma designs our most thrilling adventures, from mountain treks to deep-sea explorations.',
      specialization: 'Adventure Tourism & Safety Protocols'
    },
    {
      name: 'David Kim',
      role: 'Cultural Ambassador',
      image: '👨‍🎓',
      description: 'David connects travelers with local communities and authentic cultural experiences.',
      specialization: 'Cultural Exchange & Local Partnerships'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Authentic Experiences',
      description: 'We believe in genuine connections with local cultures and communities, avoiding tourist traps.'
    },
    {
      icon: Leaf,
      title: 'Sustainable Tourism',
      description: 'Our tours support local economies and preserve natural environments for future generations.'
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Your safety is our top priority with comprehensive insurance and experienced local guides.'
    },
    {
      icon: Star,
      title: 'Excellence',
      description: 'We maintain the highest standards in service quality and customer satisfaction.'
    }
  ];

  const achievements = [
    { year: '2010', title: 'Company Founded', description: 'TourExplorer begins with a mission to democratize travel' },
    { year: '2013', title: 'First International Award', description: 'Best Emerging Travel Company - Asia Pacific' },
    { year: '2016', title: '10,000 Travelers Milestone', description: 'Celebrated serving our 10,000th happy customer' },
    { year: '2019', title: 'Sustainability Certification', description: 'Achieved Global Sustainable Tourism Council recognition' },
    { year: '2021', title: 'Digital Innovation Award', description: 'Recognized for pioneering virtual travel experiences' },
    { year: '2023', title: '50,000 Travelers', description: 'Reached 50,000 satisfied customers worldwide' }
  ];

  const tabContent = {
    story: (
      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-8 items-center" data-aos="fade-up">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Beginning</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              TourExplorer was born from a simple yet powerful vision: to make extraordinary travel experiences accessible to everyone. 
              Founded in 2010 by a group of passionate travelers who were frustrated with cookie-cutter tour packages, we set out to 
              create something different.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our founders had traveled extensively but noticed that most tours missed the essence of what makes a destination special - 
              the local people, hidden gems, and authentic cultural experiences that create lasting memories.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8 text-center" data-aos="fade-left" data-aos-delay="100">
            <div className="text-6xl mb-4">🌍</div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">Our Mission</h4>
            <p className="text-gray-600">Creating authentic, sustainable, and transformative travel experiences that connect people with cultures and communities worldwide.</p>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-2xl p-8" data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">What Makes Us Different</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start" data-aos="fade-right" data-aos-delay="300">
              <Camera className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Local Partnerships</h4>
                <p className="text-gray-600 text-sm">We work directly with local communities, ensuring your travel supports the people and places you visit.</p>
              </div>
            </div>
            <div className="flex items-start" data-aos="fade-left" data-aos-delay="400">
              <Leaf className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Sustainable Practices</h4>
                <p className="text-gray-600 text-sm">Every tour is designed with environmental and cultural sustainability at its core.</p>
              </div>
            </div>
            <div className="flex items-start" data-aos="fade-right" data-aos-delay="500">
              <Users className="h-6 w-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Small Groups</h4>
                <p className="text-gray-600 text-sm">Intimate group sizes ensure personalized attention and minimal environmental impact.</p>
              </div>
            </div>
            <div className="flex items-start" data-aos="fade-left" data-aos-delay="600">
              <Award className="h-6 w-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Expert Guides</h4>
                <p className="text-gray-600 text-sm">Local experts who are passionate about sharing their culture and knowledge with visitors.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    team: (
      <div className="grid md:grid-cols-2 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100" data-aos="fade-up" data-aos-delay={index * 100}>
            <div className="text-center mb-4">
              <div className="text-6xl mb-3">{member.image}</div>
              <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
              <p className="text-blue-600 font-medium">{member.role}</p>
            </div>
            <p className="text-gray-600 text-sm mb-3 leading-relaxed">{member.description}</p>
            <div className="bg-blue-50 rounded-lg p-3">
              <p className="text-blue-700 text-xs font-medium">Specialization:</p>
              <p className="text-blue-600 text-sm">{member.specialization}</p>
            </div>
          </div>
        ))}
      </div>
    ),
    timeline: (
      <div className="space-y-8">
        {achievements.map((achievement, index) => (
          <div key={index} className="flex items-start" data-aos="fade-right" data-aos-delay={index * 100}>
            <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-sm mr-6 flex-shrink-0">
              {achievement.year}
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{achievement.title}</h3>
              <p className="text-gray-600">{achievement.description}</p>
            </div>
          </div>
        ))}
      </div>
    )
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            About TourExplorer
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Crafting unforgettable travel experiences since 2010. We're not just a travel company - 
            we're your partners in discovering the world's hidden treasures and creating memories that last a lifetime.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 text-center hover:shadow-2xl transition-all duration-300 group border border-white/20" data-aos="zoom-in" data-aos-delay={index * 100}>
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <IconComponent className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <h3 className="font-semibold text-gray-800 mb-2">{stat.label}</h3>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </div>
            );
          })}
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8" data-aos="fade-up">
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-100">
            {[
              { key: 'story', label: 'Our Story' },
              { key: 'team', label: 'Meet the Team' },
              { key: 'timeline', label: 'Our Journey' }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                  activeTab === tab.key
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-16 border border-white/20" data-aos="fade-up" data-aos-delay="100">
          {tabContent[activeTab]}
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800" data-aos="fade-down">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 text-center hover:shadow-2xl transition-all duration-300 group border border-white/20" data-aos="zoom-in" data-aos-delay={index * 100}>
                  <div className="bg-gradient-to-br from-blue-100 to-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-blue-200 group-hover:to-indigo-200 transition-all">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-2xl p-8 text-center text-white" data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Adventure?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join thousands of travelers who have discovered the world with TourExplorer. 
            Let us craft your perfect journey filled with authentic experiences and unforgettable memories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors shadow-lg" data-aos="zoom-in" data-aos-delay="300">
              Browse Tours
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors" data-aos="zoom-in" data-aos-delay="400">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;