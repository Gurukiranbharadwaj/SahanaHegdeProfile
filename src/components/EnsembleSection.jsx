import React from 'react';
import { Link } from 'react-router-dom';

const ensembleMembers = [
  {
    id: "sahana",
    name: "Sahana Hegde",
    role: "Versatile Vocalist",
    img: "/assets/sahanaimg-CWM4pjtY.svg"
  },
  {
    id: "sanjay",
    name: "Sanjay R S",
    role: "Piano & Jazz Artist",
    img: "/assets/sanjayimg-BW-YZ-mf.svg"
  },
  {
    id: "madhu",
    name: "Madhu Srinivas",
    role: "Multi Percussionist",
    img: "/assets/madhuimg-D_VxnQ79.svg"
  }
];

export default function EnsembleSection() {
  return (
    <section className="section team-section cloudy-bg" style={{ borderTop: "1px solid rgba(58, 28, 113, 0.1)" }}>
      <div className="container">
        <div className="text-center">
          <h2 className="mb-5 team-heading" data-aos="fade-up">
            THE ENSEMBLE
          </h2>
        </div>
        <div className="row g-5 justify-content-center">
          {ensembleMembers.map((member, idx) => (
            <div
              className="col-md-4"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              key={idx}
            >
              <Link to={`/team#${member.id}`} style={{ textDecoration: 'none' }}>
                <div className="p-0 bg-white rounded-5 shadow-2xl overflow-hidden h-100 transition-hover border-0">
                  <div className="team-card-inner">
                    <div className="team-img-glow-container">
                      <img
                        src={member.img}
                        className="img-fluid rounded-circle team-img"
                        alt={member.name}
                      />
                    </div>
                    <h4 className="fw-bold team-member-name">{member.name}</h4>
                    <p className="team-member-role">{member.role}</p>
                  </div>
                  <div className="team-card-accent" />
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-5">
          <Link to="/team" className="btn btn-gold px-5 py-3 rounded-pill shadow-lg">
            EXPLORE ARTIST BIOS
          </Link>
        </div>
      </div>
    </section>
  );
}
