import React from 'react';

export default function SpotifyEmbed({
  spotifyUrl = 'https://open.spotify.com/embed/artist/6zFbnKp5WefatujgmaBGYm?utm_source=generator',
  title = 'Spotify Artist Profile'
}) {
  return (
    <section className="section spotify-section bg-midnight cloudy-bg">
      <div className="container text-center">
        <h2 data-aos="fade-up" className="spotify-heading mb-0 text-gold-gradient">
          DIGITAL ECHOES
        </h2>
        <div className="spotify-container mt-4 mt-md-5 rounded-4 overflow-hidden shadow-lg border border-velvet">
          <iframe
            className="spotify-iframe"
            src={spotifyUrl}
            width="100%"
            height="450"
            style={{
              minHeight: '450px',
              border: 'none'
            }}
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title={title}
          />
        </div>
      </div>
    </section>
  );
}
