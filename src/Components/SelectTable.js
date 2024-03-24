import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormDataContext } from './FormDataProvider';
import './SelectTable.css';

const SelectTable = () => {
  const navigate = useNavigate();
  const { formData, setTableData } = useContext(FormDataContext);

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
    setTableData(index);
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


