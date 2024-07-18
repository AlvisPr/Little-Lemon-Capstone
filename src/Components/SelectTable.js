import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FormDataContext } from './FormDataProvider';
import './SelectTable.css';

const SelectTable = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { formData, setTableData } = useContext(FormDataContext);
  const reservationData = location.state?.formData || formData;

  console.log(`This is form data available to SelectTable.js ${JSON.stringify(reservationData, null, 2)}`);

  const [tables, setTables] = useState(() => {
    const storedTables = JSON.parse(localStorage.getItem('tables'));
    return storedTables || Array(30).fill({ reserved: false, reservationData: null });
  });

  const [selectedTable, setSelectedTable] = useState(null);

  useEffect(() => {
    if (reservationData && reservationData.date && reservationData.time) {
      const updatedTables = tables.map((table, index) => {
        if (index === reservationData.selectedTable) {
          return { ...table, reserved: true, reservationData: reservationData };
        }
        return table;
      });
      setTables(updatedTables);
      localStorage.setItem('tables', JSON.stringify(updatedTables));
    }
  }, [reservationData,tables]);

  const selectTable = (index) => {
    setSelectedTable(index);
    setTableData(index);
    setTables((prevTables) => {
      let newTables = [...prevTables];
      newTables[index] = { reserved: true, reservationData: reservationData };
      return newTables;
    });
  };

  const goToNextComponent = () => {
    if (selectedTable !== null) {
      navigate('/summary');
    } else {
      alert('Please select a table first.');
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
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
