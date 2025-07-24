import { Table } from "antd";
import TableSkeleton from "../skeletons/table-skeleton";

const PaginatedTable = ({
  data,
  columns,
  handlePageChange,
  loading,
  currentPage = 1,
}) => {
  return (
    <>
      {loading ? (
        <TableSkeleton />
      ) : (
        <Table
          dataSource={data?.data}
          columns={columns}
          scroll={{ x: "max-content" }}
          pagination={{
            pageSize: 10,
            current: currentPage,
            total: data?.total,
            onChange: handlePageChange,
          }}
        />
      )}
    </>
  );
};

export default PaginatedTable;
