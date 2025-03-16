import AppLayout from "@/components/shared-components/AppLayout";
import { APP_ROUTES } from "@/config/app-routes";
import CategoryPage from "@/pages/category";
import OrderPage from "@/pages/order";
import ProductsPage from "@/pages/product";
import { Navigate, Route, Routes } from "react-router-dom";

const ProtectedAdminRoutes = () => {
  const privateRoutes = APP_ROUTES.private_admin;

  return (
    <Routes>
      <Route
        path={privateRoutes.LOGIN}
        element={<Navigate to={privateRoutes.HOME} />}
      />

      <Route
        path={privateRoutes.HOME}
        element={
          <AppLayout>
            <CategoryPage />
          </AppLayout>
        }
      />
      <Route
        path={privateRoutes.PRODUCTS(":categoryId")}
        element={
          <AppLayout>
            <ProductsPage />
          </AppLayout>
        }
      />
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
export default ProtectedAdminRoutes;
