import { Footer } from "antd/es/layout/layout";
const CustomFooter = () => {
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
            <li>New Trends</li>
          </ul>
        </div>
      </div>
      WardrobeWave ©{new Date().getFullYear()}
    </Footer>
  );
};

export default CustomFooter;
