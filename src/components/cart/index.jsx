import CustomButton from "../shared-components/custom-button";

const Cart = () => {
  return (
    <>
      <p className="text-center text-uppercase fw-bold fs-3">Shopping Cart</p>
      <p className="text-center text-uppercase fw-bold fs-1 mt-5">
        Your cart is empty
      </p>
      <div className="d-flex justify-content-center my-4">
        <CustomButton title="Continue shopping" />
      </div>
    </>
  );
};

export default Cart;
