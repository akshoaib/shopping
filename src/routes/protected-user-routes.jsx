import { APP_ROUTES } from "@/config/app-routes";
import OrderPage from "@/pages/order";
import { Navigate, Route, Routes } from "react-router-dom";
import GuestLayout from "@/components/shared-components/guest-layout";
import CartPage from "@/pages/cart";
import CheckoutPage from "@/pages/checkout";
import HomePage from "@/pages/homepage";
import ProductsListingPage from "@/pages/products-listing";
import BlogPage from "@/pages/blog";
import AboutPage from "@/pages/about";
import UserOrdersPage from "@/pages/user-orders";

const ProtectedUserRoutes = () => {
  const privateRoutes = APP_ROUTES.private_customer;

  return (
    <Routes>
      <Route
        path={privateRoutes.LOGIN}
        element={<Navigate to={privateRoutes.HOME} />}
      />
      <Route
        path={privateRoutes.PRODUCTS_LISTING(":categoryId")}
        element={
          <GuestLayout>
            <ProductsListingPage />
          </GuestLayout>
        }
      />

      <Route
        path={privateRoutes.HOME}
        element={
          <GuestLayout>
            <HomePage />
          </GuestLayout>
        }
      />

      <Route
        path={privateRoutes.BLOG}
        element={
          <GuestLayout>
            <BlogPage />
          </GuestLayout>
        }
      />
      {/* <Route
        path={privateRoutes.PRODUCTS(":categoryId")}
        element={
          <AppLayout>
            <ProductsPage />
          </AppLayout>
        }
      /> */}
      <Route
        path={privateRoutes.ORDERS}
        element={
          <GuestLayout>
            <OrderPage />
          </GuestLayout>
        }
      />
      <Route
        path={privateRoutes.CART}
        element={
          <GuestLayout>
            <CartPage />
          </GuestLayout>
        }
      />
      <Route
        path={privateRoutes.CHECKOUT}
        element={
          <GuestLayout>
            <CheckoutPage />
          </GuestLayout>
        }
      />
      <Route
        path={privateRoutes.ABOUT}
        element={
          <GuestLayout>
            <AboutPage />
          </GuestLayout>
        }
      />
      <Route
        path={privateRoutes.USER_ORDERS}
        element={
          <GuestLayout>
            <UserOrdersPage />
          </GuestLayout>
        }
      />

      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};
export default ProtectedUserRoutes;
