// eslint-disable-next-line no-unused-vars
import React from 'react'
import ReactTable, { Counter } from "@dhanur350/react-table-scrollable"
import { managementTableHeaders, tableData } from './data'

const MyTable = () => {
	return <div>

		<ReactTable
		isScrollable={true}
		tableHeaders={managementTableHeaders}
		tableData={tableData}
		tableHeight={"20rem"}
	/>

		<Counter />
	</div>
}
export default MyTable