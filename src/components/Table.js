import '../styles/table.css';
import '../styles/stacking.css'
import { csvParse } from 'd3-dsv';

export const LoadCSV = async (csvFilePath) => {
  const response = await fetch(csvFilePath);
  const csvText = await response.text();
  const parsedData = csvParse(csvText);
  return parsedData; 
};

export const CreateTable = (data) => {
  const headers = Object.keys(data[0]);
  const table = document.createElement('table');
  table.classList.add('responsive-table');

  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');
  headers.forEach((header) => {
    const th = document.createElement('th');
    th.textContent = header;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement('tbody');
  data.forEach((row) => {
    const tr = document.createElement('tr');
    Object.values(row).forEach((cell) => {
      const td = document.createElement('td');
      td.textContent = cell;
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });

  table.appendChild(tbody);
  return table;
};

export const ApplyStacking = (table) => {
  table.classList.add('stacking');  
};

export const ApplyFlipping = (data, isFlipped) => {
  if (!data || data.length === 0) return null;
  const columns = Object.keys(data[0]);
  const rows = data;

  let flippedRows;
  if (isFlipped) {
    flippedRows = columns.map((col, index) => [col, ...rows.map(row => row[col])]);
  } else {
    flippedRows = rows.map((row) => columns.map((col) => row[col]));
  }
  const table = document.createElement('table');
  table.classList.add('responsive-table');

  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');
  if (isFlipped) {
    flippedRows[0].forEach((header) => {
      const th = document.createElement('th');
      th.textContent = header;
      headerRow.appendChild(th);
    });
  } else {
    columns.forEach((header) => {
      const th = document.createElement('th');
      th.textContent = header;
      headerRow.appendChild(th);
    });
  }
  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement('tbody');
  const rowData = isFlipped ? flippedRows.slice(1) : rows;
  console.log(rowData);
  console.log("Here");
  rowData.forEach((row) => {
    const tr = document.createElement('tr');
    row.forEach((cell) => {
      
      const td = document.createElement('td');
      td.textContent = cell;
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });

  table.appendChild(tbody);
  return table;
};

export const RenderTable = (table) => {
  document.getElementById('table-container').innerHTML = '';
  document.getElementById('table-container').appendChild(table);
};