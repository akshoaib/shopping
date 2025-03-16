import { Skeleton } from "antd";
import styles from "./table-skeleton.module.css";

const TableSkeleton = () => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>
              <Skeleton />
            </th>
            <th>
              <Skeleton />
            </th>
            <th>
              <Skeleton />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Skeleton />
            </td>
            <td>
              <Skeleton />
            </td>
            <td>
              <Skeleton />
            </td>
          </tr>
          <tr>
            <td>
              <Skeleton />
            </td>
            <td>
              <Skeleton />
            </td>
            <td>
              <Skeleton />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default TableSkeleton;
