import React, { useState, useEffect, useCallback } from 'react';

const testimonials = [
  {
    quote: "A transcending experience that bridges the gap between traditional soul and modern production.",
    author: "Classical Times"
  },
  {
    quote: "The most evocative performance I have witnessed in years. Truly cinematic.",
    author: "Indie Melody Review"
  },
  {
    quote: "A masterclass in storytelling through melody. Sahana reaches into the soul.",
    author: "The Cultural Post"
  },
  {
    quote: "Refreshing, soulful, and deeply rooted in heritage. A must-watch for every music lover.",
    author: "Music Today"
  }
];

export default function EchoesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  }, []);

  const handleDotClick = (index) => {
    setActiveIndex(index);
    setAutoRotate(false);
    setTimeout(() => setAutoRotate(true), 10000);
  };

  useEffect(() => {
    let timer;
    if (autoRotate) {
      timer = setInterval(nextSlide, 5000);
    }
    return () => clearInterval(timer);
  }, [autoRotate, nextSlide]);

  return (
    <div className="echoes-carousel" data-aos="fade-up">
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {testimonials.map((item, index) => (
          <div
            className={`carousel-slide ${index === activeIndex ? 'active' : ''}`}
            key={index}
          >
            <div className="testimonial-card-v2">
              <span className="quote-icon">“</span>
              <p className="echoes-quote">"{item.quote}"</p>
              <h6 className="echoes-author">{item.author}</h6>
            </div>
          </div>
        ))}
      </div>
      <div className="carousel-dots">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
