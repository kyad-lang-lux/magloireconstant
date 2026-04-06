import React from 'react';
import '../src/style.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <h3 className="footer-logo">Magloire <span>Constant.</span></h3>
            <p>Copywriter & Storyteller Stratégique.</p>
          </div>
          
          <div className="footer-links">
            <a href="#hero">Accueil</a>
            <a href="#apropos">À propos</a>
            <a href="#expertises">Services</a>
            <a href="#faq">FAQ</a>
          </div>

          <div className="footer-socials">
            <a href="https://wa.me/22951895151" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a
  href="mailto:constanthezonvode@gmail.com"
  className="social-icon"
  target="_blank"
  rel="noopener noreferrer"
>
  <i className="fa-solid fa-envelope"></i>
</a>
            <a href="https://www.instagram.com/magloirecopy" className="social-icon">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/magloire.copy.impact" className="social-icon">
              <i className="fa-brands fa-facebook"></i>
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Magloire Constant
          </p>
          <p className="footer-passion">
            Réalisé avec passion par <span>Emérus SOGLO</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;