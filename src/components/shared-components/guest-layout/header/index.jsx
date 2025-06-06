import { IoCartOutline } from "react-icons/io5";
import styles from "./header.module.css";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "@/config/app-routes";
import { LuLogIn } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { persistor } from "@/store";
import { setLoggedinUser, setToken } from "@/reducers/authSlice";
import { RiLogoutBoxLine } from "react-icons/ri";
import LogoImage from "../../../../assets/logo.png";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.loggedInUser);

  const handleLogout = async () => {
    await persistor.purge();
    dispatch(setLoggedinUser(null));
    dispatch(setToken(null));

    navigate("/");
  };

  return (
    <>
      <div className={styles.productsHeader}>
        <div
          role="button"
          onClick={() => navigate(APP_ROUTES.public.HOME)}
          style={{ display: "flex", alignItems: "center" }}
        >
          <img
            src={LogoImage}
            alt="Logo"
            style={{ height: "40px", width: "120px", objectFit: "cover" }}
          />
        </div>
        <div className="d-flex gap-2">
          {token ? (
            <p className={styles.headerItem}>
              <RiLogoutBoxLine
                role="button"
                size={20}
                color="#ffffff"
                onClick={handleLogout}
              />
            </p>
          ) : (
            <p className={styles.headerItem}>
              <LuLogIn
                role="button"
                size={20}
                color="#ffffff"
                onClick={() => navigate(APP_ROUTES.public.LOGIN)}
              />
            </p>
          )}

          {token && (
            <p
              onClick={() => navigate(APP_ROUTES.public.CART)}
              className={styles.headerItem}
            >
              <IoCartOutline role="button" size={25} color="#ffffff" />
            </p>
          )}
          {token && (
            <p
              onClick={() => navigate(APP_ROUTES.private_customer.USER_ORDERS)}
              className={styles.headerItem}
              role="button"
            >
              Orders
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
