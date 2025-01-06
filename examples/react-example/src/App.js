import React, { useState, useEffect } from 'react';
import { Table, FTable } from '../src/compiled-files-here/index.esm';
import Papa from "papaparse";
import '../src/workaround/stacking.css';
import '../src/workaround/table.css';

const flippingCols = ["Name", "Manufacturer", "Type", "Calories", "Protein (g)", "Fat (g)", "Sodium (mg)", "Fibre (g)", "Carbo (g)", "Sugar (g)", "Shelf", "Potassium (mg)", "Vitamins", "Weight (oz)", "Cups"];
const flippingRows = [
  ["100%_Bran", "N", "cold", 70, 4, 1, 130, 10.0, 5.0, 6.0, 3, 280, 25, 1.0, 0.33],
  ["100%_Natural_Bran", "Q", "cold", 120, 3, 5, 15, 2.0, 8.0, 8.0, 3, 135, 0, 1.0, null],
  ["All-Bran", "K", "cold", 70, 4, 1, 260, 9.0, 7.0, 5.0, 3, 320, 25, 1.0, 0.33],
  ["All-Bran_with_Extra_Fiber", "K", "cold", 50, 4, 0, 140, 14.0, 8.0, 0.0, 3, 330, 25, 1.0, 0.5],
];
let isFlipped = false;

function CSVTable() {
  const [tableData, setTableData] = useState([]);
  const [headers, setHeaders] = useState([]);

  // Function to fetch and parse the CSV file
  useEffect(() => {
    const fetchCSV = async () => {
      const response = await fetch("/cereals.csv"); // Adjust path if necessary
      const csvText = await response.text();

      Papa.parse(csvText, {
        complete: (result) => {
          const data = result.data;
          setHeaders(data[0]); // Assuming first row is headers
          setTableData(data.slice(1)); // Rest as table rows
        },
        header: false, // Set to true if the CSV includes headers
      });
    };

    fetchCSV();
  }, []);

  return (
    <div>
      
      {tableData.length > 0 ? (
        <table className="responsive-table">
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading CSV data...</p>
      )}
    </div>
  );
}


function flipTable() {
  isFlipped = !isFlipped;
}

function FlippingTable() {
  // const flippedCols = flippingRows.map(row => row[0]);
  const flippedRows = flippingCols.map((col, index) => [col, ...flippingRows.map(row => row[index])]);
  const columns = isFlipped ? flippedRows[0] : flippingCols;
  const rows = isFlipped ? flippedRows.slice(0) : flippingRows;

  return isFlipped ? (
    <div>
      <FTable rows={rows} id="flippingTable"/>
    </div>
  ) : (
    <div>
      <Table columns={columns} rows={rows} id="flippingTable"/>
    </div>
  );
}



function App() {
  const [flip, setFlip] = useState(false);

  const handleFlip = () => {
    flipTable();
    setFlip(!flip);
  };

  return (
    <div>
      <h1>React Example: RespTable Library</h1>
      <FlippingTable key={flip} />
      <button onClick={handleFlip}>Flip Table</button>
      <CSVTable />
    </div>
  );
}

export default App;
