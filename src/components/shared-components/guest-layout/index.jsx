import CustomFooter from "./custom-footer";
import Header from "./header";

const GuestLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <div style={{ marginBottom: "200px" }} />
      <CustomFooter />
    </>
  );
};

export default GuestLayout;
