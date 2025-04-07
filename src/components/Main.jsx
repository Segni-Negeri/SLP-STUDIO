import React from 'react';
import './Main.css';

const Main = () => {
  const Button = ({ children, href }) => (
    <a href={href} className="heroSection-button" role="button">
      {children}
    </a>
  );

  return (
    <div className="heroSection-wrapper">
      <section className="heroSection-hero">
        <div className="heroSection-hero-bg">
          <img
            src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/background-pattern.png"
            alt="Background Pattern"
            className="heroSection-hero-bg-img"
          />
        </div>

        <div className="heroSection-hero-container">
          <div className="heroSection-hero-content">
            <div className="heroSection-hero-text">
              <h1 className="heroSection-hero-title">
                An editor that helps you write clean codes.
              </h1>
              <p className="heroSection-hero-subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu.
              </p>
              <Button href="#">Try our free editor</Button>

              <div className="heroSection-review-section">
                <div className="heroSection-stars">
                  {Array(5).fill().map((_, i) => (
                    <svg
                      key={i}
                      className="heroSection-star"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-label="Star rating"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3 .921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="heroSection-review-quote">
                  <p className="heroSection-quote-text">Best code editor in market!</p>
                  <p className="heroSection-quote-subtext">
                    Consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu, aliquam nulla tincidunt gravida. Cursus convallis dolor semper pretium ornare.
                  </p>
                </blockquote>
                <div className="heroSection-review-author">
                  <img
                    src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/avatar-female.png"
                    alt="Denny Jones"
                    className="heroSection-author-avatar"
                  />
                  <p className="heroSection-author-name">Denny Jones</p>
                </div>
              </div>
            </div>

            <div className="heroSection-hero-image">
              <img
                src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/illustration.png"
                alt="Editor Illustration"
                className="heroSection-hero-img"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;