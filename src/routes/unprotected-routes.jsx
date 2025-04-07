import { Navigate, Route, Routes } from "react-router-dom";
import { APP_ROUTES } from "../config/app-routes";
import SigninPage from "../pages/signin";
import CartPage from "@/pages/cart";
import GuestLayout from "@/components/shared-components/guest-layout";
import HomePage from "@/pages/homepage";
import ProductsListingPage from "@/pages/products-listing";
import BlogPage from "@/pages/blog";
import SignupPage from "@/pages/signup";

const UnProtectedRoutes = () => {
  const publicRoutes = APP_ROUTES.public;

  return (
    <Routes>
      <Route
        path={publicRoutes.PRODUCTS_LISTING(":categoryId")}
        element={
          <GuestLayout>
            <ProductsListingPage />
          </GuestLayout>
        }
      />
      <Route
        path={publicRoutes.HOME}
        element={
          <GuestLayout>
            <HomePage />
          </GuestLayout>
        }
      />
      <Route
        path={publicRoutes.BLOG}
        element={
          <GuestLayout>
            <BlogPage />
          </GuestLayout>
        }
      />
      <Route path={publicRoutes.LOGIN} element={<SigninPage />} />
      <Route path={publicRoutes.REGISTER} element={<SignupPage />} />
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
