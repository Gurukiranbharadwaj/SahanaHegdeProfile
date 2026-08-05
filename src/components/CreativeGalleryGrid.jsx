import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const galleryItemsData = [
  {
    id: 1,
    title: "Moment 1",
    category: "LIVE CONCERT",
    span: "span-1-2",
    pos: "center",
    img: "/assets/img02-CxHNY4gM.JPG"
  },
  {
    id: 2,
    title: "Moment 2",
    category: "UNPLUGGED",
    span: "span-1-1",
    pos: "center",
    img: "/assets/img04-D-V80nmD.JPG"
  },
  {
    id: 3,
    title: "Moment 3",
    category: "BEHIND SCENES",
    span: "span-1-1",
    pos: "center",
    img: "/assets/img05-BhW1gbDR.jpeg"
  },
  {
    id: 4,
    title: "Moment 4",
    category: "PROJECT",
    span: "span-1-1",
    pos: "center",
    img: "/assets/sahana-2DquaTzx.jpg"
  },
  {
    id: 5,
    title: "Moment 5",
    category: "MELODY",
    span: "span-2-1",
    pos: "center",
    img: "/assets/img06-BLInVEt0.jpeg"
  },
  {
    id: 6,
    title: "Moment 6",
    category: "HARMONY",
    span: "span-1-2",
    pos: "center",
    img: "/assets/img03-Bpl9l4wy.JPG"
  },
  {
    id: 7,
    title: "Moment 7",
    category: "JOURNEY",
    span: "span-1-1",
    pos: "center",
    img: "/assets/img07-BlfqbI0O.JPG"
  },
  {
    id: 8,
    title: "Moment 8",
    category: "PERFORMANCE",
    span: "span-2-1",
    pos: "center",
    img: "/assets/img01-BJM94gOA.JPG"
  }
];

export default function CreativeGalleryGrid() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="section gallery-section bp-gallery-variant cloudy-bg">
      <div className="container" data-aos="fade-up">
        <div className="gallery-header text-center">
          <h1 className="gallery-heading">Bhaava Payana Highlights</h1>
          <p className="gallery-subheading">
            Moments from our soulful musical journeys across the stage. Click any image to view in full.
          </p>
        </div>
        <div className="creative-gallery-grid">
          {galleryItemsData.map((item, idx) => (
            <div
              className={`gallery-item ${item.span}`}
              data-aos="zoom-in"
              data-aos-delay={(idx % 10) * 100}
              onClick={() => setSelectedImage(item)}
              style={{ cursor: 'zoom-in' }}
              key={item.id}
            >
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                style={{ objectPosition: item.pos }}
              />
              <div className="gallery-overlay-v2 highlight-overlay">
                <span className="item-category">{item.category}</span>
                <h3 className="item-title">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage &&
        ReactDOM.createPortal(
          <div
            className="gallery-modal"
            onClick={() => setSelectedImage(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: 'rgba(0,0,0,0.95)',
              zIndex: 10000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'zoom-out',
              padding: '20px'
            }}
          >
            <div
              style={{
                position: 'relative',
                maxWidth: '90%',
                maxHeight: '90%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <img
                src={selectedImage.img}
                alt={selectedImage.title}
                style={{
                  maxWidth: '100%',
                  maxHeight: '80vh',
                  borderRadius: '10px',
                  boxShadow: '0 0 50px rgba(0,0,0,0.5)',
                  objectFit: 'contain'
                }}
              />
              <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <h3 style={{ color: 'var(--gold)', margin: 0 }}>{selectedImage.title}</h3>
                <p style={{ color: 'var(--moon-ivory)', opacity: 0.8, margin: '5px 0' }}>
                  {selectedImage.category}
                </p>
              </div>
              <button
                style={{
                  position: 'absolute',
                  top: '-40px',
                  right: '-40px',
                  background: 'transparent',
                  border: 'none',
                  color: 'white',
                  fontSize: '40px',
                  cursor: 'pointer'
                }}
                onClick={() => setSelectedImage(null)}
              >
                ×
              </button>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}
