import '../styles/table.css';
import '../styles/stacking.css';
import { csvParse } from 'd3-dsv';

let sortConfig = { key: null, direction: 'ascending' };

let stacking = false;
let flipping = false;
let data_ = 0;

export const LoadCSV = async (csvFilePath) => {
  const response = await fetch(csvFilePath);
  const csvText = await response.text();
  const parsedData = csvParse(csvText);
  parsedData.forEach((row) => {
    Object.keys(row).forEach((key) => {
      if (row[key] === '') {
        row[key] = '/';
      }
    });
  });
  return parsedData;
};

const initializeTable = (data) => {
  const table = document.createElement('table');
  table.classList.add('responsive-table');

  const headers = Object.keys(data[0]);
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
      td.classList.add(isNaN(cell) && cell !== '/' ? 'text' : 'numeric');
      tr.appendChild(td);
    });

    tbody.appendChild(tr);
  });

  table.appendChild(tbody);

  return table;
};

export const CreateTable = (
  data,
  isSearchable = true,
  applyStacking = true,
  applyFlipping = false
) => {

  if(applyStacking) stacking = true;
  else stacking = false;
  if(applyFlipping) flipping = true;
  else flipping = false;
  data_ = data;

  const container = document.getElementById('table-container');
  container.innerHTML = '';

  const searchInput = document.createElement('input');
  if (isSearchable) {
    searchInput.type = 'text';
    searchInput.placeholder = 'Search...';
    searchInput.classList.add('table-search');
    container.appendChild(searchInput);
  }

  const tablePlaceholder = document.createElement('div');
  tablePlaceholder.id = 'table-content';
  container.appendChild(tablePlaceholder);

  const fullTable = initializeTable(data);
  tablePlaceholder.appendChild(fullTable);

  if (applyStacking) {
    ApplyStacking();
  }

  if (isSearchable) {
    searchInput.addEventListener('input', (event) => {
      const searchTerm = event.target.value.toLowerCase();
      const filteredData = data.filter((row) =>
        Object.values(row).some((value) =>
          value.toString().toLowerCase().includes(searchTerm)
        )
      );

      tablePlaceholder.innerHTML = '';

      if (filteredData.length === 0) {
        const noResultsMessage = document.createElement('div');
        noResultsMessage.classList.add('no-results');
        noResultsMessage.textContent = 'No results found.';
        tablePlaceholder.appendChild(noResultsMessage);
      } else {
        const filteredTable = initializeTable(filteredData);
        tablePlaceholder.appendChild(filteredTable);
        if (applyStacking) {
          ApplyStacking();
        } else if (a) {
          ApplyFlipping(filteredData, applyFlipping);
        }
      }
    });
  }
};

const handleSort = (column, data, table) => {
  const headers = table.querySelectorAll('th');

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
      return sortConfig.direction === 'ascending'
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }
  });

  const tableBody = table.querySelector('tbody');
  tableBody.innerHTML = '';
  sortedData.forEach((row) => {
    const tr = document.createElement('tr');
    Object.values(row).forEach((cell) => {
      const td = document.createElement('td');
      td.textContent = cell;
      td.classList.add(isNaN(cell) && cell !== '/' ? 'text' : 'numeric');
      tr.appendChild(td);
    });

    tableBody.appendChild(tr);
  });

  headers.forEach((header) => {
    if (header.textContent.trim() === column) {
      header.classList.add(
        sortConfig.direction === 'ascending' ? 'sorted-ascending' : 'sorted-descending'
      );
    }
  });

  
};
const getLastRenderedTable = () => {
  return document.querySelector('#table-container table');
};

export const ApplyStacking = () => {
  const table = getLastRenderedTable();
  const headers = table.querySelectorAll('th');
  const rows = table.querySelectorAll('tbody tr');
  table.classList.add('stacking');

  rows.forEach((row) => {
    const cells = row.querySelectorAll('td');

    cells.forEach((cell, index) => {
      const headerText =
      headers.length > index ? headers[index].textContent.trim() : 'Unknown';
    cell.setAttribute('data-label', headerText);
    });
  });
  RenderTable(table);
};

export const ApplyFlipping = (data, isFlipped) => {
  if (!data || data.length === 0) return null;
  const isStacking = window.innerWidth <= 600;
  const tableContainer = document.getElementById('table-content');
  const columns = Object.keys(data[0]);

  let flippedData;

  if (isStacking) {
    flippedData = data;
    isFlipped = false;
  } else   if (isFlipped) {
    flippedData = columns.map((col) => [col, ...data.map((row) => row[col])]);
  } else {
    flippedData = data.map((row) => columns.map((col) => row[col]));
  }

  tableContainer.innerHTML = '';

  const table = document.createElement('table');
  table.classList.add('responsive-table');
  if (isStacking) table.classList.add('stacking');

  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');

  if (isFlipped && !isStacking) {
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

  if (isFlipped && !isStacking) {
    flippedData.slice(1).forEach((columnRow) => {
      const tr = document.createElement('tr');

      columnRow.forEach((cell) => {
        const td = document.createElement('td');
        td.textContent = cell;
        td.classList.add(isNaN(cell) && cell !== '/' ? 'text' : 'numeric');
        tr.appendChild(td);
      });

      tbody.appendChild(tr);
    });
  } else {
    data.forEach((row) => {
      const tr = document.createElement('tr');

      columns.forEach((col) => {
        const td = document.createElement('td');
        td.textContent = row[col];
        td.classList.add(isNaN(row[col]) && row[col] !== '/' ? 'text' : 'numeric');
        td.setAttribute('data-label', col);
        tr.appendChild(td);
      });

      tbody.appendChild(tr);
    });
  }

  table.appendChild(tbody);
  tableContainer.appendChild(table);
};

window.addEventListener('resize', () => {
  // Check if stacking or flipping needs to be reapplied
  const isStacking = window.innerWidth <= 600;
  ApplyFlipping(data_, flipping); // Use the current flipping state
});


export const RenderTable = (table) => {
  const containers = Array.from(
    document.getElementById('table-content').getElementsByClassName('responsive-table')
  );

  console.log(containers);

  // containers.forEach((tempTable) => {
  //   tempTable.innerHTML = '';
  //   tempTable.appendChild(table);
  // });
};
