import { HiOutlineShoppingBag } from "react-icons/hi2";
import styles from "./product-card.module.css";
import AddToCartModal from "../../homepage/add-to-cart-modal";
import { useState } from "react";
import { useSelector } from "react-redux";
const ProductCard = ({ product }) => {
  const [showAddToCartModal, setShowAddToCartModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.loggedInUser);

  console.log({ token }, { user });

  const handleCloseAddToCartModal = () => {
    setShowAddToCartModal(false);
  };
  return (
    <>
      <AddToCartModal
        handleClose={handleCloseAddToCartModal}
        isModalOpen={showAddToCartModal}
        product={product}
      />
      <div className="rouned-5">
        <div className="d-flex flex-column justify-content-between">
          <div className={styles.imageContainer}>
            {/* <img
              width={"100%"}
              src={product.images[0]}
              alt={product.name}
              className="rounded"
            /> */}
            <div
              className={styles.cartIcon}
              onClick={() => setShowAddToCartModal(true)}
            >
              <HiOutlineShoppingBag size={25} color="#000000" />
            </div>
          </div>
          <div>
            <p>{product.name}</p>
            <h6>Rs. {product.price}</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
