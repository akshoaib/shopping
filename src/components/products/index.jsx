import { useEffect, useState } from "react";
import PaginatedTable from "../shared-components/table/paginated-table";
import useProduct from "@/hooks/useProduct";
import { useParams } from "react-router-dom";
import CustomImage from "../shared-components/custom-image";
import { FiEdit } from "react-icons/fi";
import EditProductModal from "./edit-product-modal";

const Products = () => {
  const { loading, getProductsByCategory } = useProduct();
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
    console.log("hryyy:: ", product);
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
          width="50%"
          height={50}
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
        <FiEdit onClick={() => handleEditProduct(product)} cursor="pointer" />
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
    console.log("xxxxxxxx", body);

    getProductsByCategory(body, (resp) => {
      console.log("oooooooooo ", resp.products);
      setData({
        data: resp.products,
        total: resp.total,
      });
    });
  };
  console.log("hhhhhhh", data);

  useEffect(() => {
    // getProductsByCategory({}, (resp) => {});
    fetchSearchData(defaultBody({}));
  }, [dataState]);
  return (
    <>
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
