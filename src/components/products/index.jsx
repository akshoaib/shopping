import { useEffect, useState } from "react";
import PaginatedTable from "../shared-components/table/paginated-table";
import useProduct from "@/hooks/useProduct";
import { useParams } from "react-router-dom";
import CustomImage from "../shared-components/custom-image";
import { FiEdit } from "react-icons/fi";
import EditProductModal from "./edit-product-modal";
import { RiDeleteBinLine } from "react-icons/ri";

import PageLoader from "../shared-components/page-loader";
import { useFormik } from "formik";
import SideDrawer from "../shared-components/SideDrawer";
import FiltersBar from "./filters-bar";
import { Col, Row } from "antd";
import { CiFilter } from "react-icons/ci";

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
  const [showFiltersBar, setShowFiltersBar] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

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

  const {
    values,
    handleChange,
    handleSubmit,
    errors,
    touched,
    handleBlur,
    handleReset,
    resetForm,
  } = useFormik({
    initialValues: {
      name: "",
      quantity: null,
      minPrice: null,
      maxPrice: null,
      rating: null,
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      // setFilterValues(values);
    },
  });

  useEffect(() => {
    fetchSearchData(defaultBody({ ...values }));
  }, [dataState, values]);
  return (
    <>
      <PageLoader loading={loading} />
      <SideDrawer
        open={showFiltersBar}
        onClose={() => setShowFiltersBar(false)}
      >
        <FiltersBar
          values={values}
          handleChange={handleChange}
          handleBlur={handleBlur}
          touched={touched}
        />
      </SideDrawer>

      <EditProductModal
        isModalOpen={isProductModalOpen}
        handleCloseEditProductModal={handleCloseEditProductModal}
        selectedProduct={selectedProduct}
        dataState={dataState}
        setDataState={setDataState}
      />
      <Row>
        {showFilters && (
          <Col span={22} className="d-none d-lg-block">
            <FiltersBar
              values={values}
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched}
            />
          </Col>
        )}
        <Col
          // span={2}
          className="p-2 p-lg-4 d-flex justify-content-end d-block d-lg-none ms-auto"
        >
          <CiFilter
            cursor="pointer"
            size={20}
            onClick={() => setShowFiltersBar(true)}
          />
        </Col>
        <Col
          span={2}
          className="p-2 p-lg-4 d-flex justify-content-end d-none d-lg-block ms-auto"
        >
          <CiFilter
            cursor="pointer"
            size={30}
            onClick={() => setShowFilters(!showFilters)}
          />
        </Col>
      </Row>

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
