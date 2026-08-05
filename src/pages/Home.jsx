import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import YoutubeEmbed from '../components/YoutubeEmbed.jsx';
import SpotifyEmbed from '../components/SpotifyEmbed.jsx';
import MemoirGallery from '../components/MemoirGallery.jsx';

export default function Home() {
  const [isMuted, setIsMuted] = useState(true);
  const desktopVideoRef = useRef(null);
  const mobileVideoRef = useRef(null);

  const toggleMute = () => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      if (mobileVideoRef.current) {
        const nextMuted = !mobileVideoRef.current.muted;
        mobileVideoRef.current.muted = nextMuted;
        if (desktopVideoRef.current) {
          desktopVideoRef.current.muted = true;
        }
        setIsMuted(nextMuted);
      }
    } else {
      if (desktopVideoRef.current) {
        const nextMuted = !desktopVideoRef.current.muted;
        desktopVideoRef.current.muted = nextMuted;
        if (mobileVideoRef.current) {
          mobileVideoRef.current.muted = true;
        }
        setIsMuted(nextMuted);
      }
    }
  };

  return (
    <div className="artist-profile page-fade-in">
      {/* Hero Section */}
      <section id="home" className="artist-hero">
        <div
          className="video-wrapper"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden'
          }}
        >
          <video
            ref={desktopVideoRef}
            autoPlay
            muted
            loop
            playsInline
            className="hero-video-bg d-none d-md-block"
          >
            <source src="/assets/SHLP-L2SpFDux.mp4" type="video/mp4" />
          </video>

          <video
            ref={mobileVideoRef}
            autoPlay
            muted
            loop
            playsInline
            className="hero-video-bg d-block d-md-none"
          >
            <source src="/assets/SahanaPotrait-BTdUvp-y.mp4" type="video/mp4" />
          </video>

          <div
            className="hero-overlay"
            style={{
              background: 'linear-gradient(to bottom, rgba(18, 20, 38, 0.4), var(--midnight))'
            }}
          />

          <button
            className="sound-btn"
            onClick={toggleMute}
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? '🔇' : '🔊'}
          </button>
        </div>

        <div className="container artist-hero-content" data-aos="zoom-out">
          <h1
            className="artist-name-title"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            SAHANA HEGDE
          </h1>
          <p className="artist-subtitle" data-aos="fade-up">
            Singer | Performer | Teacher
          </p>
          <div className="mt-5" data-aos="fade-up" data-aos-delay="400">
            <Link to="/contact" className="btn btn-gold btn-lg px-5 py-3 shadow-lg">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="section profile-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 mb-5 mb-lg-0" data-aos="fade-right">
              <div
                className="about-img-container"
                style={{
                  borderRadius: '30px',
                  overflow: 'hidden',
                  boxShadow: '0 30px 60px rgba(0,0,0,0.5)'
                }}
              >
                <img
                  src="/assets/img08-qCGG_asM.JPG"
                  alt="Sahana Hegde"
                  className="img-fluid"
                />
              </div>
            </div>

            <div className="col-lg-7 ps-lg-5" data-aos="fade-left">
              <h2 className="display-4 fw-bold mb-4 text-gold-gradient">
                THE PHILOSOPHY
              </h2>
              <p className="profile-bio-text mb-4">
                Sahana Hegde is a versatile vocalist and educator who seamlessly bridges the worlds of technology and the arts. A software engineer by profession, Sahana’s musical journey began early as a prize-winning performer on singing reality shows. Today, her voice spans a wide range of genres, from the intricacies of Classical and Light music to the energy of Filmy hits and Acapella.
              </p>
              <p className="profile-bio-text mb-5">
                With a career that includes concerts across Karnataka and Dubai, Sahana has performed on prestigious stages alongside renowned artists. Her studio credits are equally diverse, featuring devotional albums, children’s films, television title tracks, and commercial jingles. An award-winning vocalist in both competitive circuits and formal examinations, Sahana also shares her expertise by teaching music and releasing original compositions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Video Section */}
      <div id="youtube-section">
        <YoutubeEmbed videoId="kMp7sbIiK8U" title="THE ARTIST'S VOICE" />
      </div>

      {/* Spotify Artist Section */}
      <div id="spotify-section">
        <SpotifyEmbed
          spotifyUrl="https://open.spotify.com/embed/artist/6zFbnKp5WefatujgmaBGYm?utm_source=generator"
          title="Sahana Hegde Official"
        />
      </div>

      {/* Gallery Section */}
      <div id="gallery">
        <MemoirGallery />
      </div>
    </div>
  );
}
