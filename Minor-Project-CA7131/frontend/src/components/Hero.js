import React, { useState, useEffect } from "react";
import nspg2 from "../images/nspg2.jpg";
import nspg3 from "../images/nspg3.jpg";
import nspg4 from "../images/nspg4.jpg";
import nshostel from "../images/nshostel.jpg";
import nspg5 from "../images/nspg5.jpg";
import nspg6 from "../images/nspg6.jpg";


const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [nshostel, nspg2, nspg3, nspg4, nspg5, nspg6];
    const heroTexts = [
        "Welcome to NS Hostel",
        "Comfortable and affordable rooms near Manipal University, Jaipur.",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className="hero">
            <img 
                src={images[currentIndex]} 
                alt="Hero" 
                className={`hero-image ${currentIndex === 2 ? 'zoom-out' : ''}`} // Apply zoom-out class for nspg3
            />
            <div className="hero-content">
                <h1>{heroTexts[0]}</h1>
                <p>{heroTexts[1]}</p>
            </div>
            <div className="carousel-dots">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${currentIndex === index ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>
        </section>
    );
};

export default Hero;
