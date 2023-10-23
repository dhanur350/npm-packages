import React from 'react'
import ReactTable, { Counter } from "@dhanur350/react-table-scrollable"
import { managementTableHeaders, tableData } from './data'

const MyTable = () => {
	return <>

		<ReactTable
			isScrollable={true}
			tableHeaders={managementTableHeaders}
			tableData={tableData}
			tableHeight={"20rem"}
		/>

		<Counter />
	</>
}
export default MyTable