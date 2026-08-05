import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import FloatingInstagram from './components/FloatingInstagram.jsx';
import Home from './pages/Home.jsx';
import BhaavaPayana from './pages/BhaavaPayana.jsx';
import Team from './pages/Team.jsx';
import Contact from './pages/Contact.jsx';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bhaava-payana" element={<BhaavaPayana />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <FloatingInstagram />
      <Footer />
    </Router>
  );
}
