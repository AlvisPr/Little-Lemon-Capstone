import React, { useEffect } from 'react';
import "./Main.css";
import { Element } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import StarRoundedIcon from '@mui/icons-material/StarRounded';

function Main() {
  const navigate = useNavigate();

  const onReserveClick = () => {
    navigate('/reserve');
  };

  const onButtonClick = () => {
    const pdfUrl = "/Menu.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Menu.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Element name="reserve">
        <section className="first__container__wrapper">
          <motion.article 
            className="textblock"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>Welcome to Little Lemon, where Mediterranean flavors meet modern cuisine. Our chef-crafted menu features fresh, locally-sourced ingredients transformed into unforgettable dishes. From our signature lemon-infused specialties to traditional favorites with a contemporary twist, every bite tells a story of passion and creativity.</p>
            <button aria-label="Reserve table" onClick={onReserveClick}>
              Reserve Your Table
            </button>
          </motion.article>
          <motion.img 
            src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2670&auto=format&fit=crop"
            alt="Luxurious Mediterranean restaurant interior with rustic stone archways, warm lighting, and elegant table settings draped in fine linens" 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          />
        </section>
      </Element>

      <Element name="menu">
        <section className="second__container__wrapper">
          <div className="specials-header">
            <h3>Featured Menu</h3>
            <button>Online Menu</button>
          </div>
          <div className="content__wrapper__two">
            <motion.article 
              className="card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1503767849114-976b67568b02?q=80&w=2670&auto=format&fit=crop" 
                alt="Artfully plated Greek salad with premium feta, Kalamata olives, and micro herbs" 
              />
              <div className='card__content'>
                <header className='card__title'>
                  <h3>Greek Salad</h3>
                  <h3>$13</h3>
                </header>
                <p>Our signature Greek salad combines crisp romaine, vine-ripened tomatoes, Kalamata olives, and premium feta cheese, dressed in our house-made Mediterranean vinaigrette.</p>
                <button aria-label="Order Greek Salad" onClick={() => { alert('Online ordering coming soon!') }}>
                  Order Now
                </button>
              </div>
            </motion.article>

            <motion.article 
              className="card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1608897013039-887f21d8c804?q=80&w=2672&auto=format&fit=crop" 
                alt="Handmade pasta with San Marzano tomato sauce and fresh basil" 
              />
              <div className='card__content'>
                <header className='card__title'>
                  <h3>Pomodoro</h3>
                  <h3>$25</h3>
                </header>
                <p>Hand-crafted pasta tossed in our slow-simmered tomato sauce, finished with fresh basil, extra virgin olive oil, and aged Parmigiano-Reggiano.</p>
                <button aria-label="Order Pomodoro" onClick={() => { alert('Online ordering coming soon!') }}>
                  Order Now
                </button>
              </div>
            </motion.article>

            <motion.article 
              className="card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?q=80&w=2674&auto=format&fit=crop" 
                alt="Artisanal bruschetta with heirloom tomatoes and fresh herbs" 
              />
              <div className='card__content'>
                <header className='card__title'>
                  <h3>Bruschetta</h3>
                  <h3>$17</h3>
                </header>
                <p>Grilled artisanal bread topped with marinated tomatoes, fresh basil, garlic, and a drizzle of premium extra virgin olive oil from the Mediterranean coast.</p>
                <button aria-label="Order Bruschetta" onClick={() => { alert('Online ordering coming soon!') }}>
                  Order Now
                </button>
              </div>
            </motion.article>
          </div>
        </section>
      </Element>

      <Element name="reviews">
        <section className="third__container__wrapper">
          <div className="testimonials_card_wrapper">
            <article className="testimonials__card">
              <div className="card__name">
                <img 
                  src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1000&auto=format&fit=crop" 
                  alt="Sophia, a regular customer" 
                />
                <h3>Sophia</h3>
                <div className='star__stack'>
                  <StarRoundedIcon className='my__custom__star'/>
                  <StarRoundedIcon className='my__custom__star'/>
                  <StarRoundedIcon className='my__custom__star'/>
                  <StarRoundedIcon className='my__custom__star'/>
                  <StarRoundedIcon className='my__custom__star'/>
                </div>
              </div>
            </article>

            <article className="testimonials__card">
              <div className="card__name">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
                  alt="David, a food enthusiast" 
                />
                <h3>David</h3>
                <div className='star__stack'>
                  <StarRoundedIcon className='my__custom__star'/>
                  <StarRoundedIcon className='my__custom__star'/>
                  <StarRoundedIcon className='my__custom__star'/>
                  <StarRoundedIcon className='my__custom__star'/>
                  <StarRoundedIcon className='my__custom__star'/>
                </div>
              </div>
            </article>

            <article className="testimonials__card">
              <div className="card__name">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop" 
                  alt="Isabella, a regular diner" 
                />
                <h3>Isabella</h3>
                <div className='star__stack'>
                  <StarRoundedIcon className='my__custom__star'/>
                  <StarRoundedIcon className='my__custom__star'/>
                  <StarRoundedIcon className='my__custom__star'/>
                  <StarRoundedIcon className='my__custom__star'/>
                  <StarRoundedIcon className='my__custom__star'/>
                </div>
              </div>
            </article>

            <article className="testimonials__card">
              <div className="card__name">
                <img 
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop" 
                  alt="Alex, a food lover" 
                />
                <h3>Alex</h3>
                <div className='star__stack'>
                  <StarRoundedIcon className='my__custom__star'/>
                  <StarRoundedIcon className='my__custom__star'/>
                  <StarRoundedIcon className='my__custom__star'/>
                  <StarRoundedIcon className='my__custom__star'/>
                </div>
              </div>
            </article>
          </div>
        </section>
      </Element>

      <Element name="about">
        <section className="forth__container__wrapper">
          <div className="forth__card__wrapper">
            <div className="forth__container__textblock">
              <h1>Little Lemon</h1>
              <h3>Chicago</h3>
              <p>
                Little Lemon began as a humble dream shared by two friends, Maria and Alex, who had a passion for Mediterranean cuisine. In 2010, they opened their first small eatery in a quaint neighborhood, offering homemade dishes inspired by their travels and family recipes.
                Word quickly spread about the restaurant's fresh flavors and warm hospitality. Customers flocked to Little Lemon for its authentic Mediterranean dishes, from juicy kebabs to tangy salads, all prepared with love and care.
              </p>
            </div>
            <div className="forth__container__pictures__absolute">
              <img 
                className="img-1" 
                src="https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?q=80&w=2670&auto=format&fit=crop" 
                alt="Professional chef preparing Mediterranean dishes in our state-of-the-art kitchen" 
              />
              <img 
                className="img-2" 
                src="https://images.unsplash.com/photo-1606914501449-5a96b6ce24ca?q=80&w=2670&auto=format&fit=crop" 
                alt="Artisanal selection of Mediterranean ingredients and spices" 
              />
            </div>
          </div>
        </section>
      </Element>
    </main>
  );
}

export default Main;