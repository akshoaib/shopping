import { IoCartOutline } from "react-icons/io5";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.productsHeader}>
      <p>Shiza Pizza</p>
      <p>
        <IoCartOutline role="button" size={30} color="#ffffff" />
      </p>
    </div>
  );
};

export default Header;
