import React from 'react';
import Navigation from './Navigation';
import HomePage from './HomePage';
import ToursPage from './ToursPage';
import TourDetailPage from './TourDetailPage';
import BookingPage from './BookingPage';
import ConfirmationPage from './ConfirmationPage';
import LoginPage from './LoginPage';
import AccountPage from './AccountPage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import SignUpPage from './SignUpPage';

const MainLayout = ({
  currentPage,
  setCurrentPage,
  selectedTour,
  setSelectedTour,
  isMenuOpen,
  setIsMenuOpen,
  user,
  setUser,
  bookings,
  favorites,
  toggleFavorite,
  bookingData,
  setBookingData,
  handleBooking,
  tours
}) => {
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            setCurrentPage={setCurrentPage}
            tours={tours}
            toggleFavorite={toggleFavorite}
            favorites={favorites}
            setSelectedTour={setSelectedTour}
          />
        );
      case 'tours':
        return (
          <ToursPage
            tours={tours}
            setCurrentPage={setCurrentPage}
            setSelectedTour={setSelectedTour}
            toggleFavorite={toggleFavorite}
            favorites={favorites}
          />
        );
      case 'tour-detail':
        return (
          <TourDetailPage
            selectedTour={selectedTour}
            setCurrentPage={setCurrentPage}
            toggleFavorite={toggleFavorite}
            favorites={favorites}
          />
        );
      case 'booking':
        return (
          <BookingPage
            selectedTour={selectedTour}
            bookingData={bookingData}
            setBookingData={setBookingData}
            handleBooking={handleBooking}
          />
        );
      case 'confirmation':
        return <ConfirmationPage setCurrentPage={setCurrentPage} />;
      case 'login':
        return <LoginPage setUser={setUser} setCurrentPage={setCurrentPage} />;
      case 'signup':
        return <SignUpPage setUser={setUser} setCurrentPage={setCurrentPage} />;
      case 'account':
        return <AccountPage user={user} bookings={bookings} setCurrentPage={setCurrentPage} />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return (
          <HomePage
            setCurrentPage={setCurrentPage}
            tours={tours}
            toggleFavorite={toggleFavorite}
            favorites={favorites}
            setSelectedTour={setSelectedTour}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        user={user}
        setUser={setUser}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      {renderPage()}
    </div>
  );
};

export default MainLayout;