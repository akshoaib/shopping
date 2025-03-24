import { IoCartOutline } from "react-icons/io5";
import styles from "./products-header.module.css";
import { Row, Col } from "antd";

const ProductsHeader = () => {
  return (
    <div className={styles.productsHeader}>
      <p>Shiza Pizza</p>
      <p>
        <IoCartOutline size={30} color="#ffffff" />
      </p>
    </div>
  );
};

export default ProductsHeader;
