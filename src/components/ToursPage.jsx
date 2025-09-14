import React, { useState, useEffect } from 'react';
import { MapPin, Star, Clock, Heart, Share2, Filter, Search, Users, Calendar, ArrowUpDown, Grid, List, X } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ToursPage = ({ tours = [], setCurrentPage, setSelectedTour, toggleFavorite, favorites = [] }) => {
  const [filterCategory, setFilterCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  const [filteredTours, setFilteredTours] = useState(tours);

  const categories = ['All', 'Adventure', 'Luxury', 'Cultural', 'Wildlife', 'Eco-Tourism', 'Spiritual', 'Trekking', 'City Tours'];
  
  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'duration', label: 'Duration' },
    { value: 'newest', label: 'Newest First' }
  ];

  const sampleTours = [
    {
      id: 1,
      title: 'Everest Base Camp Trek',
      description: 'Experience the ultimate adventure with a trek to the base camp of the world\'s highest mountain. This journey offers breathtaking views of the Himalayas and an unforgettable cultural experience.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop',
      category: 'Adventure',
      location: 'Khumbu Region, Nepal',
      price: 45000,
      rating: 4.9,
      reviews: 234,
      duration: '14 Days',
      groupSize: '8-12 people',
      difficulty: 'Challenging',
      highlights: ['Mount Everest Views', 'Sherpa Culture', 'Namche Bazaar']
    },
    {
      id: 2,
      title: 'Annapurna Circuit Trek',
      description: 'A classic trek through diverse landscapes, from subtropical forests to high alpine terrain. Experience local culture and stunning mountain views.',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=500&h=300&fit=crop',
      category: 'Trekking',
      location: 'Annapurna Region, Nepal',
      price: 32000,
      rating: 4.8,
      reviews: 189,
      duration: '12 Days',
      groupSize: '6-10 people',
      difficulty: 'Moderate',
      highlights: ['Thorong La Pass', 'Hot Springs', 'Ancient Villages']
    },
    {
      id: 3,
      title: 'Kathmandu Cultural Tour',
      description: 'Explore the rich cultural heritage of Nepal\'s capital city. Visit UNESCO World Heritage sites and experience traditional Nepalese culture.',
      image: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=500&h=300&fit=crop',
      category: 'Cultural',
      location: 'Kathmandu Valley, Nepal',
      price: 8500,
      rating: 4.6,
      reviews: 156,
      duration: '3 Days',
      groupSize: '4-15 people',
      difficulty: 'Easy',
      highlights: ['Durbar Squares', 'Temples', 'Local Markets']
    },
    {
      id: 4,
      title: 'Chitwan Safari Adventure',
      description: 'Discover Nepal\'s wildlife in Chitwan National Park. Spot rhinos, tigers, and exotic birds in their natural habitat.',
      image: 'https://images.unsplash.com/photo-1549366021-9f761d040a94?w=500&h=300&fit=crop',
      category: 'Wildlife',
      location: 'Chitwan National Park, Nepal',
      price: 15000,
      rating: 4.7,
      reviews: 98,
      duration: '4 Days',
      groupSize: '6-12 people',
      difficulty: 'Easy',
      highlights: ['Jungle Safari', 'Elephant Bathing', 'Bird Watching']
    },
    {
      id: 5,
      title: 'Pokhara Lake District',
      description: 'Relax by the serene Phewa Lake with stunning views of the Annapurna range. Perfect for leisure travelers seeking natural beauty.',
      image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=500&h=300&fit=crop',
      category: 'Luxury',
      location: 'Pokhara, Nepal',
      price: 18500,
      rating: 4.5,
      reviews: 142,
      duration: '5 Days',
      groupSize: '2-8 people',
      difficulty: 'Easy',
      highlights: ['Lake Activities', 'Mountain Views', 'Luxury Hotels']
    },
    {
      id: 6,
      title: 'Lumbini Spiritual Journey',
      description: 'Visit the birthplace of Lord Buddha and explore ancient monasteries. A peaceful spiritual experience for mind and soul.',
      image: 'https://images.unsplash.com/photo-1571779520274-af3d5af8e0b1?w=500&h=300&fit=crop',
      category: 'Spiritual',
      location: 'Lumbini, Nepal',
      price: 12000,
      rating: 4.4,
      reviews: 87,
      duration: '3 Days',
      groupSize: '4-10 people',
      difficulty: 'Easy',
      highlights: ['Maya Devi Temple', 'Meditation Sessions', 'Peace Pagoda']
    }
  ];

  const toursData = tours.length > 0 ? tours : sampleTours;

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 0,
      delay: 0,
    });
    AOS.refresh();

    let result = toursData;
    if (filterCategory !== 'All') {
      result = result.filter(tour => tour.category === filterCategory);
    }
    if (searchTerm) {
      result = result.filter(tour =>
        tour.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tour.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tour.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    result = result.filter(tour => tour.price >= priceRange[0] && tour.price <= priceRange[1]);
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'duration':
        result.sort((a, b) => parseInt(a.duration) - parseInt(b.duration));
        break;
      default:
        break;
    }
    setFilteredTours(result);
  }, [filterCategory, searchTerm, sortBy, priceRange, toursData]);

  const handleImageError = (e) => {
    e.target.src = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop';
  };

  const clearAllFilters = () => {
    setFilterCategory('All');
    setSearchTerm('');
    setSortBy('featured');
    setPriceRange([0, 100000]);
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-100';
      case 'Moderate': return 'text-yellow-600 bg-yellow-100';
      case 'Challenging': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const TourCard = ({ tour, index }) => (
    <div
      className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20 ${
        viewMode === 'list' ? 'flex' : ''
      }`}
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-80 flex-shrink-0' : ''}`}>
        <img
          src={tour.image}
          alt={tour.title}
          onError={handleImageError}
          className={`object-cover hover:scale-110 transition-transform duration-300 ${
            viewMode === 'list' ? 'w-full h-full' : 'w-full h-64'
          }`}
        />
        <div className="absolute top-4 right-4 flex gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleFavorite && toggleFavorite(tour.id);
            }}
            className={`p-2 rounded-full backdrop-blur-sm ${
              favorites.includes(tour.id) 
                ? 'bg-red-500 text-white' 
                : 'bg-white/80 text-gray-600'
            } hover:bg-red-500 hover:text-white transition-colors shadow-lg`}
          >
            <Heart className="h-4 w-4" fill={favorites.includes(tour.id) ? 'currentColor' : 'none'} />
          </button>
          <button className="p-2 rounded-full bg-white/80 text-gray-600 hover:bg-gray-100 transition-colors backdrop-blur-sm shadow-lg">
            <Share2 className="h-4 w-4" />
          </button>
        </div>
        <div className="absolute bottom-4 left-4 flex gap-2">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
            {tour.category}
          </span>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(tour.difficulty)}`}>
            {tour.difficulty}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex-1">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center text-gray-600">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm">{tour.location}</span>
          </div>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
            <span className="text-sm font-medium text-gray-700">{tour.rating}</span>
            <span className="text-sm text-gray-500 ml-1">({tour.reviews})</span>
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-3 text-gray-800">{tour.title}</h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">{tour.description}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center text-gray-600">
            <Clock className="h-4 w-4 mr-2" />
            <span className="text-sm">{tour.duration}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Users className="h-4 w-4 mr-2" />
            <span className="text-sm">{tour.groupSize}</span>
          </div>
        </div>

        {tour.highlights && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-1">
              {tour.highlights.slice(0, 3).map((highlight, idx) => (
                <span key={idx} className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full">
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        )}
        
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-2xl font-bold text-blue-600">Rs. {tour.price.toLocaleString()}</span>
            <span className="text-gray-600 text-sm block">per person</span>
          </div>
        </div>
        
        <button
          onClick={() => {
            setSelectedTour && setSelectedTour(tour);
            setCurrentPage && setCurrentPage('tour-detail');
          }}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
        >
          View Details & Book
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 
            className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            Discover Amazing Tours
          </h1>
          <p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            Choose from our curated collection of extraordinary travel experiences designed to create memories that last a lifetime
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 mb-8 border border-white/20" data-aos="fade-up">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="relative flex-1" data-aos="fade-right" data-aos-delay="100">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search tours, destinations, activities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 focus:bg-white transition-colors"
              />
            </div>
            
            <div className="flex items-center gap-2" data-aos="fade-up" data-aos-delay="200">
              <ArrowUpDown className="h-5 w-5 text-gray-500" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 focus:bg-white transition-colors"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>

            <div className="flex bg-gray-100 rounded-xl p-1" data-aos="fade-up" data-aos-delay="300">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-white shadow-sm' : ''}`}
              >
                <Grid className="h-5 w-5 text-gray-600" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-white shadow-sm' : ''}`}
              >
                <List className="h-5 w-5 text-gray-600" />
              </button>
            </div>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
              data-aos="fade-left" data-aos-delay="400"
            >
              <Filter className="h-5 w-5" />
              Filters
            </button>
          </div>
        </div>

        {showFilters && (
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 mb-8 border border-white/20" data-aos="fade-up" data-aos-delay="100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-800">Filters</h3>
              <div className="flex gap-2">
                <button
                  onClick={clearAllFilters}
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  Clear All
                </button>
                <button
                  onClick={() => setShowFilters(false)}
                  className="p-1 text-gray-500 hover:text-gray-700"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
            
            <div className="mb-6" data-aos="fade-up" data-aos-delay="200">
              <h4 className="font-medium text-gray-700 mb-3">Categories</h4>
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <button
                    key={category}
                    onClick={() => setFilterCategory(category)}
                    className={`px-4 py-2 rounded-full font-medium transition-all ${
                      filterCategory === category
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-600'
                    }`}
                    data-aos="fade-up"
                    data-aos-delay={index * 50}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="300">
              <h4 className="font-medium text-gray-700 mb-3">Price Range</h4>
              <div className="flex items-center gap-4">
                <input
                  type="number"
                  placeholder="Min"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                  className="w-32 px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <span className="text-gray-500">to</span>
                <input
                  type="number"
                  placeholder="Max"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 100000])}
                  className="w-32 px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <span className="text-gray-500">NPR</span>
              </div>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between mb-6" data-aos="fade-up" data-aos-delay="100">
          <p className="text-gray-600">
            Showing {filteredTours.length} of {toursData.length} tours
          </p>
          {(filterCategory !== 'All' || searchTerm) && (
            <button
              onClick={clearAllFilters}
              className="text-blue-600 hover:text-blue-700 font-medium text-sm"
            >
              Clear filters
            </button>
          )}
        </div>

        {filteredTours.length > 0 ? (
          <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
            {filteredTours.map((tour, index) => (
              <TourCard key={tour.id} tour={tour} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16" data-aos="fade-up" data-aos-delay="200">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">No tours found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your filters or search terms</p>
            <button
              onClick={clearAllFilters}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ToursPage;