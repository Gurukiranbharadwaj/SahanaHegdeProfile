import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const memoirItems = [
  {
    id: 1,
    title: "Bhaava Payana ",
    category: "Live Performance",
    description: "Bhaava Payana Concert 03 At Tridhaa Music Academy",
    span: "span-2-2",
    pos: "center",
    img: "/assets/img08-qCGG_asM.JPG"
  },
  {
    id: 2,
    title: "At MS Ramaiah Institute of Technology",
    category: "MEMOIR",
    description: "A candid moment of annual festival in MS Ramaiah Institute of Technology",
    span: "span-1-1",
    pos: "center",
    img: "/assets/img06-CKxFpSy6.jpeg"
  },
  {
    id: 3,
    title: "Jasrangi Jugalbandi",
    category: "Season 05",
    description: "A Photo still from the Jasrangi Jugalbandi",
    span: "span-1-1",
    pos: "center",
    img: "/assets/img04-DulBNNXu.jpeg"
  },
  {
    id: 4,
    title: "Audio Launch",
    category: "Song- Theredhubidu",
    description: "Audio Launch of the Film -WOW MURUGESH where i rendered the song -Theredhubidu",
    span: "span-2-1",
    pos: "center",
    img: "/assets/img07-ChIPG0VL.jpeg"
  },
  {
    id: 5,
    title: "Sa Re Ga Ma Pa Lil Champs",
    category: "Stage Performance",
    description: "A soulful performance capturing the depth of classical traditions.",
    span: "span-1-2",
    pos: "top",
    img: "/assets/img01-ByRpKvBe.jpeg"
  },
  {
    id: 6,
    title: "Remembrance Ceremony",
    category: "Live Performance",
    description: "At the Remembrance Ceremony of Music Director Late RAJAN",
    span: "span-1-2",
    pos: "center",
    img: "/assets/img02-C_lqbGP3.jpeg"
  },
  {
    id: 7,
    title: "Sa Re Ga Ma Pa ",
    category: "ESSENCE",
    description: "With S Janaki, At Sa Re Ga Ma Pa Season 05 Champion Of Champions",
    span: "span-1-2",
    pos: "top",
    img: "/assets/img03-DNLODkwU.jpeg"
  },
  {
    id: 8,
    title: "Album Launch",
    category: "Acapella Performance",
    description: "Was a part of an Acapella Performance for Varijashree Venugopal's Album Launch Event",
    span: "span-1-1",
    pos: "top",
    img: "/assets/img05-DDDyfksB.jpeg"
  },
  {
    id: 9,
    title: "Swara Samvaada",
    category: "Concert",
    description: "First Concert of the Carnatic-Hindustani Jugalbandhi series- Swara Samvaada",
    span: "span-1-1",
    pos: "bottom",
    img: "/assets/img12-C_GHAy4X.jpeg"
  },
  {
    id: 10,
    title: "International Swara Prabha",
    category: "Light Music",
    description: "Received to its price in Light Music Category of the Competition- International Swara Prabha",
    span: "span-2-1",
    pos: "center",
    img: "/assets/img09-j2MG3rra.jpeg"
  },
  {
    id: 11,
    title: "At Dubai",
    category: "Concert",
    description: "At Dubai Music Festival",
    span: "span-2-1",
    pos: "center",
    img: "/assets/img11-EQhowhKP.jpeg"
  }
];

export default function MemoirGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="section gallery-section home-gallery-variant">
      <div className="container" data-aos="fade-up">
        <div className="gallery-header text-center">
          <h1 className="gallery-heading">Mémoire</h1>
          <p className="gallery-subheading">
            A glimpse into the life and performance of the artist.
          </p>
        </div>
        <div className="creative-gallery-grid">
          {memoirItems.map((item, idx) => (
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
              <div className="gallery-overlay-v2 memoir-overlay">
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
                {selectedImage.description && (
                  <p style={{ color: 'white', opacity: 0.7, fontSize: '0.9rem' }}>
                    {selectedImage.description}
                  </p>
                )}
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
