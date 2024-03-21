import './Reserve.css';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import Photo from './Photo.jpg';




function Reserve() {

    const navigate = useNavigate();

    const validate = values => {



        const errors = {};

        if (!values.date) {
            errors.date = 'Required';
        }

        if (!values.time) {
            errors.time = 'Required';
        }

        if (!values.adults) {
            errors.adults = 'Required';
        }

        if (!values.toddlers) {
            errors.toddlers = 'Required';
        }

        if (!values.babies) {
            errors.babies = 'Required';
        }

        if (!values.firstName) {
            errors.firstName = 'Required';
        }

        if (!values.lastName) {
            errors.lastName = 'Required';
        }

        if (!values.email) {
            errors.email = 'Required';
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
            errors.email = 'Invalid email address';
        }

        return errors;
    };

    const formik = useFormik({


        initialValues: {
            date: '',
            time: '',
            adults: '',
            toddlers: '',
            babies: '',
            firstName: '',
            lastName: '',
            email: '',
            note: '',
        },
        validate,
        onSubmit: values => {
            console.log(values);
            navigate('/summary', { state: { formData: values } });
        },
    });

    const handleChange = (e) => {
        formik.handleChange(e);
        formik.setFieldTouched(e.target.name, true, false);
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
                    src="https://images.pexels.com/photos/4552127/pexels-photo-4552127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                />
            </div>

            <div className="reserve__table__title">
                <h1>Reserve Table</h1>
            </div>
            <div className="reserve__table__wrapper">

                <form onSubmit={formik.handleSubmit}>
                    <div className="input">
                        <label htmlFor="date">Date</label>
                         <div className="inputWrapper">
                         <input
                            type="date"
                            name="date"
                            id="date"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            required
                            style={
                                formik.touched.date && formik.errors.date
                                    ? { border: '2px solid red' }
                                    : formik.values.date
                                        ? { border: '2px solid green' }
                                        : null
                            }
                        />
                        {formik.touched.date && formik.errors.date ? (
                        <div className="error-message">{formik.errors.date}</div>
                    ) : null}

                         </div>
                    </div>

                  

                    <div className="input">
                        <label htmlFor="time">Time</label>
                        <div className="inputWrapper">
                        <input
                            type="time"
                            name="time"
                            id="time"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            required
                            style={
                                formik.touched.time && formik.errors.time
                                    ? { border: '2px solid red' }
                                    : formik.values.time
                                        ? { border: '2px solid green' }
                                        : null
                            }
                        />
                      
                      {formik.touched.time && formik.errors.time ? (
                        <div className="error-message">{formik.errors.time}</div>
                    ) : null}

                     </div>
                    </div>
                    <hr />
                    <h3>Number Of Dinners</h3>
                    <div className="input">
                        <label htmlFor="adults">Adults</label>
                        <div className="inputWrapper">
                        <input
                            type="number"
                            name="adults"
                            id="adults"
                            onChange={handleChange}
                            required
                            style={
                                formik.touched.adults && formik.errors.adults
                                    ? { border: '2px solid red' }
                                    : formik.values.adults >0
                                        ? { border: '2px solid green' }
                                        :null
                            }
                        />
                       {formik.touched.adults && formik.errors.adults ? (
                        <div className="error-message">{formik.errors.adults}</div>
                    ) : null}

                    </div>
                    </div>
                    <div className="input">
                        <label htmlFor="toddlers">Toddlers</label>
                        <div className="inputWrapper">
                        <input
                            type="number"
                            name="toddlers"
                            id="toddlers"
                            onChange={handleChange}
                            required
                            style={
                                formik.touched.toddlers && formik.errors.toddlers
                                    ? { border: '2px solid red' }
                                    : formik.values.toddels >0
                                        ? { border: '2px solid green' }
                                        :null
                            }
                        />
                             {formik.touched.toddlers && formik.errors.toddlers ? (
                        <div className="error-message">{formik.errors.toddlers}</div>
                    ) : null}
                    </div>
                    </div>
                    <div className="input">
                        <label htmlFor="babies">Babies</label>
                        <div className="inputWrapper">
                        <input
                            type="number"
                            name="babies"
                            id="babies"
                            onChange={handleChange}
                            required
                            style={
                                formik.touched.babies && formik.errors.babies
                                    ? { border: '2px solid red' }
                                    : formik.values.babies >0
                                        ? { border: '2px solid green' }
                                        :null
                            }
                        />
                             {formik.touched.babies && formik.errors.babies ? (
                        <div className="error-message">{formik.errors.babies}</div>
                    ) : null}
                    </div>

                    </div>
                    <hr />
                    <div className="input">
                        <label htmlFor="firstName">Name:</label>
                        <div className="inputWrapper">
                        <input
                            type="text"
                            name="firstName"
                            id="forFirstName"
                            onChange={handleChange}
                            required
                            style={
                                formik.touched.firstName && formik.errors.firstName
                                    ? { border: '2px solid red' }
                                    : formik.values.firstName
                                        ? { border: '2px solid green' }
                                        : null
                            }
                        />
                             {formik.touched.firstName && formik.errors.firstName ? (
                        <div className="error-message">{formik.errors.firstName}</div>
                    ) : null}
                    </div>






                    </div>
                    <div className="input">
                        <label htmlFor="lastName">Last Name:</label>
                        <div className="inputWrapper">
                        <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            onChange={handleChange}
                            required
                            style={
                                formik.touched.lastName && formik.errors.lastName
                                    ? { border: '2px solid red' }
                                    : formik.values.lastName
                                        ? { border: '2px solid green' }
                                        : null
                            }

                        />
                             {formik.touched.lastName && formik.errors.lastName ? (
                        <div className="error-message">{formik.errors.lastName}</div>
                    ) : null}
                    </div>
                    </div>
                    <div className="input">
                        <label htmlFor="email">Email Address</label>
                        <div className="inputWrapper">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            onChange={handleChange}
                            required
                            style={
                                formik.touched.email && formik.errors.email
                                    ? { border: '2px solid red' }
                                    : formik.values.email
                                        ? { border: '2px solid green' }
                                        : null
                            }

                        />
                          {formik.touched.email && formik.errors.email ? (
                        <div className="error-message">{formik.errors.email}</div>
                    ) : null}
                        </div>
                    </div>
                    <hr />
                    <h3>Note</h3>
                    <textarea
                    id="message"
                    name="message"
                    rows="4"
                    cols="50"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    ></textarea>


                    <div className='buttonDiv'>
                        <button className="formButton" type="submit">Next</button>
                    </div>
                </form>
            </div>
          
        </>
    );
}

export default Reserve;













