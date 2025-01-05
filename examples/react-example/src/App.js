import React from 'react';
import { Table } from '../src/compiled-files-here/index.esm';
// import '../../../dist/index.css';

function App() {
  const columns = ['Name', 'Age', 'City'];
  const rows = [
    ['Alice', 25, 'New York'],
    ['Bob', 30, 'San Francisco'],
  ];

  return (
    <div>
      <h1>React Example: Responsive Table Library</h1>
      <Table columns={columns} rows={rows} />
    </div>
  );
}

export default App;
