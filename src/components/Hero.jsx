import React, { useState } from 'react';
import './Hero.css';

function Hero() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="app-container">
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <a href="#" className="logo-link">
                <img src="https://cdn.rareblocks.xyz/collection/clarity/images/logo.svg" alt="" className="logo-img" />
              </a>
            </div>

            <div className="mobile-menu-toggle">
              <button 
                type="button" 
                className="menu-button"
                onClick={() => setExpanded(!expanded)}
              >
                {!expanded ? (
                  <svg className="menu-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="menu-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>

            <div className="desktop-nav">
              <a href="#" className="nav-link">Features</a>
              <a href="#" className="nav-link">Pricing</a>
              <a href="#" className="nav-link">Automation</a>
            </div>

            <div className="desktop-actions">
              <a href="#" className="nav-link">Customer Login</a>
              <a href="#" className="signup-button">Sign up</a>
            </div>
          </div>

          {expanded && (
            <nav className="mobile-nav">
              <div className="mobile-nav-content">
                <a href="#" className="mobile-nav-link">Features</a>
                <a href="#" className="mobile-nav-link">Pricing</a>
                <a href="#" className="mobile-nav-link">Automation</a>
                <a href="#" className="mobile-nav-link">Customer Login</a>
                <a href="#" className="signup-button">Sign up</a>
              </div>
            </nav>
          )}
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-subtitle">Smart email campaign builder, made for Developers</h1>
            <p className="hero-title">
              Turn your visitors into profitable
              <span className="highlight-wrapper">
                <span className="highlight-bg"></span>
                <span className="highlight-text">business</span>
              </span>
            </p>

            <div className="hero-buttons">
              <a href="#" className="cta-button">Get more customers</a>
              <a href="#" className="demo-button">
                <svg className="play-icon" viewBox="0 0 18 18" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.18003 13.4261C6.8586 14.3918 5 13.448 5 11.8113V5.43865C5 3.80198 6.8586 2.85821 8.18003 3.82387L12.5403 7.01022C13.6336 7.80916 13.6336 9.44084 12.5403 10.2398L8.18003 13.4261Z"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Watch free demo
              </a>
            </div>

            <p className="hero-note">60 Days free trial · No credit card required</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;