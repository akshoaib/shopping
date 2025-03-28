import { APP_ROUTES } from "@/config/app-routes";
import OrderPage from "@/pages/order";
import ProductsListingPage from "@/pages/homepage";
import { Navigate, Route, Routes } from "react-router-dom";
import GuestLayout from "@/components/shared-components/guest-layout";
import CartPage from "@/pages/cart";
import CheckoutPage from "@/pages/checkout";

const ProtectedUserRoutes = () => {
  const privateRoutes = APP_ROUTES.private_customer;

  return (
    <Routes>
      <Route
        path={privateRoutes.LOGIN}
        element={<Navigate to={privateRoutes.HOME} />}
      />

      <Route
        path={privateRoutes.HOME}
        element={
          <GuestLayout>
            <ProductsListingPage />
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

      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};
export default ProtectedUserRoutes;
