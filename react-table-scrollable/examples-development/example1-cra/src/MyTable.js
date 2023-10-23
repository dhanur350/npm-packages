import ReactTable from "@dhanur350/react-table-scrollable";
import { managementTableHeaders, tableData } from "./data";

function MyTable() {
  return (
    <ReactTable
      isScrollable={true}
      tableHeaders={managementTableHeaders}
      tableData={tableData}
      tableHeight={"20rem"}
    />
  );
}
export default MyTable;
