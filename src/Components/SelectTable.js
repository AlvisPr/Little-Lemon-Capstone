import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormDataContext } from './FormDataProvider';
import './SelectTable.css';

const SelectTable = () => {
  const navigate = useNavigate();
  const { formData} = useContext(FormDataContext);

  const [tables, setTables] = useState(
    () => JSON.parse(localStorage.getItem('tables')) ||
      Array(30).fill({ reserved: false, reservationData: null })
  );
  const [selectedTable, setSelectedTable] = useState(null);
  useEffect(() => {
    setTables(() => JSON.parse(localStorage.getItem('tables')) || []);
  }, []);

  useEffect(() => {
    localStorage.setItem('tables', JSON.stringify(tables));
  }, [tables]);

  const selectTable = (index) => {
    setSelectedTable(index);
    setTables((prevTables) => {
      let newTables = [...prevTables];
      newTables[index] = { reserved: true, reservationData: formData };
      return newTables;
    });
  };

  useEffect(() => {
    if (formData?.selectedTable !== undefined) {
      setSelectedTable(formData.selectedTable);
      setTables((prevTables) => {
        let newTables = [...prevTables];
        newTables[formData.selectedTable] = {
          reserved: true,
          reservationData: formData.reservationData,
        };
        return newTables;
      });
    }
  }, [formData]);

  const goToNextComponent = () => {
    if (selectedTable !== null) {
      navigate('/summary');
    } else {
      alert('Please select a table first.');
    }
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
        <h1>Select Table</h1>
      </div>
      <div className="content__wrapper">
        <div className="table__container__wrapper">
          <div className='table__container'>
            {tables.map((table, index) => (
              <div
                key={index}
                style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: table.reserved ? 'red' : 'green',
                  margin: '10px',
                  border: '1px solid black',
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "15px",
                  cursor: "pointer"
                }}
                onClick={() => !table.reserved && selectTable(index)}
              >
                <div className='result'>
                {table.reserved && table.reservationData ? `Reserved for ${table.reservationData.time}` : `Table ${index + 1}`}
                </div>
              </div>
            ))}
          </div>
          <button className='select__table__next__button' onClick={goToNextComponent}>Next</button>
        </div>
      </div>
    </>
  );
};

export default SelectTable;


