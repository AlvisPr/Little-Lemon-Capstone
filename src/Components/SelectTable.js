import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SelectTable = () => {
  const [tables, setTables] = useState(Array(10).fill(false)); // false means available, true means occupied
  const navigate = useNavigate();

  const reserveTable = (index) => {
    let newTables = [...tables];
    newTables[index] = true;
    setTables(newTables);
    navigate('/reserve');
  };

  return (
    <div>
      {tables.map((table, index) => (
        <div
          key={index}
          style={{
            width: '50px',
            height: '50px',
            backgroundColor: table ? 'red' : 'green',
            margin: '10px'
          }}
          onClick={() => !table && reserveTable(index)}
        >
          Table {index + 1}
        </div>
      ))}
    </div>
  );
};

export default SelectTable;
