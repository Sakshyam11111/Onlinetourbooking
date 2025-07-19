import React, { useState } from 'react';
import { tours } from './data/toursData';
import MainLayout from './components/MainLayout';

const App = () => {
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

  return (
    <MainLayout
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      selectedTour={selectedTour}
      setSelectedTour={setSelectedTour}
      isMenuOpen={isMenuOpen}
      setIsMenuOpen={setIsMenuOpen}
      user={user}
      setUser={setUser}
      bookings={bookings}
      setBookings={setBookings}
      favorites={favorites}
      toggleFavorite={toggleFavorite}
      bookingData={bookingData}
      setBookingData={setBookingData}
      handleBooking={handleBooking}
      tours={tours}
    />
  );
};

export default App;