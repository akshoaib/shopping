import { IoCartOutline } from "react-icons/io5";
import styles from "./header.module.css";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "@/config/app-routes";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.productsHeader}>
      <p>Wardrobe wave</p>
      <p onClick={() => navigate(APP_ROUTES.public.CART)}>
        <IoCartOutline role="button" size={30} color="#ffffff" />
      </p>
    </div>
  );
};

export default Header;
