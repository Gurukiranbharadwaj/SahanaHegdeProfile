import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isBhaavaPayana = location.pathname === '/bhaava-payana';
  const isTeam = location.pathname === '/team';

  const toggleNavbar = () => setIsOpen(!isOpen);
  const closeNavbar = () => setIsOpen(false);

  const getHref = (hash) => {
    return (isHome || isBhaavaPayana) && (hash === '#philosophy' || hash === '#gallery')
      ? hash
      : `/${hash}`;
  };

  const handleNavClick = (e, path) => {
    closeNavbar();
    if (location.pathname === path) {
      window.scrollTo({
        top: 0,
        behavior: 'instant'
      });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top shadow-lg navbar-custom">
      <div className="container">
        {isTeam && (
          <Link
            to="/bhaava-payana"
            className="me-3 text-gold d-flex align-items-center back-link"
            onClick={(e) => handleNavClick(e, '/bhaava-payana')}
            aria-label="Back to Bhaava Payana"
            style={{ textDecoration: 'none' }}
          >
            <FaArrowLeft size={16} className="me-2" />
            <span style={{ fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>
              Back
            </span>
          </Link>
        )}

        <Link
          className="navbar-brand d-flex align-items-center"
          to="/"
          onClick={(e) => handleNavClick(e, '/')}
        >
          {isBhaavaPayana || isTeam ? (
            <img
              src="/assets/logo-D7VRyIAp.svg"
              alt="Bhaava Payana"
              className="navbar-logo"
            />
          ) : (
            <span className="brand-artist-name">SAHANA HEGDE</span>
          )}
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <div className="navbar-nav ms-auto text-center py-4 py-lg-0">
            <Link
              className="nav-link mx-lg-3 nav-link-mobile"
              to="/"
              onClick={(e) => handleNavClick(e, '/')}
            >
              Home
            </Link>
            <a
              className="nav-link mx-lg-3 nav-link-mobile"
              href={getHref('#philosophy')}
              onClick={closeNavbar}
            >
              About
            </a>
            <a
              className="nav-link mx-lg-3 nav-link-mobile"
              href={getHref('#gallery')}
              onClick={closeNavbar}
            >
              Gallery
            </a>
            <Link
              className="nav-link mx-lg-3 nav-link-mobile"
              to="/contact"
              onClick={closeNavbar}
            >
              Contact
            </Link>
            <Link
              className="nav-link mx-lg-3 nav-link-mobile nav-highlight"
              to="/bhaava-payana"
              onClick={(e) => handleNavClick(e, '/bhaava-payana')}
            >
              Bhaava Payana
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
