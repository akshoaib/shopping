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
              height={300}
              src={product.images[0]}
              alt={product.name}
              className="rounded object-fit-cover object-fit-lg-fill"
              // style={{ aspectRatio: "1/1" }}
              // style={{ objectFit: "cover" }}
            />

            {product?.quantity == 0 && (
              <div className={`rounded ${styles.outOfStock}`}>out of stock</div>
            )}
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
            <p style={{ fontWeight: "500", margin: "0" }}>{product.name}</p>
            <p style={{ margin: "0" }}>Rs. {product.price}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
