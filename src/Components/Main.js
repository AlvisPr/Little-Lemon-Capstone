import React from 'react'
import "./Main.css"
import StarRoundedIcon from '@mui/icons-material/StarRounded';



function Main() {
  return (
    <>
      <div className="first__container__wrapper">
        <div className="content__wrapper">
          <div className="textblock">
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aut eos culpa unde quisquam magni accusantium in ullam qui
              placeat nostrum veniam, error, amet accusamus modi, delectus
              optio dolor. Laudantium, voluptate?</p>
            <button>Reserve Table</button>
          </div>
          <img src="https://images.unsplash.com/photo-1625430173218-af251641feb9?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
      </div>



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
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores voluptates id fugit ab hic sapiente ducimus eaque sed repudiandae quibusdam!</p>
              <button>Order Now!</button>
            </div>
          </div>

          <div className="card">
            <img src="https://images.unsplash.com/photo-1607532941433-304659e8198a?q=80&w=1378&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Greek Salad" />
            <div className='card__content'>
              <div className='card__title'>
                <h3>Greek Salad</h3>
                <h3>$13</h3>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores voluptates id fugit ab hic sapiente ducimus eaque sed repudiandae quibusdam!</p>
              <button>Order Now!</button>
            </div>
          </div>

          <div className="card">
            <img src="https://images.unsplash.com/photo-1607532941433-304659e8198a?q=80&w=1378&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Greek Salad" />
            <div className='card__content'>
              <div className='card__title'>
                <h3>Greek Salad</h3>
                <h3>$13</h3>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores voluptates id fugit ab hic sapiente ducimus eaque sed repudiandae quibusdam!</p>
              <button>Order Now!</button>
            </div>
          </div>
        </div>
      </div>

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

<div className="forth__container__wrapper">
<div className="forth__card__wrapper">
<div className="forth__container__textblock">
  <h1>Little Lemon</h1>
  <h3>Chicago</h3>
  <p></p>
</div>
<div className="forth__container__pictures__abosolute">
  <img src="" alt="" />
  <img src="" alt="" />
</div>
</div>
</div>

    </>
  )
}

export default Main