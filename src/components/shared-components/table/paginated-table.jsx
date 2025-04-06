import { Table } from "antd";
import TableSkeleton from "../skeletons/table-skeleton";

const PaginatedTable = ({ data, columns, handlePageChange, loading }) => {
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  return (
    <>
      {loading ? (
        <TableSkeleton />
      ) : (
        <Table
          dataSource={data?.data}
          columns={columns}
          pagination={{
            pageSize: 10,
            total: data?.total,
            onChange: handlePageChange,
          }}
        />
      )}
    </>
  );
};

export default PaginatedTable;
