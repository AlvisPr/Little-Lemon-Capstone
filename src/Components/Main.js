import React from 'react'
import "./Main.css"
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { Element} from 'react-scroll';
import { useNavigate } from 'react-router-dom';




function Main() {
  const navigate = useNavigate();

  const onReserveClick = () => {
    navigate('/reserve');
  };
  return (
    <>
    <Element name="reserve">
      <div className="first__container__wrapper">
          <div className="textblock">
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>Experience a taste of the Mediterranean at Little Lemon. Indulge in authentic dishes bursting with flavor, from savory kebabs to vibrant salads. Each bite is a journey to sun-kissed shores, crafted with care and using only the freshest ingredients. Discover your paradise today.</p>
            <button onClick={onReserveClick}>Reserve Table</button>
          </div>
          <img src="https://media.istockphoto.com/id/1054319798/es/foto/grupo-de-amigos-felizes-desayunando-en-el-restaurante.jpg?s=612x612&w=0&k=20&c=0P7WmrLoHGH-9tfNa6_Trt86dllqX1C34kt9XfA-28o=" alt="" />
      </div>
      </Element>

      <Element name="menu">
      <div className="second__container__wrapper">

        <div className="second__container__title">
          <h3>This weeks specials</h3>
          <button>Online Menu</button>
        </div>
        <div className="content__wrapper__two">
          <div className="card">
            <img src="https://images.unsplash.com/photo-1607532941433-304659e8198a?q=80&w=1378&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Greek Salad" />
            <div className='card__content'>
              <div className='card__title'>
                <h3>Greek Salad</h3>
                <h3>$13</h3>
              </div>
              <p>Classic Greek salad: Crisp lettuce, tomatoes, cucumbers, red onions, olives, and feta cheese, with olive oil and herbs.</p>
              <button>Order Now!</button>
            </div>
          </div>

          <div className="card">
            <img src="https://images.pexels.com/photos/6287520/pexels-photo-6287520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Greek Salad" />
            <div className='card__content'>
              <div className='card__title'>
                <h3>Pomodoro</h3>
                <h3>$25</h3>
              </div>
              <p>Spaghetti Pomodoro: Al dente pasta tossed in a rich tomato sauce, infused with garlic, basil, and olive oil, a timeless Italian favorite.</p>
              <button>Order Now!</button>
            </div>
          </div>

          <div className="card">
            <img src="https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Greek Salad" />
            <div className='card__content'>
              <div className='card__title'>
                <h3>Avocado Toast</h3>
                <h3>$17</h3>
              </div>
              <p>Avocado Toast: Creamy avocado on artisan bread, topped with sea salt and olive oil.It's an excelent starter</p>
              <button>Order Now!</button>
            </div>
          </div>
        </div>
      </div>
      </Element>


      <Element name="reviews">
      <div className="third__container__wrapper">
        <h1>Testimonials</h1>
        <div className="testimonials_card_wrapper">
          <div className="testimonials__card">
            <h3>Rating</h3>
            <div className="card__name">
              <img src="https://mighty.tools/mockmind-api/content/human/43.jpg" alt="" />
              <h3>Rebeca</h3>
            </div>
            <div className="stars">
              <h3>Stars</h3>
              <div className='star__stack'>
              <StarRoundedIcon className='my__custom__star'/>
              <StarRoundedIcon className='my__custom__star'/>
              <StarRoundedIcon className='my__custom__star'/>
              <StarRoundedIcon className='my__custom__star'/>
              </div>
            </div>
          </div>

          <div className="testimonials__card">
            <h3>Rating</h3>
            <div className="card__name">
              <img src="https://mighty.tools/mockmind-api/content/human/27.jpg" alt="" />
              <h3>Jhon</h3>
            </div>
            <div className="stars">
              <h3>Stars</h3>
              <div className='star__stack'>
              <StarRoundedIcon className='my__custom__star'/>
              <StarRoundedIcon className='my__custom__star'/>
              <StarRoundedIcon className='my__custom__star'/>
              <StarRoundedIcon className='my__custom__star'/>
              </div>
            </div>
          </div>

          <div className="testimonials__card">
            <h3>Rating</h3>
            <div className="card__name">
              <img src="https://mighty.tools/mockmind-api/content/human/25.jpg" alt="" />
              <h3>Carl</h3>
            </div>
            <div className="stars">
              <h3>Stars</h3>
              <div className='star__stack'>
              <StarRoundedIcon className='my__custom__star'/>
              <StarRoundedIcon className='my__custom__star'/>
              <StarRoundedIcon className='my__custom__star'/>
              <StarRoundedIcon className='my__custom__star'/>
              </div>
            </div>
          </div>

          <div className="testimonials__card">
            <h3>Rating</h3>
            <div className="card__name">
              <img src="https://mighty.tools/mockmind-api/content/human/9.jpg" alt="" />
              <h3>Katy</h3>
            </div>
            <div className="stars">
              <h3>Stars</h3>
              <div className='star__stack'>
              <StarRoundedIcon className='my__custom__star'/>
              <StarRoundedIcon className='my__custom__star'/>
              <StarRoundedIcon className='my__custom__star'/>
              <StarRoundedIcon/>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Element>

<Element name="about">
<div className="forth__container__wrapper">
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
  <img className="img-1"  src="https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
  <img className="img-2" src="https://images.unsplash.com/photo-1506368249639-73a05d6f6488?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
</div>
</div>
</div>
</Element>
    </>
  )
}

export default Main