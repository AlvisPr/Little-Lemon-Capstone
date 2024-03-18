import React, { useState } from 'react';
import './Reserve.css';
import { useNavigate } from 'react-router-dom';


function Reserve() {
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        adults: '',
        toddlers: '',
        babies: '',
        firstName: '',
        lastName: '',
        email: '',
        note: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        navigate('/summary', { state: { formData: formData } });
    };


    return (
         <>
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
                <h1>Reserve Table</h1>
            </div>
            <div className="reserve__table__wrapper">
                <form onSubmit={handleSubmit}>
                    <div className="input">
                        <label htmlFor="date">Date</label>
                        <input type="date" name="date" id="date" onChange={handleChange} required />
                    </div>
                    <div className="input">
                        <label htmlFor="time">Time</label>
                        <input type="time" name="time" id="time" onChange={handleChange} required />
                    </div>
                    <hr />
                    <h3>Number Of Dinners</h3>
                    <div className="input">
                        <label htmlFor="adults">Adults</label>
                        <input type="number" name="adults" id="adults" onChange={handleChange} required />
                    </div>
                    <div className="input">
                        <label htmlFor="toddlers">Toodlers</label>
                        <input type="number" name="toddlers" id="toddlers" onChange={handleChange} required />
                    </div>
                    <div className="input">
                        <label htmlFor="babies">Babies</label>
                        <input type="number" name="babies" id="babies" onChange={handleChange} required />
                    </div>
                    <hr />
                    <div className="input">
                        <label htmlFor="firstName">Name:</label>
                        <input type="text" name="firstName" id="forFirstName" onChange={handleChange} required />
                    </div>
                    <div className="input">
                        <label htmlFor="lastName">Last Name:</label>
                        <input type="text" name="lastName" id="lastName" onChange={handleChange} required />
                    </div>
                    <div className="input">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" name="email" id="email" onChange={handleChange} required />
                    </div>
                    <hr />
                    <h3>Note</h3>
                    <textarea id="message" name="message" rows="4" cols="50"></textarea>
                    <div className='buttonDiv'>
                        <button className="formButton" type="submit">Next</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Reserve;













