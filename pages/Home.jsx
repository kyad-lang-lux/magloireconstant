import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../src/style.css'; 

function Home() {
  useEffect(() => {
    // Intersection Observer pour les apparitions au scroll
    const observerOptions = {
      threshold: 0.15, // Déclenche quand 15% de l'élément est visible
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

    // Gestion de la FAQ
    const faqItems = document.querySelectorAll(".faq-item");
    const handleFaqClick = (event) => {
      const item = event.currentTarget;
      faqItems.forEach(other => {
        if (other !== item) other.classList.remove("active");
      });
      item.classList.toggle("active");
    };

    faqItems.forEach(item => {
      item.addEventListener("click", handleFaqClick);
    });

    return () => {
      observer.disconnect();
      faqItems.forEach(item => {
        item.removeEventListener("click", handleFaqClick);
      });
    };
  }, []);

  return (
    <div className="home-wrapper" id="top">
      <Navbar/>
      
      {/* SECTION HERO */}
      <section className="hero" id="hero">
        <div className="container hero-container">
          <div className="hero-text reveal left">
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
              <button className="btn-filled" onClick={() => document.querySelector("#expertises").scrollIntoView({ behavior: "smooth" })}>
                <i className="fa-solid fa-lightbulb"></i> Découvrir ma méthode
              </button>
              <button className="btn-text-only" onClick={() => window.open("https://wa.me/22951895151", "_blank")}>
                Travailler avec moi
              </button>
            </div>
          </div>

          <div className="hero-image-frame reveal right">
            <img src="/img/h1.jpeg" alt="Portrait de Magloire Copy Impact" />
          </div>
        </div>
      </section>

      {/* SECTION A PROPOS */}
      <section className="about" id="apropos">
        <div className="container about-container">
          <div className="about-image reveal left">
            <div className="image-wrapper">
              <img src="/img/h2.jpeg" alt="Magloire au travail" />
            </div>
          </div>

          <div className="about-text reveal right">
            <div className="about-badge">
              <i className="fa-solid fa-user-tie"></i> À propos de Magloire
            </div>

            <h2 className="about-title">
              Un copywriter qui <br />
              <span>écrit ce qu'il vit.</span>
            </h2>

            <div className="about-description">
              <div className="desc-item">
                <h3>Mon parcours, sans filtre</h3>
                <p>« Je suis un copywriter narratif spécialisé dans la psychologie de la persuasion... »</p>
              </div>
              <div className="desc-item">
                <h3>Ma mission, concrète</h3>
                <p>« J’utilise la force du récit et une approche méthodique... »</p>
              </div>
            </div>

            <div className="about-footer">
              <a href="https://wa.me/22951895151" target='_blank' className="btn-filled">
                <i className="fa-brands fa-whatsapp"></i> Me contacter
              </a>
              <div className="social-proof">
                <div className="stars">
                  {[...Array(5)].map((_, i) => <i key={i} className="fa-solid fa-star"></i>)}
                </div>
                <span>+15 entreprises accompagnées</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION EXPERTISES */}
      <section className="expertises" id="expertises">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-subtitle">Mon Approche</span>
            <h2 className="section-title">Ce qui me <span>différencie</span></h2>
          </div>

          <div className="expertises-grid">
            <div className="expertise-card reveal delay-1">
              <div className="icon-wrapper purple-glow"><i className="fa-solid fa-pen-nib"></i></div>
              <h3>Copywriting & Stratégie</h3>
              <p>Conception de systèmes de contenu qui attirent et vendent.</p>
              <div className="card-arrow"><i className="fa-solid fa-arrow-up-right"></i></div>
            </div>
            <div className="expertise-card reveal delay-2">
              <div className="icon-wrapper blue-glow"><i className="fa-solid fa-globe"></i></div>
              <h3>SEO & Visibilité</h3>
              <p>Rédaction optimisée pour moteurs de recherche.</p>
              <div className="card-arrow"><i className="fa-solid fa-arrow-up-right"></i></div>
            </div>
            <div className="expertise-card reveal delay-3">
              <div className="icon-wrapper green-glow"><i className="fa-solid fa-bullhorn"></i></div>
              <h3>Storytelling Stratégique</h3>
              <p>Construction de récits puissants qui renforcent l’identité.</p>
              <div className="card-arrow"><i className="fa-solid fa-arrow-up-right"></i></div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION RESULTATS */}
      <section className="results" id="resultats">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-subtitle">Mes Résultats</span>
            <h2 className="section-title">Des chiffres, pas des <span>promesses.</span></h2>
          </div>

          <div className="results-grid">
            <div className="result-card reveal delay-1">
              <div className="result-icon purple-glow"><i className="fa-solid fa-user-graduate"></i></div>
              <div className="result-number">30+</div>
              <div className="result-label">Élèves accompagnés</div>
            </div>
            <div className="result-card reveal delay-2">
              <div className="result-icon blue-glow"><i className="fa-solid fa-layer-group"></i></div>
              <div className="result-number">15+</div>
              <div className="result-label">Modules créés</div>
            </div>
            <div className="result-card reveal delay-3">
              <div className="result-icon green-glow"><i className="fa-solid fa-coins"></i></div>
              <div className="result-number">1.5M+</div>
              <div className="result-label">Générés par mes clients</div>
            </div>
            <div className="result-card reveal delay-1">
              <div className="result-icon orange-glow"><i className="fa-solid fa-star"></i></div>
              <div className="result-number">96%</div>
              <div className="result-label">De satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION FAQ */}
      <section className="faq" id="faq">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-subtitle">FAQ</span>
            <h2 className="section-title">Tu te poses des <span>questions</span> ?</h2>
          </div>

        <div className="faq-grid">
  {/* Colonne Gauche */}
  <div className="faq-col reveal left">
    <div className="faq-item">
      <div className="faq-question">
        <span>Comment se déroule une collaboration ?</span>
        <i className="fa-solid fa-chevron-down"></i>
      </div>
      <div className="faq-answer">
        <p>Tout commence par un appel de découverte pour aligner nos visions. Ensuite, je passe à l'immersion dans votre univers (recherche d'audience), l'architecture narrative, la rédaction, et enfin les ajustements selon vos retours.</p>
      </div>
    </div>

    <div className="faq-item">
      <div className="faq-question">
        <span>Quels sont tes délais de livraison ?</span>
        <i className="fa-solid fa-chevron-down"></i>
      </div>
      <div className="faq-answer">
        <p>Pour un projet standard (page de vente ou séquence emails), comptez entre 5 et 10 jours ouvrés. Cela inclut le temps de recherche nécessaire pour que chaque mot ait un impact réel sur votre conversion.</p>
      </div>
    </div>

    <div className="faq-item">
      <div className="faq-question">
        <span>Travailles-tu avec tous les secteurs ?</span>
        <i className="fa-solid fa-chevron-down"></i>
      </div>
      <div className="faq-answer">
        <p>Je me spécialise dans l'accompagnement des infopreneurs, des coachs et des entreprises de services. Mon expertise est particulièrement efficace là où la vente repose sur la confiance et l'émotion.</p>
      </div>
    </div>
  </div>

  {/* Colonne Droite */}
  <div className="faq-col reveal right">
    <div className="faq-item">
      <div className="faq-question">
        <span>Quels types de contenus rédiges-tu ?</span>
        <i className="fa-solid fa-chevron-down"></i>
      </div>
      <div className="faq-answer">
        <p>Je conçois des pages de vente haute conversion, des tunnels de vente complets, des emails marketing narratifs, des scripts vidéo de vente (VSL) et du contenu stratégique pour les réseaux sociaux.</p>
      </div>
    </div>

    <div className="faq-item">
      <div className="faq-question">
        <span>Est-ce que tu proposes des révisions ?</span>
        <i className="fa-solid fa-chevron-down"></i>
      </div>
      <div className="faq-answer">
        <p>Absolument. Chaque projet inclut deux cycles de révisions offerts. Mon objectif est que le ton employé soit 100% fidèle à votre personnalité tout en restant redoutablement efficace.</p>
      </div>
    </div>

    <div className="faq-item">
      <div className="faq-question">
        <span>Pourquoi choisir un copywriter narratif ?</span>
        <i className="fa-solid fa-chevron-down"></i>
      </div>
      <div className="faq-answer">
        <p>Parce que les gens détestent qu'on leur vende quelque chose, mais ils adorent qu'on leur raconte une histoire. Le storytelling brise les barrières de vente et crée une connexion que la publicité classique n'aura jamais.</p>
      </div>
    </div>
  </div>
</div>
        </div>
      </section>

      {/* SECTION CONTACT */}
      <section className="cta-contact" id="contact">
        <div className="container">
          <div className="cta-content reveal">
            <h2 className="cta-title">Prêt à passer à l'<span>action</span> ?</h2>
            <p className="cta-description">Rejoins les entreprises qui investissent dans un copywriting stratégique.</p>
            <div className="cta-btns">
              <a href="https://wa.me/22951895151" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <i className="fa-brands fa-whatsapp"></i> Échangeons sur WhatsApp
              </a>
              <a href="#expertises" className="btn-outline">Voir mes services <i className="fa-solid fa-arrow-up"></i></a>
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