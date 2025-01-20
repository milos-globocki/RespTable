import '../styles/table.css';
import '../styles/stacking.css';
import { csvParse } from 'd3-dsv';

let sortConfig = { key: null, direction: 'ascending' };

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
    th.addEventListener('click', () => handleSort(header, data, table));
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
      if (!isNaN(cell) && cell.trim() !== '') 
      {
        td.classList.add('numeric');
      }
      else
      {
        td.classList.add('text');
      }
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
  RenderTable(table);
};

const handleSort = (column, data, table) => {
  const thead = table.querySelector('thead');
  const headers = thead.querySelectorAll('th');

  headers.forEach((header) => {
    header.classList.remove('sorted-ascending', 'sorted-descending');
  });

  if (sortConfig.key === column) {
    sortConfig.direction =
      sortConfig.direction === 'ascending' ? 'descending' : 'ascending';
  } else {
    sortConfig.key = column;
    sortConfig.direction = 'ascending';
  }

  const sortedData = [...data].sort((a, b) => {
    const aValue = a[column];
    const bValue = b[column];

    const aNum = parseFloat(aValue);
    const bNum = parseFloat(bValue);

    if (!isNaN(aNum) && !isNaN(bNum)) {
      return sortConfig.direction === 'ascending' ? aNum - bNum : bNum - aNum;
    } else {
      if (aValue < bValue) return sortConfig.direction === 'ascending' ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === 'ascending' ? 1 : -1;
      return 0;
    }
  });

  headers.forEach((header) => {
    if (header.textContent.trim() === column) {
      if (sortConfig.direction === 'ascending') {
        header.classList.add('sorted-ascending');
      } else {
        header.classList.add('sorted-descending');
      }
    }
  });

  CreateTable(sortedData);
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
