// eslint-disable-next-line no-unused-vars
import React from 'react'
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
export default MyTable