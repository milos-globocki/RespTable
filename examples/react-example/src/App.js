import React, { useEffect } from 'react';
import { LoadCSV, CreateTable, ApplyStacking, RenderTable } from '../src/compiled-files-here/index.esm';
import './compiled-files-here/index.esm.css';


const App = () => {
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
      <h1>CSV Table</h1>
      <div id="table-container"></div>
    </div>
  );
};
export default App;