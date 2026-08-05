import React from 'react';
import { Link } from 'react-router-dom';
import EnsembleSection from '../components/EnsembleSection.jsx';
import EchoesCarousel from '../components/EchoesCarousel.jsx';
import CreativeGalleryGrid from '../components/CreativeGalleryGrid.jsx';
import YoutubeEmbed from '../components/YoutubeEmbed.jsx';

export default function BhaavaPayana() {
  return (
    <div className="page-fade-in">
      {/* Hero Banner */}
      <div id="home">
        <section
          className="hero-section"
          style={{ backgroundImage: `url(/assets/img08-qCGG_asM.JPG)` }}
        >
          <div className="hero-overlay" />
          <div className="hero-glow" />
          <div className="container hero-content" data-aos="zoom-out">
            <h1 className="display-1 fw-bold mb-4 hero-title">
              Bhaava Payana
            </h1>
            <p className="lead mb-5 mx-auto hero-lead">
              A cinematic journey blending the soulful melodies of Bhaava Geetha with modern harmony.
            </p>
            <div className="mt-5">
              <Link
                to="/contact"
                className="btn btn-gold btn-lg px-5 py-3 shadow-lg"
              >
                Experience the Magic
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Concert Philosophy */}
      <section id="philosophy" className="section text-center home-philosophy cloudy-bg">
        <div className="container" data-aos="fade-up">
          <h2 className="home-philosophy-heading">THE PHILOSOPHY</h2>
          <p className="home-philosophy-text lead">
            Bhaava [ Feelings / Soul / State of Mind ] - Payana [ Travel / Journey / Path ] is a Concert Series featuring soulful music collected from various parts of the Great Indian Cultural Heritage. Showcasing music from folklore / children’s stories / mythological tales & native atmosphere, Bhaava-Payana is an experience on its own. A Song narrating a young Krishna’s mischievous banter with his mother Yashoda about not stealing butter from the pots, to compositions which stir your emotions & question your practical thoughts, the performance transcends you to another dimension. Combining genres and styles of music, the project aims to create a refreshing sound with an unplugged set emphasising on the use of acoustic world instruments. With a strong foundation of Hindustani Classical Music, elements of Jazz, Western Classical & Indian Percussion, the concert is a perfect musical therapy. Come feel the Music.
          </p>
        </div>
      </section>

      {/* Ensemble Section */}
      <EnsembleSection />

      {/* Echoes of Soul Section */}
      <section className="section home-echoes cloudy-bg">
        <div className="container">
          <div className="text-center">
            <h2 className="mb-5 home-echoes-heading">ECHOES OF SOUL</h2>
          </div>
          <EchoesCarousel />
        </div>
      </section>

      {/* Gallery Section */}
      <div id="gallery">
        <CreativeGalleryGrid />
      </div>

      {/* Live Video Embed */}
      <YoutubeEmbed videoId="4NhdDFNOxRE" title="BHAAVA PAYANA LIVE" />
    </div>
  );
}
