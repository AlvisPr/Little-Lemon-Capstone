import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-hero">
        <div className="about-hero-content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>A Modern Take on Traditional Mediterranean Cuisine</p>
        </div>
      </div>

      <div className="about-story">
        <div className="about-story-content">
          <div className="story-text">
            <h3>Our Story</h3>
            <p>
              Founded in Chicago, Little Lemon has been bringing the vibrant flavors 
              of the Mediterranean to your table since 2010. Our passion for authentic 
              cuisine and warm hospitality creates an unforgettable dining experience.
            </p>
          </div>
          <div className="story-stats">
            <div className="stat-item">
              <span className="stat-number">13+</span>
              <span className="stat-label">Years of Service</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Signature Dishes</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">4.8</span>
              <span className="stat-label">Customer Rating</span>
            </div>
          </div>
        </div>
      </div>

      <div className="about-features">
        <div className="feature-card">
          <div className="feature-icon">🌿</div>
          <h4>Fresh Ingredients</h4>
          <p>Locally sourced, seasonal ingredients for authentic Mediterranean flavors</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">👨‍🍳</div>
          <h4>Expert Chefs</h4>
          <p>Passionate culinary artists with years of Mediterranean expertise</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🏺</div>
          <h4>Traditional Recipe</h4>
          <p>Time-honored family recipes with a modern creative twist</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🤝</div>
          <h4>Community First</h4>
          <p>Creating memorable experiences and bringing people together</p>
        </div>
      </div>
    </section>
  );
};

export default About;
