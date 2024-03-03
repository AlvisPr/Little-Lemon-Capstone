import React from 'react';
import "./Summary.css";

function Summary(props) {
  const { formData } = props;
  const totalGuests = Number(formData.adults) + Number(formData.babies) + Number(formData.toddlers);

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
          src="https://images.pexels.com/photos/1537635/pexels-photo-1537635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>




      <div className="reserve__table__title">
        <h1>RESERVATION SUMMARY</h1>
      </div>

      <div className="container">
        <div className="data__wrapper">

          <div className="dataField">
            <h3>First Name:</h3>
            <h3>{formData.firstName}</h3>
          </div>
          <div className="dataField">
            <h3>Last Name:</h3>
            <h3>{formData.lastName}</h3>
          </div>
          <div className="dataField">
            <h3>Email:</h3>
            <h3>{formData.email}</h3>
          </div>
          <div className="dataField">
            <h3>Date:</h3>
            <h3>{formData.date}</h3>
          </div>
          <div className="dataField">
            <h3>Time:</h3>
            <h3>{formData.time}</h3>
          </div>
          <div className="dataField">
            <h3>Guest Count:</h3>
            <h3>{totalGuests}</h3>
          </div>
         <div className="buttonField">
          <button>Back</button>
          <button>Next</button>
         </div>
        </div>
      </div>




    </div>
  )
}

export default Summary