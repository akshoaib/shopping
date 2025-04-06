import useCategory from "@/hooks/useCategory";
import { useEffect, useState } from "react";

import useProduct from "@/hooks/useProduct";
import { Col, Row } from "antd";
import CustomModal from "@/components/shared-components/custom-modal";
import AddToCart from "../add-to-cart";

const AddToCartModal = ({ product, isModalOpen, handleClose }) => {
  const { getCategoryDropdown } = useCategory();
  const { updateProduct } = useProduct();

  const [categories, setCategories] = useState([]);

  return (
    <>
      <CustomModal
        isModalOpen={isModalOpen}
        handleCloseModal={handleClose}
        // handleSave={handleSubmit}
        width="800px"
      >
        <AddToCart product={product} handleCloseModal={handleClose} />
      </CustomModal>
    </>
  );
};
export default AddToCartModal;
