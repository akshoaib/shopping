import { IoCartOutline } from "react-icons/io5";
import styles from "./header.module.css";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "@/config/app-routes";
import { LuLogIn } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { persistor } from "@/store";
import { setLoggedinUser, setToken } from "@/reducers/authSlice";
import { RiLogoutBoxLine } from "react-icons/ri";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.loggedInUser);

  console.log("sssfsf", token);

  console.log({ user });

  const handleLogout = async () => {
    await persistor.purge();
    dispatch(setLoggedinUser(null));
    dispatch(setToken(null));

    navigate("/");
  };

  return (
    <>
      <div className={styles.productsHeader}>
        <p role="button" onClick={() => navigate(APP_ROUTES.public.HOME)}>
          WardrobeWave
        </p>
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

          <p
            onClick={() => navigate(APP_ROUTES.public.CART)}
            className={styles.headerItem}
          >
            <IoCartOutline role="button" size={25} color="#ffffff" />
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
