import React, { useState, useEffect } from 'react';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isOpen ? 'menu-open' : ''}`}>
      <div className="nav-container">
        
        {/* Logo */}
        <div className="nav-logo">
          <div className="logo-circle"></div>
          <div className="logo-text">
            <span className="name">Magloire</span>
            <span className="brand">Copy Impact</span>
          </div>
        </div>

        {/* MENU MOBILE & DESKTOP */}
        <ul className={`nav-links ${isOpen ? 'show' : ''}`}>
          <li style={{ "--i": 3 }}><a href="#apropos" onClick={() => setIsOpen(false)}>À propos</a></li>
          <li style={{ "--i": 1 }}><a href="#expertise" onClick={() => setIsOpen(false)}>Expertises</a></li>
          <li style={{ "--i": 2 }}><a href="#resultats" onClick={() => setIsOpen(false)}>Résultats</a></li>
          <li style={{ "--i": 4 }}><a href="#faq" onClick={() => setIsOpen(false)}>FAQ</a></li>
          
          {/* Bouton contact DUPLIQUÉ (Visible uniquement sur Mobile dans le menu) */}
          <li style={{ "--i": 5 }} className="mobile-only-btn">
            <button className="btn-contact" onClick={() => setIsOpen(false)}>Me contacter</button>
          </li>
        </ul>

        {/* Barre de droite (Desktop) */}
        <div className="nav-right">
          <div className="desktop-socials">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-tiktok"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-whatsapp"></i></a>
          </div>
          
          {/* Bouton contact ORIGINAL (Caché sur Mobile via CSS) */}
          <button className="btn-contact desktop-only-btn">Me contacter</button>
          
          {/* Hamburger */}
          <div className={`hamburger ${isOpen ? 'toggle' : ''}`} onClick={() => setIsOpen(!isOpen)}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;