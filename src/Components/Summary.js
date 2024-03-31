import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormDataContext } from './FormDataProvider';
import "./Summary.css";

function Summary() {
  const { formData,tableData} = useContext(FormDataContext);
  const totalGuests = Number(formData.adults) + Number(formData.babies) + Number(formData.toddlers);
  const navigate = useNavigate();

  console.log(formData); 
  console.log(tableData);
  
  const handleBack = (e) => {
    e.preventDefault();
    navigate('/reserve');
  };

  const handleNext=(e)=> {
    e.preventDefault();
    navigate('/reservation_completed')
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      
      <div className="reserve__table__title">
        <h1>Summary</h1>
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
            <h3>Ocasion</h3>
            <h3>{formData.occasion}</h3>
          </div>
          <div className="dataField">
            <h3>Guest Count:</h3>
            <h3>{totalGuests}</h3>
          </div>
          <div className="dataField">
            <h3>Table Nr:</h3>
            <h3>{tableData + 1}</h3>
          </div>
          <div className="buttonField">
            <button onClick={handleBack}>Back</button>
            <button onClick={handleNext}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;