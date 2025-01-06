import React from 'react';
import '../styles/table.css';

export const Table = ({ columns, rows, id, className = 'responsive-table'}) => (
  <table className={className} id={id}>
    <thead>
      <tr>
        {columns.map((col, idx) => (
          <th key={idx}>{col}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {rows.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {row.map((cell, cellIndex) => (
            <td key={cellIndex}>{cell}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export const FTable = ({ rows, id, className = 'responsive-table'}) => (
  <table className={className} id={id}>
    <tbody>
      {rows.map((row, rowIndex) => (
        <tr key={rowIndex}>
        {row.map((cell, cellIndex) => (
          cellIndex === 0 ? <th key={cellIndex}>{cell}</th> : <td key={cellIndex}>{cell}</td>
        ))}
      </tr>
      ))}
    </tbody>
  </table>
);
