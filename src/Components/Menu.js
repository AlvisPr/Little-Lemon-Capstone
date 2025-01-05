import React from 'react';
import './Menu.css';

const Menu = () => {
  const menuCategories = [
    {
      id: 1,
      name: 'Starters',
      items: [
        {
          name: 'Greek Salad',
          description: 'Fresh tomatoes, crisp cucumber, sliced red onion, olives, and feta cheese drizzled with olive oil.',
          price: '$12.99',
          dietary: ['vegetarian'],
        },
        {
          name: 'Bruschetta',
          description: 'Grilled bread rubbed with garlic and topped with diced tomatoes, fresh basil, and olive oil.',
          price: '$9.99',
          dietary: ['vegetarian'],
        },
      ],
    },
    {
      id: 2,
      name: 'Main Courses',
      items: [
        {
          name: 'Lemon Herb Chicken',
          description: 'Grilled chicken breast marinated in Mediterranean herbs, served with roasted vegetables.',
          price: '$24.99',
          dietary: ['gluten-free'],
        },
        {
          name: 'Grilled Sea Bass',
          description: 'Fresh Mediterranean sea bass with lemon butter sauce and seasonal vegetables.',
          price: '$29.99',
          dietary: ['gluten-free'],
        },
      ],
    },
    {
      id: 3,
      name: 'Desserts',
      items: [
        {
          name: 'Baklava',
          description: 'Layers of filo pastry filled with chopped nuts and sweetened with honey syrup.',
          price: '$8.99',
          dietary: ['contains nuts'],
        },
        {
          name: 'Lemon Sorbet',
          description: 'Refreshing homemade lemon sorbet with fresh mint.',
          price: '$6.99',
          dietary: ['vegan', 'gluten-free'],
        },
      ],
    },
  ];

  return (
    <section className="menu-section" id="menu">
      <div className="menu-header">
        <h2>Our Menu</h2>
        <p className="menu-subtitle">Crafted with passion, served with pride</p>
      </div>

      <div className="menu-container">
        {menuCategories.map((category) => (
          <div key={category.id} className="menu-category">
            <h3 className="category-title">{category.name}</h3>
            <div className="menu-items">
              {category.items.map((item, index) => (
                <div key={index} className="menu-item">
                  <div className="item-header">
                    <h4 className="item-name">{item.name}</h4>
                    <span className="item-price">{item.price}</span>
                  </div>
                  <p className="item-description">{item.description}</p>
                  <div className="dietary-tags">
                    {item.dietary.map((tag, i) => (
                      <span key={i} className="dietary-tag">
                        {tag}
                      </span>
                    ))}
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
