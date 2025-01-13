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
  console.log("Added Stacking");
  
};

export const RenderTable = (table) => {
  document.getElementById('table-container').innerHTML = '';
  document.getElementById('table-container').appendChild(table);
};