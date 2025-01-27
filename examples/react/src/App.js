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
      const data = await LoadCSV('/cereals.csv');
      setCsvData(data);
      CreateTable(data, true, true, true);
    };

    initializeTable();
  }, []);

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
    ApplyFlipping(csvData, !isFlipped);
  };

  return (
    <div>
      <h1>RespTable: Showcase</h1>
      <button onClick={handleFlip}>Flip Table</button> {}
       <div id="table-container"></div>
    </div>
  );
};

export default App;
