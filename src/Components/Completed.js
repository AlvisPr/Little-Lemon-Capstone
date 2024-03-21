import React from 'react';
import "./Completed.css";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Completed() {

const navigate = useNavigate();

const handleComplete=(e)=>{
  e.preventDefault();
  navigate('/');
}

useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  return (
    <div>
      <div className="first__container__wrapper">
        <div className="textblock">
          <h2>Reservations</h2>
          <h3>Chicago</h3>
          <p>Secure your spot at Little Lemon for a delightful dining experience! With table reservations, skip the wait and enjoy our fresh, flavorful dishes in a cozy setting. Book now for priority seating and personalized service. Your table awaits!</p>
          <button>Give Us A Like!</button>
        </div>
        <img
          src="https://images.pexels.com/photos/4551176/pexels-photo-4551176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>

      <div className="reserve__table__title">
        <h1>RESERVED</h1>
      </div>

      <div className="container_completed">
        <div className="data__wrapper__completed">
        <div  onClick={handleComplete} className="x">x</div>
          <div className="message">
            <h1>CONGRATULATIONS</h1>
            <h3>Your table has been reserved successfulfy</h3>
            <h3>PLease check your email for further details</h3>
            <button onClick={handleComplete} className="completedButton">Back To Start </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Completed