import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Facilities from './components/Facilities';
import Rooms from './components/Room';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsappButton';
import BookingForm from './components/BookingForm';

function App() {
  const [showBookingForm, setShowBookingForm] = useState(false);

  const handleBookingClick = () => {
    setShowBookingForm(true); // Show booking form when "Booking" button is clicked
  };

  const handleHomeClick = () => {
    setShowBookingForm(false); // Hide booking form and show main page when "Home" is clicked
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
  };

  return (
    <div className="App">
      <Navbar onBookingClick={handleBookingClick} onHomeClick={handleHomeClick} /> {/* Pass both handlers */}
      {showBookingForm ? (
        <BookingForm /> // Show the booking form if button is clicked
      ) : (
        <>
          <Hero />
          <main>
            <About />
            <Facilities />
            <Rooms />
          </main>
        </>
      )}
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
