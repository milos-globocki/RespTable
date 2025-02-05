import React, { useState, useEffect } from 'react';
import {
  LoadCSV,
  CreateTable,
  ApplyStacking,
  ApplyFlipping,
} from '../src/respTable/RespTable.js';
import './respTable/RespTable.css';

// Stacking only Example:
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
      <h1>RespTable: Showcase React Example (with CSV loading and Stacking)</h1>
      <div id="table-container"></div>
    </div>
  );
};*/

// Flipping and Stacking Example:
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
      <h1 style={{ margin: '1.25em' }}>RespTable: Showcase React Example (with CSV loading, Stacking, and Flipping)</h1>
      <button
        onClick={handleFlip}
        style={{ margin: '1.25em', padding: '0.5em', fontSize: '1em' }}
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
