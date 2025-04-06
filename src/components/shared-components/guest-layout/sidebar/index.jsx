import CustomFooter from "../custom-footer";
import styles from "./sidebar.module.css";

const Sidebar = ({ children }) => {
  return (
    <>
      <div className="d-flex">
        <div className={styles.sideBarContainer}>wewe</div>
        <div style={{ width: "80%" }}>
          {children}
          {/* <CustomFooter /> */}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
