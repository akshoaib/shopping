import { BrowserRouter as Router } from "react-router-dom";

import UnprotectedRoutes from "./unprotected-routes";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import ProtectedAdminRoutes from "./protected-admin-routes";
import { roles } from "@/constants";
import ProtectedUserRoutes from "./protected-user-routes";
import { useEffect, useState } from "react";
import NewProductAlert from "@/components/new-product-alert";
import { socket } from "@/services/socket";
import Chatbot from "@/components/chatbot";

const AllRoutes = () => {
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.loggedInUser);
  const [newProduct, setNewProduct] = useState(null);

  useEffect(() => {
    socket.on("new-product", (product) => {
      setNewProduct(product);
    });

    return () => {
      socket.off("new-product");
    };
  }, []);

  useEffect(() => {
    let timer;
    if (newProduct) {
      timer = setTimeout(() => {
        setNewProduct(null);
      }, 6000);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [newProduct]);

  return (
    <Router>
      <ToastContainer />
      {user?.role !== "admin" && <Chatbot />}
      {newProduct && user?.role !== "admin" && (
        <NewProductAlert
          title={newProduct.name}
          description={newProduct.description}
          image={newProduct.images[0]}
          price={newProduct.price}
          productId={newProduct._id}
          handleCloseAlert={() => setNewProduct(null)}
        />
      )}
      {token ? (
        user.role === roles.ADMIN ? (
          <ProtectedAdminRoutes />
        ) : (
          <ProtectedUserRoutes />
        )
      ) : (
        <UnprotectedRoutes />
      )}
    </Router>
  );
};

export default AllRoutes;
