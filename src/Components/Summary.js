import React from 'react'

function Summary(props) {
  const { formData } = props;
  const totalGuests =  Number(formData.adults) + Number(formData.babies) + Number(formData.toddlers);

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

    <p>First Name: {formData.firstName}</p>
    <p>Last Name: {formData.lastName}</p>
    <p>Email: {formData.email}</p>
    <p>Date: {formData.date}</p>
    <p>Hour: {formData.time}</p>
    <p>Guest Count: {totalGuests}</p>
</div>
  )
}

export default Summary