import { HiOutlineShoppingBag } from "react-icons/hi2";
import styles from "./product-card.module.css";
import AddToCartModal from "../../homepage/add-to-cart-modal";
import { useState } from "react";
const ProductCard = ({ product }) => {
  const [showAddToCartModal, setShowAddToCartModal] = useState(false);

  const handleCloseAddToCartModal = (e) => {
    e?.stopPropagation();
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
            <img
              width={"100%"}
              src={product.images[0]}
              style={{
                objectFit: "cover",
                height: 200,
              }}
              alt={product.name}
              className="rounded"
            />
            <div
              className={styles.cartIcon}
              onClick={(e) => {
                e.stopPropagation();
                setShowAddToCartModal(true);
              }}
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
