import { BrowserRouter as Router } from "react-router-dom";

import UnprotectedRoutes from "./unprotected-routes";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import ProtectedAdminRoutes from "./protected-admin-routes";
import { roles } from "@/constants";
import ProtectedUserRoutes from "./protected-user-routes";

const AllRoutes = () => {
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.loggedInUser);

  console.log({ user }, token);

  return (
    <Router>
      <ToastContainer />
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
