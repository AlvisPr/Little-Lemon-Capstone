import React from 'react';
import './Menu.css';

const Menu = () => {
  const menuCategories = {
    categories: [
      {
        name: 'Starters',
        items: [
          {
            name: 'Greek Salad',
            description: 'Fresh Mediterranean salad with our signature dressing',
            price: 13,
            dietary: ['vegetarian'],
            image: 'https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg'
          },
          {
            name: 'Bruschetta',
            description: 'Grilled bread with tomatoes and premium olive oil',
            price: 17,
            dietary: ['vegetarian'],
            image: 'https://images.pexels.com/photos/2228559/pexels-photo-2228559.jpeg'
          },
        ],
      },
      {
        name: 'Main Courses',
        items: [
          {
            name: 'Pomodoro',
            description: 'Classic pasta in tomato sauce with fresh basil',
            price: 25,
            dietary: ['gluten-free'],
            image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg'
          },
          {
            name: 'Carbonara',
            description: 'Traditional pasta with eggs and crispy guanciale',
            price: 27,
            dietary: ['gluten-free'],
            image: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg'
          },
          {
            name: 'Seafood Risotto',
            description: 'Creamy arborio rice with fresh seafood',
            price: 32,
            dietary: ['gluten-free'],
            image: 'https://images.pexels.com/photos/725997/pexels-photo-725997.jpeg'
          },
        ],
      },
      {
        name: 'Desserts',
        items: [
          {
            name: 'Margherita',
            description: 'Classic pizza with mozzarella and basil',
            price: 19,
            dietary: ['contains nuts'],
            image: 'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg'
          },
        ],
      },
    ],
  };

  return (
    <section className="menu-section" id="menu">
      <div className="menu-header">
        <h2>Our Menu</h2>
        <p className="menu-subtitle">Crafted with passion, served with pride</p>
      </div>

      <div className="menu-container">
        {menuCategories.categories.map((category) => (
          <div key={category.name} className="menu-category">
            <h3 className="category-title">{category.name}</h3>
            <div className="menu-items">
              {category.items.map((item, index) => (
                <div key={index} className="menu-item">
                  <div className="item-image-container">
                    <img src={item.image} alt={item.name} className="item-image" />
                  </div>
                  <div className="item-content">
                    <div className="item-header">
                      <h3 className="item-name">{item.name}</h3>
                      <span className="item-price">${item.price}</span>
                    </div>
                    <p className="item-description">{item.description}</p>
                    <div className="dietary-tags">
                      {item.dietary.map((tag, i) => (
                        <span key={i} className="dietary-tag">{tag}</span>
                      ))}
                    </div>
                    <button className="order-button">Order Now</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
