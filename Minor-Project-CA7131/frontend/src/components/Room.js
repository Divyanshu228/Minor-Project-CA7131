import React from 'react';

const Rooms = () => {
    return (
        <section id="rooms" className="room-section">
            <h2>Rooms (Block A)</h2>
            <div className="rooms-container">
                <div className="room-card">
                    <h3>Double</h3>
                    <iframe
                        width="720"
                        height="405"
                        src="https://www.youtube.com/embed/Sqg0zReZoHQ"
                        title="Double Seater Room"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="room-video"
                    ></iframe>
                </div>

                <div className="room-card">
                    <h3>Triple</h3>
                    <iframe
                        width="720"
                        height="405"
                        src="https://www.youtube.com/embed/qdDiKRkx01Y"
                        title="Triple Seater Room"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="room-video"
                    ></iframe>
                    <p className="single-seater-text">★ Single seater available on demand.</p>
                </div>
            </div>

         </section>
)};

export default Rooms;
