import './ReactTable.scss';
import { useMemo } from 'react'
import { Loading } from "./src/components";

function ReactTable({
  tableHeight,
  isScrollable,
  tableHeaders,
  tableData,
  isLoading }) {

  const allTablekeys = useMemo(() => {
    return tableData?.reduce((keys, item) => {
      Object.keys(item).forEach((key, index) => {
        if (!keys.includes(key)) {
          keys.push(key);
        }
      })
      return keys;
    }, [])
  }, [tableData])


  const renderTableHeader = ({ headers }, index) => {
    return (
      <div key={`table-header-index-${index}`} className="table-cell">{headers}</div>
    )
  }

  const renderTableBody = (item, rowIndex) => {

    const renderTableBodyCells = (key, colIndex) => {
      return (
        <div key={`table-cell-index${colIndex}`} className='table-cell'>{item[key]}</div>
      )
    }

    return (
      <div key={`table-row-index${rowIndex}`} className='table-row'>
        {allTablekeys.map(renderTableBodyCells)}
      </div>
    )
  }

  return (

    <div className={`table-container ${isScrollable && "table-scroll"}`} style={{ height: tableHeight }}>
      <div className="table-header">{tableHeaders.map(renderTableHeader)}</div>
      {isLoading ?
        <Loading /> :
        <div className="table-body">{tableData.map(renderTableBody)}</div>}
    </div>
  )
}

export default ReactTable;