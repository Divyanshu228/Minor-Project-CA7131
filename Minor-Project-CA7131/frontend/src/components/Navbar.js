import React, { useState } from 'react';
import hamburgerIcon from '../images/hamburger.png'; // Import the hamburger icon
import nsLogo from '../images/nslogo.png'; // Import the NS Hostel logo

const Navbar = ({ onBookingClick, onHomeClick }) => {
    const [isActive, setIsActive] = useState(false);

    const toggleDarkMode = (event) => {
        event.preventDefault();
        document.body.classList.toggle('dark-mode');
    };

    const scrollToBottom = (event) => {
        event.preventDefault();
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        });
        setIsActive(false);
    };

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    return (
        <header>
            <nav>
                <div className="nav-title-container">
                    <p className="nav-title">NS Hostel</p>
                    <img src={nsLogo} alt="NS Hostel Logo" className="ns-logo" /> {/* Add the logo here */}
                </div>
                <img
                    src={hamburgerIcon}
                    alt="Menu"
                    className="hamburger-icon"
                    onClick={toggleMenu}
                />
                <ul className={isActive ? 'active' : ''}>
                    <li><a href="#home" onClick={onHomeClick}>Home</a></li>
                    <li><a href="#about-us" onClick={() => setIsActive(false)}>About</a></li>
                    <li><a href="#rooms" onClick={() => setIsActive(false)}>Rooms</a></li>
                    <li><a href="#facilities" onClick={() => setIsActive(false)}>Facilities</a></li>
                    <li><a href="#contact" onClick={scrollToBottom}>Contact Us</a></li>
                    <li><a href="#" onClick={onBookingClick}>Booking →</a></li>
                    <li><a href="#" onClick={toggleDarkMode}>Dark Mode</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
