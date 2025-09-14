import React, { useState, useEffect } from 'react';
import { MapPin, Star, Clock, Shield, Camera, ArrowRight, Heart, Users, Award, Globe, Play, ChevronLeft, ChevronRight, Quote, CheckCircle, Calendar, Mountain, Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomePage = ({ setCurrentPage, tours = [], toggleFavorite, favorites = [], setSelectedTour }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentStat, setCurrentStat] = useState(0);

  // Sample data if not provided
  const sampleTours = [
    {
      id: 1,
      title: 'Everest Base Camp Trek',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop',
      category: 'Adventure',
      location: 'Khumbu Region, Nepal',
      price: 45000,
      rating: 4.9,
      reviews: 234,
      duration: '14 Days'
    },
    {
      id: 2,
      title: 'Annapurna Circuit Trek',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=500&h=300&fit=crop',
      category: 'Trekking',
      location: 'Annapurna Region, Nepal',
      price: 32000,
      rating: 4.8,
      reviews: 189,
      duration: '12 Days'
    },
    {
      id: 3,
      title: 'Kathmandu Cultural Tour',
      image: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=500&h=300&fit=crop',
      category: 'Cultural',
      location: 'Kathmandu Valley, Nepal',
      price: 8500,
      rating: 4.6,
      reviews: 156,
      duration: '3 Days'
    }
  ];

  const toursData = tours.length > 0 ? tours : sampleTours;

  const stats = [
    { number: '50,000+', label: 'Happy Travelers', icon: Users },
    { number: '15+', label: 'Years Experience', icon: Calendar },
    { number: '100+', label: 'Destinations', icon: Globe },
    { number: '98%', label: 'Satisfaction Rate', icon: Award }
  ];

  const testimonials = [
    {
      name: 'Sarah Shah',
      location: 'Bhaktapur, Nepal',
      text: 'The Everest Base Camp trek with TourExplorer was absolutely life-changing. The guides were incredible and the organization was flawless.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'Raj Gautham',
      location: 'Kathmandu, Nepal',
      text: 'Amazing cultural tour in Kathmandu! Got to experience authentic Nepalese culture and visit incredible temples. Highly recommended!',
      rating: 5,
      avatar: '👨‍💻'
    },
    {
      name: 'Emma Gurung',
      location: 'Pokhara, Nepal',
      text: 'The Annapurna Circuit was breathtaking. Perfect balance of adventure and comfort. The local guides made all the difference.',
      rating: 5,
      avatar: '👩‍🏔️'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Comprehensive insurance coverage and experienced local guides ensure your safety throughout the journey.',
      color: 'from-blue-600 to-blue-400'
    },
    {
      icon: Camera,
      title: 'Epic Experiences',
      description: 'Capture unforgettable moments with exclusive access to hidden gems and unique cultural experiences.',
      color: 'from-emerald-600 to-emerald-400'
    },
    {
      icon: Users,
      title: 'Expert Guides',
      description: 'Local experts passionate about sharing their knowledge and culture with fellow adventure seekers.',
      color: 'from-purple-600 to-purple-400'
    },
    {
      icon: Globe,
      title: 'Sustainable Tourism',
      description: 'Supporting local communities and preserving natural environments for future generations.',
      color: 'from-amber-600 to-amber-400'
    }
  ];

  const destinations = [
    {
      name: 'Nepal Himalayas',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      tours: 25,
      description: 'Majestic peaks and ancient cultures'
    },
    {
      name: 'Kathmandu Valley',
      image: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=400&h=300&fit=crop',
      tours: 12,
      description: 'UNESCO World Heritage sites'
    },
    {
      name: 'Pokhara Lakes',
      image: 'https://t4.ftcdn.net/jpg/02/93/00/71/240_F_293007175_ax5P4JMoRTOUy5MXEKtQ6en12bKxpaEF.jpg',
      tours: 8,
      description: 'Serene lakes and mountain views'
    },
    {
      name: 'Chitwan National Park',
      image: 'https://imgs.search.brave.com/t-tSXcabigYFRyH18ddEhzqgjpZ-77xqk-mfSB8OrVk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5ib29rbXVuZGku/Y29tL3RvdXIvZ3Jl/ZW4tcGFyay1jaGl0/d2FuLTQtZGF5cy0z/NDIyOTQtMTY0NDQ1/MzQzNS5qcGc_Zm9y/bWF0PWF1dG8mcXVh/bGl0eT03MCZ3aWR0/aD00ODA',
      tours: 6,
      description: 'Wildlife safari adventures'
    }
  ];

  const whyChooseUs = [
    'Expert local guides with deep cultural knowledge',
    'Small group sizes for personalized experiences',
    'Sustainable and responsible tourism practices',
    '24/7 customer support throughout your journey',
    'Comprehensive travel insurance included',
    'Authentic cultural immersion opportunities'
  ];

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });

    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    const statInterval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);

    return () => {
      clearInterval(testimonialInterval);
      clearInterval(statInterval);
    };
  }, [testimonials.length, stats.length]);

  const handleImageError = (e) => {
    e.target.src = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <img 
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop"
            alt="Nepal Mountains"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
            data-aos="fade-in"
          />
        </div>

        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-6">
          <div className="mb-8" data-aos="fade-up" data-aos-delay="100">
            <Mountain className="h-16 w-16 mx-auto mb-4 text-blue-200" data-aos="zoom-in" data-aos-delay="200" />
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
              Discover
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-cyan-200 to-teal-200">
                Nepal's Wonders
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-blue-100 leading-relaxed" data-aos="fade-up" data-aos-delay="300">
              From the towering peaks of the Himalayas to ancient cultural treasures, 
              embark on transformative journeys that create memories for a lifetime
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16" data-aos="fade-up" data-aos-delay="400">
            <button
              onClick={() => setCurrentPage('tours')}
              className="group bg-white text-blue-700 px-10 py-4 rounded-2xl text-lg font-bold hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-2xl flex items-center justify-center"
            >
              Start Your Adventure
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group border-2 border-white text-white px-10 py-4 rounded-2xl text-lg font-bold hover:bg-white hover:text-blue-700 transition-all duration-300 flex items-center justify-center">
              <Play className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
              Watch Our Story
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-md mx-auto" data-aos="zoom-in" data-aos-delay="500">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">{stats[currentStat].number}</div>
              <div className="text-blue-200 font-medium">{stats[currentStat].label}</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" data-aos="fade-up" data-aos-delay="600">
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center items-start">
            <div className="w-1.5 h-4 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </div>

      {/* Quick Stats Bar */}
      <div className="bg-blue-700 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center text-white" data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
                  <IconComponent className="h-8 w-8 mx-auto mb-2 text-blue-200" />
                  <div className="text-3xl font-bold mb-1">{stat.number}</div>
                  <div className="text-blue-200 text-sm font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Why Choose TourExplorer?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're not just another travel company. We're your partners in creating authentic, 
              sustainable, and transformative travel experiences.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="group relative p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                  data-aos="zoom-in"
                  data-aos-delay={100 * (index + 1)}
                >
                  <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r ${feature.color} w-16 h-16 rounded-full flex items-center justify-center shadow-lg`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="pt-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{feature.title}</h3>
                    <p className="text-gray-600 text-center leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Featured Destinations */}
      <div className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Explore Incredible Destinations</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From the world's highest peaks to ancient cultural sites, discover Nepal's diverse wonders
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {destinations.map((destination, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-delay={100 * (index + 1)}
              >
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="bg-blue-600 text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block">
                    {destination.tours} Tours
                  </div>
                  <h3 className="text-xl font-bold mb-2">{destination.name}</h3>
                  <p className="text-blue-100 text-sm">{destination.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Tours */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Featured Adventures</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Handpicked experiences that showcase the best of Nepal's natural beauty and cultural richness
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {toursData.slice(0, 3).map((tour, index) => (
              <div
                key={tour.id}
                className="group bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 border border-gray-100"
                data-aos="zoom-in"
                data-aos-delay={100 * (index + 1)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    onError={handleImageError}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <button
                    onClick={() => toggleFavorite && toggleFavorite(tour.id)}
                    className={`absolute top-4 right-4 p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-200 ${
                      favorites.includes(tour.id)
                        ? 'bg-red-500 text-white'
                        : 'bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white'
                    }`}
                  >
                    <Heart className="h-5 w-5" fill={favorites.includes(tour.id) ? 'currentColor' : 'none'} />
                  </button>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      {tour.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="text-sm font-medium">{tour.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-sm font-bold text-gray-700">{tour.rating}</span>
                      <span className="text-sm text-gray-500 ml-1">({tour.reviews})</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {tour.title}
                  </h3>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span className="text-sm font-medium">{tour.duration}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-blue-600">Rs. {tour.price.toLocaleString()}</span>
                      <span className="text-gray-500 text-sm block">per person</span>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => {
                      setSelectedTour && setSelectedTour(tour);
                      setCurrentPage && setCurrentPage('tour-detail');
                    }}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-bold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
                  >
                    Explore This Adventure
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="300">
            <button
              onClick={() => setCurrentPage && setCurrentPage('tours')}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-xl font-bold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Discover All Adventures
            </button>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-8">
                Why 50,000+ Travelers Choose Us
              </h2>
              <div className="space-y-4">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-start" data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{reason}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8" data-aos="fade-up" data-aos-delay="600">
                <button 
                  onClick={() => setCurrentPage && setCurrentPage('about')}
                  className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg"
                >
                  Learn More About Us
                </button>
              </div>
            </div>
            <div className="relative" data-aos="fade-left">
              <img
                src="https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=600&h=400&fit=crop"
                alt="Nepal Culture"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl" data-aos="zoom-in" data-aos-delay="200">
                <div className="text-3xl font-bold text-blue-600">15+</div>
                <div className="text-gray-600 font-medium">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-24 bg-blue-700">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-16" data-aos="fade-up">What Our Travelers Say</h2>
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-2xl" data-aos="zoom-in">
              <Quote className="h-12 w-12 text-blue-600 mx-auto mb-6" />
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                "{testimonials[currentTestimonial].text}"
              </p>
              <div className="flex items-center justify-center">
                <div className="text-4xl mr-4">{testimonials[currentTestimonial].avatar}</div>
                <div className="text-left">
                  <div className="font-bold text-gray-900">{testimonials[currentTestimonial].name}</div>
                  <div className="text-gray-600 text-sm">{testimonials[currentTestimonial].location}</div>
                  <div className="flex items-center mt-1">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center text-black" data-aos="fade-up">
          <h2 className="text-4xl font-extrabold mb-6">Ready for Your Next Adventure?</h2>
          <p className="text-xl mb-12 text-gray-600 leading-relaxed">
            Join thousands of satisfied travelers who have discovered Nepal's magic with us. 
            Your perfect adventure awaits - let's make it happen together.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center" data-aos="fade-up" data-aos-delay="200">
            <button 
              onClick={() => setCurrentPage && setCurrentPage('tours')}
              className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-lg transform hover:scale-105"
            >
              Explore All Tours
            </button>
            <button 
              onClick={() => setCurrentPage && setCurrentPage('contact')}
              className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-lg transform hover:scale-105"
            >
              Plan Custom Trip
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* About Section */}
            <div data-aos="fade-up">
              <h3 className="text-2xl font-bold mb-6">TourExplorer</h3>
              <p className="text-gray-300 leading-relaxed">
                Discover the wonders of Nepal with our expertly crafted tours. From Himalayan treks to cultural adventures, we create unforgettable experiences.
              </p>
            </div>

            {/* Quick Links */}
            <div data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => setCurrentPage && setCurrentPage('tours')}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    Our Tours
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setCurrentPage && setCurrentPage('about')}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setCurrentPage && setCurrentPage('contact')}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    Contact Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setCurrentPage && setCurrentPage('faq')}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    FAQ
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-xl font-bold mb-6">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-400 mr-3" />
                  <a href="mailto:info@tourexplorer.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                    info@tourexplorer.com
                  </a>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-400 mr-3" />
                  <a href="tel:+977123456789" className="text-gray-300 hover:text-blue-400 transition-colors">
                    +977 123 456 789
                  </a>
                </li>
                <li className="flex items-center">
                  <MapPin className="h-5 w-5 text-blue-400 mr-3" />
                  <span className="text-gray-300">Kathmandu, Nepal</span>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div data-aos="fade-up" data-aos-delay="300">
              <h3 className="text-xl font-bold mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-700 pt-8 text-center" data-aos="fade-up" data-aos-delay="400">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} TourExplorer. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;