import { Badge } from "antd";
import CustomButton from "../shared-components/custom-button";

const OrderSummary = ({ cart, handlePlaceOrder }) => {
  return (
    <>
      {cart?.cart && cart?.cart?.length > 0 ? (
        <div className="d-flex flex-column gap-2">
          {cart?.cart?.map((item) => {
            return (
              <div className="d-flex gap-2 border-bottom p-2">
                <div className="w-25">
                  <Badge count={item?.quantity} color="black">
                    <img
                      src={item?.product?.images[0]}
                      height={100}
                      width={100}
                      className="rounded "
                    />
                  </Badge>
                </div>
                <div className="w-75 ps-3 ps-md-0">
                  <p>{item?.product?.name}</p>
                  <p>Price: {item?.product?.price}</p>
                  <p>Quantity: {item?.quantity}</p>
                </div>
              </div>
            );
          })}
          <div className="d-flex justify-content-start gap-5  pt-2">
            <p>Total</p>
            <p>{cart?.total}</p>
          </div>
          <div className="d-flex justify-content-end gap-2  pt-2 ">
            <p>Shipping:</p>
            <p>Free</p>
          </div>
          <div className="d-flex justify-content-end gap-2  pt-2 ">
            <p>Payment:</p>
            <p>COD</p>
          </div>
          <div className="d-flex justify-content-end gap-5  pt-2">
            <CustomButton
              title={"Complete Order"}
              handleClick={handlePlaceOrder}
            />
          </div>
        </div>
      ) : (
        <p>No items in cart</p>
      )}
    </>
  );
};

export default OrderSummary;
