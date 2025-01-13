import '../styles/table.css';
import '../styles/stacking.css';
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
  RenderTable(table);
};

const getLastRenderedTable = () => {
  return document.querySelector('#table-container table');
};

export const ApplyStacking = () => {
  const table = getLastRenderedTable();
  table.classList.add('stacking');
  RenderTable(table);
};

export const ApplyFlipping = (data, isFlipped) => {
  if (!data || data.length === 0) return null;
  const columns = Object.keys(data[0]);

  let flippedData;
  if (isFlipped) {
    flippedData = columns.map((col) => [col, ...data.map((row) => row[col])]);
  } else {
    flippedData = data.map((row) => columns.map((col) => row[col]));
  }

  const table = document.createElement('table');
  table.classList.add('responsive-table');

  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');

  if (isFlipped) {
    flippedData[0].forEach((header) => {
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
  const rowData = isFlipped
    ? flippedData.slice(1)
    : data.map((row) => columns.map((col) => row[col]));

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
  RenderTable(table);
};

export const RenderTable = (table) => {
  document.getElementById('table-container').innerHTML = '';
  document.getElementById('table-container').appendChild(table);
};
