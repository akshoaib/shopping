import { useEffect, useState } from "react";
import PaginatedTable from "../shared-components/table/paginated-table";
import useProduct from "@/hooks/useProduct";
import { useParams } from "react-router-dom";
import CustomImage from "../shared-components/custom-image";
import { FiEdit } from "react-icons/fi";
import EditProductModal from "./edit-product-modal";
import { RiDeleteBinLine } from "react-icons/ri";

import PageLoader from "../shared-components/page-loader";

const Products = () => {
  const { loading, getProductsByCategory, deleteProduct } = useProduct();
  const { categoryId } = useParams();

  const [dataState, setDataState] = useState({
    page: 1,
  });
  const [data, setData] = useState({
    data: [],
    total: 0,
  });

  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handlePageChange = (page) => {
    setDataState({ ...dataState, page });
  };

  const handleEditProduct = (product) => {
    setIsProductModalOpen(true);
    setSelectedProduct(product);
  };
  const handleDeleteProduct = (productId) => {
    deleteProduct(productId, (resp) => {
      setDataState({ ...dataState });
    });
  };

  const handleCloseEditProductModal = () => {
    setDataState({ ...dataState });

    setIsProductModalOpen(false);
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Image",
      dataIndex: "images",
      key: "images",
      render: (images) => (
        <CustomImage
          className="rounded"
          width={100}
          height={100}
          src={images[0]}
        />
      ),
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
    },
    {
      title: "Action",
      key: "operation",
      fixed: "right",
      width: 100,
      render: (product) => (
        <span className="d-flex gap-2">
          <FiEdit
            onClick={() => handleEditProduct(product)}
            cursor="pointer"
            size={18}
          />
          <RiDeleteBinLine
            onClick={() => handleDeleteProduct(product?._id)}
            cursor="pointer"
            size={19}
          />
        </span>
      ),
    },
  ];
  const body = {
    category: categoryId,
  };

  const defaultBody = (values) => {
    return {
      ...body,
      ...values,
      ...dataState,
      limit: 10,
    };
  };

  const fetchSearchData = (body) => {
    getProductsByCategory(body, (resp) => {
      setData({
        data: resp.products,
        total: resp.total,
      });
    });
  };

  useEffect(() => {
    // getProductsByCategory({}, (resp) => {});
    fetchSearchData(defaultBody({}));
  }, [dataState]);
  return (
    <>
      <PageLoader loading={loading} />

      <EditProductModal
        isModalOpen={isProductModalOpen}
        handleCloseEditProductModal={handleCloseEditProductModal}
        selectedProduct={selectedProduct}
        dataState={dataState}
        setDataState={setDataState}
      />
      <PaginatedTable
        data={data}
        columns={columns}
        handlePageChange={handlePageChange}
        loading={loading}
      />
    </>
  );
};

export default Products;
