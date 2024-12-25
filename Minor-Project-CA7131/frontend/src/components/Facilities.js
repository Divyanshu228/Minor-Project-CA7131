import React from 'react';
import ac from '../images/ac.png';
import geyser from '../images/geyser.png';
import almirah from '../images/almirah.png';
import wifi from '../images/wifi.png';
import food from '../images/food.png';
import game from '../images/game.png';
import gym from '../images/gym.png';
import transport from '../images/transport.png';

function Facilities() {
    return (
        <section id="facilities">
            <h2>Facilities</h2>
            <div className="facilities-container">
                <div className="facility-card">
                    <img src={ac} alt="AC Room" />
                    <h3>AC Room</h3>
                    <p>All our bedrooms are equipped with air-conditioners.</p>
                </div>
                <div className="facility-card">
                    <img src={geyser} alt="Geyser" />
                    <h3>Geyser</h3>
                    <p>Hot water available in winters.</p>
                </div>
                <div className="facility-card">
                    <img src={almirah} alt="Almirah" />
                    <h3>Almirah</h3>
                    <p>Separate almirah for each student.</p>
                </div>
                <div className="facility-card">
                    <img src={wifi} alt="24/7 Free WiFi" />
                    <h3>24/7 Free WiFi</h3>
                    <p>High-speed wifi access for uninterrupted study.</p>
                </div>
                <div className="facility-card">
                    <img src={food} alt="Hygienic Food" />
                    <h3>Hygienic Food</h3>
                    <p>Nutritious food from a well-equipped kitchen.</p>
                </div>
                <div className="facility-card">
                    <img src={game} alt="Indoor Games" />
                    <h3>Indoor Games</h3>
                    <p>Chill zones to unwind with your buddies.</p>
                </div>
                <div className="facility-card">
                    <img src={gym} alt="Well Equipped Gym" />
                    <h3>Well Equipped Gym</h3>
                    <p>All gym equipment available for training.</p>
                </div>
                <div className="facility-card">
                    <img src={transport} alt="Transport Facility" />
                    <h3>Transport Facility</h3>
                    <p>Transport to classes provided.</p>
                </div>
            </div>
        </section>
    );
}

export default Facilities;
