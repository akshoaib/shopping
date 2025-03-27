import CustomFooter from "./custom-footer";
import Header from "./header";
import Sidebar from "./sidebar";

const GuestLayout = ({ children }) => {
  return (
    <>
      <Header />
      {/* {children}
      <div style={{ marginBottom: "200px" }} />
      <CustomFooter /> */}
      <Sidebar children={children} />
    </>
  );
};

export default GuestLayout;
