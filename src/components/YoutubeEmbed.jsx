import React from 'react';

export default function YoutubeEmbed({
  videoId = '4NhdDFNOxRE',
  title = 'CINEMATIC LIVE'
}) {
  return (
    <section className="section youtube-section cloudy-bg">
      <div className="container text-center">
        <h2 data-aos="fade-up" className="youtube-heading mb-0 text-gold-gradient">
          {title}
        </h2>
        <div
          className="ratio ratio-16x9 mt-4 mt-md-5 shadow-2xl rounded-4 overflow-hidden border border-velvet youtube-video-container"
          data-aos="zoom-in"
        >
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            allowFullScreen
            title={title}
          />
        </div>
      </div>
    </section>
  );
}
