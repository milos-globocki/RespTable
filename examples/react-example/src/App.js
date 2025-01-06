import React, { useState, useEffect } from 'react';
import Papa from "papaparse";
import '../src/workaround/stacking.css';
import '../src/workaround/table.css';

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
      <h2>React Example: Responsive Table Library</h2>
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

function App() {
  return (
    <div>
      <CSVTable />
    </div>
  );
}

export default App;
