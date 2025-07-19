import React, { useState } from 'react';
import { MapPin, Calendar, Users, Star, Clock, Camera, Shield, ArrowRight, Phone, Mail, Menu, X, Heart, Share2, Check } from 'lucide-react';

const TourBookingApp = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedTour, setSelectedTour] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [bookingData, setBookingData] = useState({
    date: '',
    guests: 1,
    name: '',
    email: '',
    phone: ''
  });

  // Sample tour data
  const tours = [
    {
      id: 1,
      title: "Himalayan Base Camp Trek",
      location: "Nepal",
      duration: "14 days",
      price: 2299,
      rating: 4.9,
      reviews: 342,
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop",
      description: "Experience the ultimate adventure with our Himalayan Base Camp Trek. Journey through breathtaking landscapes, encounter local Sherpa culture, and witness some of the world's highest peaks.",
      highlights: ["Professional mountain guides", "All meals included", "Camping equipment provided", "Cultural village visits"],
      includes: ["Accommodation", "All meals", "Professional guide", "Transportation", "Permits"],
      category: "Adventure"
    },
    {
      id: 2,
      title: "Tropical Island Paradise",
      location: "Maldives",
      duration: "7 days",
      price: 3499,
      rating: 4.8,
      reviews: 256,
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&h=600&fit=crop",
      description: "Escape to crystal clear waters and pristine beaches. Enjoy luxury accommodations, world-class diving, and unforgettable sunsets in this tropical paradise.",
      highlights: ["Luxury resort accommodation", "Snorkeling & diving", "Spa treatments", "Private beach access"],
      includes: ["5-star resort stay", "All meals & drinks", "Water sports", "Spa access", "Airport transfers"],
      category: "Luxury"
    },
    {
      id: 3,
      title: "European Cultural Journey",
      location: "Italy, France, Spain",
      duration: "12 days",
      price: 1899,
      rating: 4.7,
      reviews: 189,
      image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&h=600&fit=crop",
      description: "Discover the rich history and culture of Europe. Visit iconic landmarks, taste authentic cuisine, and immerse yourself in centuries of art and architecture.",
      highlights: ["Expert local guides", "Museum skip-the-line tickets", "Authentic local dining", "Historic city centers"],
      includes: ["4-star hotels", "Daily breakfast", "Guided tours", "Transportation", "Entry tickets"],
      category: "Cultural"
    },
    {
      id: 4,
      title: "African Safari Adventure",
      location: "Kenya, Tanzania",
      duration: "10 days",
      price: 2799,
      rating: 4.9,
      reviews: 298,
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=600&fit=crop",
      description: "Witness the great migration and encounter Africa's Big Five in their natural habitat. Stay in luxury safari lodges and experience the wilderness like never before.",
      highlights: ["Big Five game viewing", "Great migration experience", "Luxury safari lodges", "Professional safari guides"],
      includes: ["Safari lodge accommodation", "All meals", "Game drives", "Park fees", "Professional guide"],
      category: "Wildlife"
    }
  ];

  const handleBooking = (e) => {
    e.preventDefault();
    const newBooking = {
      id: Date.now(),
      tour: selectedTour,
      ...bookingData,
      status: 'confirmed',
      bookingDate: new Date().toLocaleDateString()
    };
    setBookings([...bookings, newBooking]);
    setCurrentPage('confirmation');
    setBookingData({ date: '', guests: 1, name: '', email: '', phone: '' });
  };

  const toggleFavorite = (tourId) => {
    if (favorites.includes(tourId)) {
      setFavorites(favorites.filter(id => id !== tourId));
    } else {
      setFavorites([...favorites, tourId]);
    }
  };

  // Navigation Component
  const Navigation = () => (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-blue-600 cursor-pointer" onClick={() => setCurrentPage('home')}>
                TourExplorer
              </h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <button onClick={() => setCurrentPage('home')} className={`px-3 py-2 text-sm font-medium Rs.{currentPage === 'home' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`}>
                  Home
                </button>
                <button onClick={() => setCurrentPage('tours')} className={`px-3 py-2 text-sm font-medium Rs.{currentPage === 'tours' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`}>
                  Tours
                </button>
                <button onClick={() => setCurrentPage('about')} className={`px-3 py-2 text-sm font-medium Rs.{currentPage === 'about' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`}>
                  About
                </button>
                <button onClick={() => setCurrentPage('contact')} className={`px-3 py-2 text-sm font-medium Rs.{currentPage === 'contact' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`}>
                  Contact
                </button>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <button onClick={() => setCurrentPage('account')} className="text-gray-600 hover:text-blue-600">
                  My Account
                </button>
                <button onClick={() => setUser(null)} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors">
                  Logout
                </button>
              </div>
            ) : (
              <button onClick={() => setCurrentPage('login')} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Login
              </button>
            )}
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <button onClick={() => { setCurrentPage('home'); setIsMenuOpen(false); }} className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600">Home</button>
            <button onClick={() => { setCurrentPage('tours'); setIsMenuOpen(false); }} className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600">Tours</button>
            <button onClick={() => { setCurrentPage('about'); setIsMenuOpen(false); }} className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600">About</button>
            <button onClick={() => { setCurrentPage('contact'); setIsMenuOpen(false); }} className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600">Contact</button>
          </div>
        </div>
      )}
    </nav>
  );

  // Home Page
  const HomePage = () => (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Discover Amazing
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Adventures
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Explore breathtaking destinations and create unforgettable memories with our curated tour experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setCurrentPage('tours')} 
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Explore Tours <ArrowRight className="inline ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
              Watch Video
            </button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose TourExplorer?</h2>
            <p className="text-xl text-gray-600">Experience the difference with our premium tour services</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Safe & Secure</h3>
              <p className="text-gray-600">Your safety is our priority. All tours are conducted with the highest safety standards and experienced guides.</p>
            </div>
            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-green-500 to-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Camera className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Memorable Experiences</h3>
              <p className="text-gray-600">Create lasting memories with our carefully curated experiences and photo opportunities at every destination.</p>
            </div>
            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-orange-500 to-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer support ensures you're never alone during your journey with us.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Tours */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Tours</h2>
            <p className="text-xl text-gray-600">Discover our most popular destinations</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.slice(0, 3).map(tour => (
              <div key={tour.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative overflow-hidden">
                  <img src={tour.image} alt={tour.title} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute top-4 right-4">
                    <button 
                      onClick={() => toggleFavorite(tour.id)}
                      className={`p-2 rounded-full Rs.{favorites.includes(tour.id) ? 'bg-red-500 text-white' : 'bg-white text-gray-600'} hover:bg-red-500 hover:text-white transition-colors`}
                    >
                      <Heart className="h-5 w-5" />
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
                  <h3 className="text-xl font-bold mb-2 hover:text-blue-600 cursor-pointer">{tour.title}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="text-sm">{tour.duration}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-blue-600">Rs.{tour.price}</span>
                      <span className="text-gray-600 text-sm block">per person</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => { setSelectedTour(tour); setCurrentPage('tour-detail'); }}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button 
              onClick={() => setCurrentPage('tours')}
              className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              View All Tours
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Tours Listing Page
  const ToursPage = () => {
    const [filterCategory, setFilterCategory] = useState('All');
    const categories = ['All', 'Adventure', 'Luxury', 'Cultural', 'Wildlife'];
    
    const filteredTours = filterCategory === 'All' ? tours : tours.filter(tour => tour.category === filterCategory);

    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">All Tours</h1>
            <p className="text-xl text-gray-600">Choose your perfect adventure</p>
          </div>
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setFilterCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-colors Rs.{
                  filterCategory === category 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-gray-600 hover:bg-blue-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTours.map(tour => (
              <div key={tour.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img src={tour.image} alt={tour.title} className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300" />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button 
                      onClick={() => toggleFavorite(tour.id)}
                      className={`p-2 rounded-full Rs.{favorites.includes(tour.id) ? 'bg-red-500 text-white' : 'bg-white text-gray-600'} hover:bg-red-500 hover:text-white transition-colors`}
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
                      <span className="text-2xl font-bold text-blue-600">Rs.{tour.price}</span>
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

  // Tour Detail Page
  const TourDetailPage = () => {
    if (!selectedTour) return <div>Tour not found</div>;

    return (
      <div className="min-h-screen bg-gray-50">
        {/* Hero Image */}
        <div className="relative h-96 md:h-[500px] overflow-hidden">
          <img src={selectedTour.image} alt={selectedTour.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute bottom-8 left-8 text-white">
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
            <div className="lg:col-span-2">
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
                      className={`p-3 rounded-full Rs.{favorites.includes(selectedTour.id) ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-600'} hover:bg-red-500 hover:text-white transition-colors`}
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
                    <li key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold mb-4">What's Included</h3>
                <ul className="grid md:grid-cols-2 gap-3">
                  {selectedTour.includes.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Booking Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-8 sticky top-8">
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-blue-600">Rs.{selectedTour.price}</span>
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
                    <span className="text-sm text-gray-600">+1 (555) 123-4567</span>
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

  // Booking Page
  const BookingPage = () => {
    if (!selectedTour) return <div>Please select a tour first</div>;

    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Complete Your Booking</h1>
            <p className="text-gray-600">You're one step away from your adventure!</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <form onSubmit={handleBooking}>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Travel Date</label>
                      <input
                        type="date"
                        value={bookingData.date}
                        onChange={(e) => setBookingData({...bookingData, date: e.target.value})}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Number of Guests</label>
                      <select
                        value={bookingData.guests}
                        onChange={(e) => setBookingData({...bookingData, guests: parseInt(e.target.value)})}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        {[1,2,3,4,5,6,7,8].map(num => (
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
                        onChange={(e) => setBookingData({...bookingData, name: e.target.value})}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <input
                        type="email"
                        value={bookingData.email}
                        onChange={(e) => setBookingData({...bookingData, email: e.target.value})}
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
                      onChange={(e) => setBookingData({...bookingData, phone: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-4 rounded-lg font-semibold text-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                  >
                    Confirm Booking
                  </button>
                </form>
              </div>
            </div>

            {/* Booking Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
                <h3 className="text-xl font-bold mb-4">Booking Summary</h3>
                <div className="mb-4">
                  <img src={selectedTour.image} alt={selectedTour.title} className="w-full h-32 object-cover rounded-lg mb-3" />
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
                    <span>Rs.{selectedTour.price}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Guests:</span>
                    <span>{bookingData.guests}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg border-t pt-2">
                    <span>Total:</span>
                    <span>Rs.{selectedTour.price * bookingData.guests}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Confirmation Page
  const ConfirmationPage = () => (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
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
            >
              Back to Home
            </button>
            <button 
              onClick={() => setCurrentPage('account')}
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              View My Bookings
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Login Page
  const LoginPage = () => {
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    
    const handleLogin = (e) => {
      e.preventDefault();
      setUser({ name: 'John Doe', email: loginData.email });
      setCurrentPage('home');
    };

    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-md mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
              <p className="text-gray-600">Sign in to your account</p>
            </div>

            <form onSubmit={handleLogin}>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  value={loginData.email}
                  onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  value={loginData.password}
                  onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Sign In
              </button>
            </form>

            <div className="text-center mt-6">
              <p className="text-gray-600">
                Don't have an account? 
                <button className="text-blue-600 hover:underline ml-1">Sign up</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Account Page
  const AccountPage = () => (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Account</h1>
          <p className="text-gray-600">Manage your bookings and preferences</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
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
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">My Bookings</h2>
              {bookings.length === 0 ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No bookings yet</h3>
                  <p className="text-gray-600 mb-6">Start exploring our amazing tours and create your first booking!</p>
                  <button 
                    onClick={() => setCurrentPage('tours')}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Browse Tours
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {bookings.map(booking => (
                    <div key={booking.id} className="border rounded-lg p-6">
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
                          <span className="font-medium">Total:</span> Rs.{booking.tour.price * booking.guests}
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

  // About Page
  const AboutPage = () => (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About TourExplorer</h1>
          <p className="text-xl text-gray-600">Crafting unforgettable travel experiences since 2010</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
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
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
            <h3 className="font-semibold mb-2">Years of Experience</h3>
            <p className="text-gray-600 text-sm">Crafting perfect travel experiences</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">50k+</div>
            <h3 className="font-semibold mb-2">Happy Travelers</h3>
            <p className="text-gray-600 text-sm">Satisfied customers worldwide</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
            <h3 className="font-semibold mb-2">Destinations</h3>
            <p className="text-gray-600 text-sm">Across 6 continents</p>
          </div>
        </div>
      </div>
    </div>
  );

  // Contact Page
  const ContactPage = () => (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">We're here to help plan your perfect adventure</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea rows="4" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"></textarea>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Send Message
              </button>
            </form>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Get in touch</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-600">+977-123456789</p>
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
                  <p className="text-gray-600">123 Adventure Street<br />Travel City, TC 12345</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Main App Render
  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage />;
      case 'tours': return <ToursPage />;
      case 'tour-detail': return <TourDetailPage />;
      case 'booking': return <BookingPage />;
      case 'confirmation': return <ConfirmationPage />;
      case 'login': return <LoginPage />;
      case 'account': return <AccountPage />;
      case 'about': return <AboutPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      {renderPage()}
    </div>
  );
};

export default TourBookingApp;