// WhatsAppButton.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import '../App.css'; // Import the CSS for styling

const WhatsAppButton = () => {
    const phoneNumber = "919799605406"; // Replace with your phone number
    const message = "Hello! I would like to inquire about the hostel."; // Customize your message
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    return (
        <a href={whatsappLink} className="whatsapp-button" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} />
        </a>
    );
};

export default WhatsAppButton;
