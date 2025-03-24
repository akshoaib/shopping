import { IoCartOutline } from "react-icons/io5";
import styles from "./header.module.css";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "@/config/app-routes";
import { LuLogIn } from "react-icons/lu";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.productsHeader}>
      <p>WardrobeWave</p>
      <div className="d-flex gap-2">
        <p>
          <LuLogIn
            role="button"
            size={25}
            color="#ffffff"
            onClick={() => navigate(APP_ROUTES.public.LOGIN)}
          />
        </p>
        <p onClick={() => navigate(APP_ROUTES.public.CART)}>
          <IoCartOutline role="button" size={30} color="#ffffff" />
        </p>
      </div>
    </div>
  );
};

export default Header;
