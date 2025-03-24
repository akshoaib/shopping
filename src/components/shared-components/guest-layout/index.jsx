import CustomFooter from "./custom-footer";
import Header from "./header";

const GuestLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <CustomFooter />
    </>
  );
};

export default GuestLayout;
