import React, { useState } from 'react';
import './App.css'; // Make sure this path is correct

function App() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <div className="header-inner">
            <div className="logo">
              <a href="#">
                <img src="https://landingfoliocom.imgix.net/store/collection/dusk/images/logo.svg" alt="Logo" />
              </a>
            </div>

            <div className="mobile-toggle">
              <button type="button" onClick={() => setExpanded(!expanded)} className="toggle-button">
                {!expanded ? (
                  <svg className="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>

            <nav className="nav desktop-nav">
              <a href="#">Products</a>
              <a href="#">Features</a>
              <a href="#">Pricing</a>
              <a href="#">Support</a>
            </nav>

            <div className="trial-button-container">
              <a href="#" className="trial-button">Start free trial</a>
            </div>
          </div>

          {expanded && (
            <nav className="nav mobile-nav">
              <a href="#">Products</a>
              <a href="#">Features</a>
              <a href="#">Pricing</a>
              <a href="#">Support</a>
              <a href="#" className="trial-button mobile-trial">Start free trial</a>
            </nav>
          )}
        </div>
      </header>

      <section className="hero">
        <div className="container hero-content">
          <div className="text-section">
            <h1>Connecting Devs with Employers</h1>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>

            <form className="search-form">
              <div className="search-input-wrapper">
                <div className="icon-container">
                  <svg className="icon-sm" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input type="email" placeholder="Try Java Developer, React Dev etc." />
              </div>
              <button type="submit" className="search-button">Find A Developer</button>
            </form>

            <div className="rating">
              <p>Trusted by 50k+ users</p>
              <div className="stars">
                {/* Insert star icons here */}
                <span className="rating-score">4.1/5</span>
                <span className="rating-count">(14k Reviews)</span>
              </div>
            </div>
          </div>

          <div className="illustration">
            <div className="gradient-bg" />
            <div className="noise-overlay">
              <img src="https://landingfoliocom.imgix.net/store/collection/dusk/images/noise.png" alt="Noise" />
            </div>
            <img className="main-illustration" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/hero/2/illustration.png" alt="Illustration" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
