import { APP_ROUTES } from "@/config/app-routes";
import { Footer } from "antd/es/layout/layout";
import { useNavigate } from "react-router-dom";
const CustomFooter = () => {
  const navigate = useNavigate();
  return (
    <Footer
      style={{
        textAlign: "center",
        position: "absolute",
        // minHeight: "60px",
        // top: "100%",
        // bottom: 0,
        // width: "100%",
        // position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        // marginTop: "30px",
      }}
    >
      <div className="d-flex justify-content-center gap-5">
        <div>
          <h5 className="footer-heading">CUSTOMER CARE</h5>
          <ul className="footer-list">
            <li>Home</li>
            <li>Products</li>
            <li>Blogs</li>
          </ul>
        </div>
        <div>
          <h5 className="footer-heading">INFORMATION</h5>
          <ul className="footer-list">
            <li>About us</li>
            <li onClick={() => navigate(APP_ROUTES.public.BLOG)}>New Trends</li>
          </ul>
        </div>
      </div>
      WardrobeWave ©{new Date().getFullYear()}
    </Footer>
  );
};

export default CustomFooter;
