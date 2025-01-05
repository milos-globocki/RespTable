import React from 'react';
import '../styles/table.css';

export const Table = ({ columns, rows, className = 'responsive-table' }) => (
  <table className={className}>
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
