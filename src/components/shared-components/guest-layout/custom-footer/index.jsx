import { Footer } from "antd/es/layout/layout";
const CustomFooter = () => {
  return (
    <Footer
      style={{
        textAlign: "center",
        top: "100%",
        position: "sticky",
        // top: "100%",
        // bottom: 0,
        // width: "100%",
      }}
    >
      <div className="d-flex justify-content-center gap-5">
        <div>
          <h5 className="fs-4">CUSTOMER CARE</h5>
          <ul className="footer-list">
            <li>Home</li>
            <li>Products</li>
            <li>Blogs</li>
          </ul>
        </div>
        <div>
          <h5 className="fs-4">INFORMATION</h5>
          <ul className="footer-list">
            <li>About us</li>
            <li>New Trends</li>
          </ul>
        </div>
      </div>
      Wardrobe wave ©{new Date().getFullYear()} Created by Ant UED
    </Footer>
  );
};

export default CustomFooter;
