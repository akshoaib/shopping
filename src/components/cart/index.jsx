import { useNavigate } from "react-router-dom";
import CustomButton from "../shared-components/custom-button";
import { APP_ROUTES } from "@/config/app-routes";

const Cart = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="my-5">
        <p className="text-center text-uppercase fw-bold fs-3">Shopping Cart</p>
        <p className="text-center text-uppercase fw-bold fs-1 mt-5">
          Your cart is empty
        </p>
        <div className="d-flex justify-content-center my-4">
          <CustomButton
            handleClick={() => navigate(APP_ROUTES.public.CART)}
            title="Continue shopping"
          />
        </div>
      </div>
    </>
  );
};

export default Cart;
