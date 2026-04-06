// pages/Home.jsx
import React, { useEffect } from 'react'; // 1. On importe useEffect
import Navbar from './Navbar';
import Footer from './Footer';
import '../src/style.css'; 

function Home() {
  // 2. Le useEffect doit être directement ici
useEffect(() => {
    // 1. Gestion de l'apparition au scroll (Reveal)
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    // 2. Gestion du clic FAQ (DOIT ÊTRE ICI)
    const faqItems = document.querySelectorAll(".faq-item");
    
    const handleFaqClick = (event) => {
      const item = event.currentTarget;
      
      // Ferme les autres si nécessaire
      faqItems.forEach(other => {
        if (other !== item) other.classList.remove("active");
      });
      
      // Toggle la classe active sur l'élément cliqué
      item.classList.toggle("active");
    };

    faqItems.forEach(item => {
      item.addEventListener("click", handleFaqClick);
    });

    // Nettoyage (Clean-up) pour éviter les bugs de mémoire
    return () => {
      observer.disconnect();
      faqItems.forEach(item => {
        item.removeEventListener("click", handleFaqClick);
      });
    };
  }, []); // S'exécute une seule fois après le rendu initial

  return (
    <div className="home-wrapper" id="top">
      <Navbar/>
      
      <section className="hero" id="hero">
        <div className="container hero-container">
          <div className="hero-text">
            <div className="available-badge">
              <span className="dot"></span>
              Disponible — missions & collaborations
            </div>

            <div className="hero-titles">
              <h1 className="name-title">Magloire Constant</h1>
              <h2 className="role-title">Copywriter & Storyteller Stratégique</h2>
            </div>

            <p className="hero-impact-text">
              « Je construis des systèmes de contenu narratif conçus pour attirer, positionner et convertir votre audience en clients fidèles. »
            </p>

            <div className="hero-btns-group">
              <button className="btn-filled">
                <i className="fa-solid fa-lightbulb"></i>
                Découvrir ma méthode
              </button>
              <button className="btn-text-only">
                Travailler avec moi
              </button>
            </div>
          </div>

          <div className="hero-image-frame">
            <img src="/img/h1.jpeg" alt="Portrait de Magloire Copy Impact" />
          </div>
        </div>
      </section>

      <section className="about" id="apropos">
        <div className="container about-container">
          <div className="about-image">
            <div className="image-wrapper">
              <img src="/img/h1.jpg" alt="Magloire au travail" />
            </div>
          </div>

          <div className="about-text">
            <div className="about-badge">
              <i className="fa-solid fa-user-tie"></i>
              À propos de Magloire
            </div>

            <h2 className="about-title">
              Un copywriter qui <br />
              <span>écrit ce qu'il vit.</span>
            </h2>

            <div className="about-description">
              <div className="desc-item">
                <h3>Mon parcours, sans filtre</h3>
                <p>
                  « Je suis un copywriter narratif spécialisé dans la psychologie de la persuasion et la création de contenus stratégiques capables de connecter profondément avec une audience. »
                </p>
              </div>

              <div className="desc-item">
                <h3>Ma mission, concrète</h3>
                <p>
                  « J’utilise la force du récit et une approche méthodique pour aider les entreprises à clarifier leur message, affirmer leur positionnement et convertir plus efficacement. »
                </p>
              </div>
            </div>

            <div className="about-footer">
              <button className="btn-filled">
                <i className="fa-brands fa-whatsapp"></i>
                Me contacter
              </button>
              <div className="social-proof">
                <div className="stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <span>+15 entreprises accompagnées</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="expertises" id="expertises">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-subtitle">Mon Approche</span>
            <h2 className="section-title">Ce qui me <span>différencie</span></h2>
          </div>

          <div className="expertises-grid">
            <div className="expertise-card reveal">
              <div className="icon-wrapper purple-glow">
                <i className="fa-solid fa-pen-nib"></i>
              </div>
              <h3>Copywriting & Stratégie</h3>
              <p>
                « Conception de systèmes de contenu qui attirent, positionnent et vendent 
                grâce au storytelling émotionnel et à la psychologie de la décision. »
              </p>
              <div className="card-arrow"><i className="fa-solid fa-arrow-up-right"></i></div>
            </div>

            <div className="expertise-card reveal">
              <div className="icon-wrapper blue-glow">
                <i className="fa-solid fa-globe"></i>
              </div>
              <h3>SEO & Visibilité</h3>
              <p>
                « Rédaction optimisée pour moteurs de recherche afin de transformer des idées 
                en contenus visibles, structurés et capables d’attirer un trafic qualifié. »
              </p>
              <div className="card-arrow"><i className="fa-solid fa-arrow-up-right"></i></div>
            </div>

            <div className="expertise-card reveal">
              <div className="icon-wrapper green-glow">
                <i className="fa-solid fa-bullhorn"></i>
              </div>
              <h3>Storytelling Stratégique</h3>
              <p>
                « Construction de récits puissants qui renforcent l’identité de marque, 
                créent un lien émotionnel durable et augmentent la conversion. »
              </p>
              <div className="card-arrow"><i className="fa-solid fa-arrow-up-right"></i></div>
            </div>
          </div>
        </div>
      </section>


<section className="results" id="resultats">
  <div className="container">
    <div className="section-header reveal">
      <span className="section-subtitle">Mes Résultats</span>
      <h2 className="section-title">Des chiffres, pas des <span>promesses.</span></h2>
      <p className="section-description">
        Depuis le lancement, j'ai accompagné des dizaines de professionnels à 
        développer de vraies compétences et à en vivre concrètement.
      </p>
      <a href="#temoignages" className="view-more">
        Voir les témoignages <i className="fa-solid fa-arrow-right"></i>
      </a>
    </div>

    <div className="results-grid">
      {/* Carte 1 */}
      <div className="result-card reveal">
        <div className="result-icon purple-glow">
          <i className="fa-solid fa-user-graduate"></i>
        </div>
        <div className="result-number">50+</div>
        <div className="result-label">Élèves accompagnés</div>
      </div>

      {/* Carte 2 */}
      <div className="result-card reveal">
        <div className="result-icon blue-glow">
          <i className="fa-solid fa-layer-group"></i>
        </div>
        <div className="result-number">15+</div>
        <div className="result-label">Modules créés</div>
      </div>

      {/* Carte 3 */}
      <div className="result-card reveal">
        <div className="result-icon green-glow">
          <i className="fa-solid fa-coins"></i>
        </div>
        <div className="result-number">3M+</div>
        <div className="result-label">Générés par mes clients</div>
      </div>

      {/* Carte 4 */}
      <div className="result-card reveal">
        <div className="result-icon orange-glow">
          <i className="fa-solid fa-star"></i>
        </div>
        <div className="result-number">98%</div>
        <div className="result-label">De satisfaction</div>
      </div>
    </div>
  </div>
</section>




<section className="faq" id="faq">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-subtitle">FAQ</span>
            <h2 className="section-title">Tu te poses des <span>questions</span> ? Normal.</h2>
            
            {/* <div className="faq-filters">
              <button className="filter-btn active">Collaboration</button>
              <button className="filter-btn">Services</button>
              <button className="filter-btn">Délais</button>
            </div> */}
          </div>

          <div className="faq-grid">
            <div className="faq-col reveal">
              <div className="faq-item">
                <div className="faq-question">
                  <span>Comment se déroule une collaboration ?</span>
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
                <div className="faq-answer">
                  <p>Un premier appel pour clarifier vos besoins, suivi d’une proposition structurée et d’un processus en plusieurs étapes : analyse, architecture narrative, rédaction et optimisation.</p>
                </div>
              </div>

              <div className="faq-item">
                <div className="faq-question">
                  <span>Combien de temps dure un projet ?</span>
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
                <div className="faq-answer">
                  <p>En moyenne entre 3 et 10 jours selon la complexité du contenu et le volume à produire.</p>
                </div>
              </div>
            </div>

            <div className="faq-col reveal">
              <div className="faq-item">
                <div className="faq-question">
                  <span>Quels types de contenus rédiges-tu ?</span>
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
                <div className="faq-answer">
                  <p>Pages de vente, storytelling de marque, scripts vidéo, contenus narratifs, pages d’accueil, articles SEO, séquences email, etc.</p>
                </div>
              </div>

              <div className="faq-item">
                <div className="faq-question">
                  <span>Proposes-tu des révisions ?</span>
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
                <div className="faq-answer">
                  <p>Oui, deux cycles de révision sont inclus afin d’assurer une parfaite cohérence avec votre vision.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


<section className="cta-contact" id="contact">
  <div className="container">
    <div className="cta-content reveal">
      <h2 className="cta-title">Prêt à passer à l'<span>action</span> ?</h2>
      <p className="cta-description">
        Rejoins les entreprises et professionnels qui ont décidé d'investir dans un 
        copywriting stratégique pour transformer leur impact.
      </p>
      
      <div className="cta-btns">
        {/* Lien direct vers ton WhatsApp avec message pré-rempli */}
        <a 
          href="https://wa.me/22951895151?text=Bonjour%20Magloire,%20j'aimerais%20en%20savoir%20plus%20sur%20tes%20services." 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-whatsapp"
        >
          <i className="fa-brands fa-whatsapp"></i>
          Échangeons sur WhatsApp
        </a>
        
        <a href="#expertises" className="btn-outline">
          Voir mes services <i className="fa-solid fa-arrow-up"></i>
        </a>
      </div>
    </div>
  </div>
</section>


      <a href="#top" className="back-to-top" aria-label="Retour en haut">
        <i className="fa-solid fa-circle-arrow-up"></i>
      </a>

      <Footer/>
    </div>
  );
}

export default Home;