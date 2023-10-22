import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactTable from "@dhanur350/react-table-scrollable"
import { managementTableHeaders, tableData } from './data'

const MyTable = () => {
  return <ReactTable
    isScrollable={true}
    tableHeaders={managementTableHeaders}
    tableData={tableData}
    tableHeight={"20rem"}
  />
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyTable />
  </React.StrictMode>
);
