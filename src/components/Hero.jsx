// Header.js
import React, { useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [expanded, setExpanded] = useState(false);

  const NavLink = ({ children, href }) => (
    <a
      href={href}
      className="nav-link"
      onFocus={(e) => e.target.classList.add('focus:ring-1')}
      onBlur={(e) => e.target.classList.remove('focus:ring-1')}
    >
      {children}
    </a>
  );

  const Button = ({ children, primary, href }) => (
    <a
      href={href}
      className={`button ${primary ? 'primary' : ''}`}
      role="button"
      onFocus={(e) => e.target.classList.add('focus:ring-2')}
      onBlur={(e) => e.target.classList.remove('focus:ring-2')}
    >
      {children}
    </a>
  );

  return (
    <div className="wrapper">
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <a href="#" className="logo-link">
                <img
                  src="https://cdn.rareblocks.xyz/collection/clarity/images/logo.svg"
                  alt="Logo"
                  className="logo-img"
                />
              </a>
            </div>

            <button
              className="mobile-menu-toggle"
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
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

            <div className="desktop-nav">
              <NavLink href="#">Features</NavLink>
              <NavLink href="#">Pricing</NavLink>
              <NavLink href="#">Automation</NavLink>
            </div>

            <div className="desktop-actions">
              <NavLink href="#">Customer Login</NavLink>
              <Button href="#" primary>Sign up</Button>
            </div>
          </div>

          <nav className={`mobile-nav ${expanded ? 'expanded' : ''}`}>
            <div className="mobile-nav-content">
              <NavLink href="#">Features</NavLink>
              <NavLink href="#">Pricing</NavLink>
              <NavLink href="#">Automation</NavLink>
              <NavLink href="#">Customer Login</NavLink>
              <Button href="#" primary>Sign up</Button>
            </div>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-subtitle">Smart email campaign builder, made for Developers</h1>
            <p className="hero-title">
              Turn your visitors into profitable
              <span className="highlight">
                <span className="highlight-bg"></span>
                <span className="highlight-text">business</span>
              </span>
            </p>


             <div className="hero-buttons">
               <Button href="#" primary>Get more customers</Button>
               <a href="#" className="secondary-button">
                 <svg className="play-icon" viewBox="0 0 18 18" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                   <path
                     d="M8.18003 13.4261C6.8586 14.3918 5 13.448 5 11.8113V5.43865C5 3.80198 6.8586 2.85821 8.18003 3.82387L12.5403 7.01022C13.6336 7.80916 13.6336 9.44084 12.5403 10.2398L8.18003 13.4261Z"
                     strokeWidth="2"
                     strokeMiterlimit="10"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                   />
                 </svg>
                 <span>Watch free demo</span>
               </a>
             </div>

            <p className="hero-note">60 Days free trial · No credit card required</p>
          </div>
        </div>

        <div className="hero-image-container">
          <div className="hero-image-wrapper">
            <div className="hero-image-inner">
              <img
                src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/2/illustration.png"
                alt="Illustration"
                className="hero-image"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;