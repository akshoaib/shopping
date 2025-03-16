import { Navigate, Route, Routes } from "react-router-dom";
import { APP_ROUTES } from "../config/app-routes";
import SigninPage from "../pages/signin";
import ProductsListingPage from "@/pages/products-listing";

const UnProtectedRoutes = () => {
  const publicRoutes = APP_ROUTES.public;

  return (
    <Routes>
      <Route path={publicRoutes.HOME} element={<ProductsListingPage />} />
      <Route path={publicRoutes.LOGIN} element={<SigninPage />} />

      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};
export default UnProtectedRoutes;
