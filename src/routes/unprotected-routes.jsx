import { Navigate, Route, Routes } from "react-router-dom";
import { APP_ROUTES } from "../config/app-routes";
import SigninPage from "../pages/signin";
import ProductsListingPage from "@/pages/products-listing";
import CartPage from "@/pages/cart";
import GuestLayout from "@/components/shared-components/guest-layout";

const UnProtectedRoutes = () => {
  const publicRoutes = APP_ROUTES.public;

  return (
    <Routes>
      <Route
        path={publicRoutes.HOME}
        element={
          <GuestLayout>
            <ProductsListingPage />
          </GuestLayout>
        }
      />
      <Route path={publicRoutes.LOGIN} element={<SigninPage />} />
      <Route
        path={publicRoutes.CART}
        element={
          <GuestLayout>
            <CartPage />
          </GuestLayout>
        }
      />

      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};
export default UnProtectedRoutes;
