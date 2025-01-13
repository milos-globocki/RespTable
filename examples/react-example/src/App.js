import React, {useState, useEffect } from 'react';
import { LoadCSV, CreateTable, ApplyStacking, RenderTable, ApplyFlipping } from '../src/compiled-files-here/index.esm';
import './compiled-files-here/index.esm.css';

// Stacking Example:
/* const App = () => {
  useEffect(() => {
    const initializeTable = async () => {
      const csvData = await LoadCSV('/cereals.csv');
      
      const table = CreateTable(csvData);
      

      ApplyStacking(table);
      RenderTable(table);
    };

    initializeTable();
  }, []);

  return (
    <div>
      <h1>RespTable: Showcase</h1>
      <div id="table-container"></div>
    </div>
  );
}; */

// Flipping Example:
const App = () => {
  const [isFlipped, setIsFlipped] = useState(false); 
  const [csvData, setCsvData] = useState([]);

  useEffect(() => {
    const initializeTable = async () => {
      const data = await LoadCSV('/cereals.csv');
      setCsvData(data);
      const table = CreateTable(data);
      ApplyStacking(table);
      RenderTable(table);
    };

    initializeTable();
  }, []);

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
    const table = ApplyFlipping(csvData, !isFlipped);
    if (table) {
      RenderTable(table);
    } else {
      console.error("Failed to render flipped table.");
    }
  };

  return (
    <div>
      <h1>RespTable: Showcase</h1>
      <button onClick={handleFlip}>Flip Table</button> {/* Button to toggle flipping */}
      <div id="table-container"></div>
    </div>
  );
};

export default App;