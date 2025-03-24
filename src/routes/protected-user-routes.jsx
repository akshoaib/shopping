import AppLayout from "@/components/shared-components/AppLayout";
import { APP_ROUTES } from "@/config/app-routes";
import CategoryPage from "@/pages/category";
import OrderPage from "@/pages/order";
import ProductsPage from "@/pages/products";
import ProductsListingPage from "@/pages/homepage";
import { Navigate, Route, Routes } from "react-router-dom";

const ProtectedUserRoutes = () => {
  const privateRoutes = APP_ROUTES.private_customer;

  return (
    <Routes>
      <Route
        path={privateRoutes.LOGIN}
        element={<Navigate to={privateRoutes.PRODUCT_LISTING} />}
      />

      <Route
        path={privateRoutes.PRODUCT_LISTING}
        element={
          <AppLayout>
            <ProductsListingPage />
          </AppLayout>
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
          <AppLayout>
            <OrderPage />
          </AppLayout>
        }
      />

      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};
export default ProtectedUserRoutes;
