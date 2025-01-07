import React from 'react';
import './Specials.css';

const Specials = () => {
  const specials = [
    {
      id: 1,
      name: "Greek Salad",
      price: "$12.99",
      description: "Fresh tomatoes, cucumber, red onion, olives and feta cheese.",
      image: "greek-salad.jpg"
    },
    {
      id: 2,
      name: "Bruschetta",
      price: "$9.99",
      description: "Grilled bread with tomatoes, fresh basil, and olive oil.",
      image: "bruschetta.jpg"
    },
    {
      id: 3,
      name: "Lemon Dessert",
      price: "$6.99",
      description: "Light and fluffy lemon cake with citrus glaze.",
      image: "lemon-dessert.jpg"
    }
  ];

  return (
    <section className="specials-section">
      <div className="container">
        <div className="specials-header">
          <div className="title-wrapper">
            <h1 className="title">Our Menu</h1>
            <span className="title-decoration"></span>
          </div>
          <button className="menu-button">Online Menu</button>
        </div>

        <div className="specials-grid">
          {specials.map((special) => (
            <div key={special.id} className="special-card">
              <div className="special-image">
                <img src={special.image} alt={special.name} />
              </div>
              <div className="special-content">
                <div className="special-header">
                  <h3>{special.name}</h3>
                  <span className="price">{special.price}</span>
                </div>
                <p className="description">{special.description}</p>
                <button className="order-button">
                  Order a delivery
                  <span className="icon">🛵</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specials;
