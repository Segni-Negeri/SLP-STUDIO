import React from 'react';
import './BlogScroll.css';

const BlogScroll = () => {
  const blogPosts = [
    {
      thumbnail: 'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/5/thumbnail-1.png',
      category: 'Growth',
      title: 'How a visual artist redefines success in graphic design',
      date: 'April 09, 2022',
    },
    {
      thumbnail: 'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/5/thumbnail-2.png',
      category: 'Growth',
      title: 'How a visual artist redefines success in graphic design',
      date: 'April 09, 2022',
    },
    {
      thumbnail: 'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/5/thumbnail-3.png',
      category: 'Growth',
      title: 'How a visual artist redefines success in graphic design',
      date: 'April 09, 2022',
    },
    {
      thumbnail: 'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/5/thumbnail-4.png',
      category: 'Growth',
      title: 'How a visual artist redefines success in graphic design',
      date: 'April 09, 2022',
    },
    {
      thumbnail: 'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/5/thumbnail-5.png',
      category: 'Growth',
      title: 'How a visual artist redefines success in graphic design',
      date: 'April 09, 2022',
    },
  ];

  return (
    <div className="blogScroll-wrapper">
      <section className="blogScroll-section">
        {/* Background Image */}
        <div className="blogScroll-bg">
          <img
            className="blogScroll-bg-img"
            src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/5/grid-pattern.png"
            alt=""
          />
        </div>

        {/* Hero Content */}
        <div className="blogScroll-container">
          <div className="blogScroll-content">
            <h1 className="blogScroll-title">
              Helping developers to get their dream job
            </h1>
            <p className="blogScroll-subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu.
            </p>

            <form
              action="#"
              method="POST"
              className="blogScroll-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="blogScroll-input-wrapper">
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="blogScroll-input"
                    placeholder="Email address"
                  />
                </div>
              </div>

              <div className="blogScroll-button-wrapper group">
                <div className="blogScroll-button-glow" />
                <button type="button" className="blogScroll-button">
                  Join Now
                </button>
              </div>
            </form>

            <ul className="blogScroll-features">
              <li className="blogScroll-feature-item">
                <svg
                  className="blogScroll-check-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="blogScroll-feature-text">
                  Weekly new articles
                </span>
              </li>
              <li className="blogScroll-feature-item">
                <svg
                  className="blogScroll-check-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="blogScroll-feature-text">
                  Join other 1600+ Devs
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Horizontal Scroll Section */}
        <div className="blogScroll-scroll-container">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="blogScroll-card-wrapper snap-center scroll-ml-6 shrink-0"
            >
              <div className="blogScroll-card">
                <div className="blogScroll-card-content">
                  <div className="blogScroll-card-inner">
                    <a href="#" title="" className="blogScroll-thumbnail-link">
                      <img
                        className="blogScroll-thumbnail"
                        src={post.thumbnail}
                        alt=""
                      />
                    </a>
                    <div className="blogScroll-text-content">
                      <p className="blogScroll-category">
                        <a href="#" title="" className="">
                          {post.category}
                        </a>
                      </p>
                      <p className="blogScroll-title-text">
                        <a href="#" title="" className="group-hover:text-gray-600">
                          {post.title}
                        </a>
                      </p>
                      <p className="blogScroll-date">{post.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogScroll;