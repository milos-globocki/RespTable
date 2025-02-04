import React, { useState, useEffect } from 'react';
import {
  LoadCSV,
  CreateTable,
  ApplyStacking,
  ApplyFlipping,
} from '../src/respTable/RespTable.js';
import './respTable/RespTable.css';

// Stacking Example:
/*const App = () => {
  useEffect(() => {
    const initializeTable = async () => {
      const csvData = await LoadCSV('/cereals.csv');
      CreateTable(csvData, true);
      ApplyStacking();
    };

    initializeTable();
  }, []);

  return (
    <div>
      <h1>RespTable: Showcase</h1>
      <div id="table-container"></div>
    </div>
  );
};*/

// Flipping Example:

const App = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [csvData, setCsvData] = useState([]);

  useEffect(() => {
    const initializeTable = async () => {
      const data = await LoadCSV(`${process.env.PUBLIC_URL}/cereals.csv`);
      setCsvData(data);
      CreateTable(data, true, true);
    };

    initializeTable();
  }, []);

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
    ApplyFlipping(csvData, !isFlipped);
  };

  return (
    <div>
      <h1 style={{ margin: '20px' }}>RespTable: Showcase</h1>
      <button
        onClick={handleFlip}
        style={{ margin: '20px', padding: '8px', fontSize: '16px' }}
        className="hide-on-mobile"
      >
        Flip Table
      </button>
      <div id="table-container"></div>

      <style>{`
        @media (max-width: 40em) {
          .hide-on-mobile {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default App;
