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
import { VscClearAll } from "react-icons/vsc";

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
      ...dataState,
      ...values,
      categories: [categoryId],
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
      availability: [],
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
  }, [dataState]);

  useEffect(() => {
    const handler = setTimeout(() => {
      fetchSearchData(defaultBody({ ...values, page: 1 }));
    }, 400);

    return () => clearTimeout(handler);
  }, [values]);

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
          handleReset={handleReset}
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
              handleReset={handleReset}
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
          span={1}
          className="p-2 p-lg-4 d-flex justify-content-end d-none d-lg-block ms-auto"
        >
          <CiFilter
            cursor="pointer"
            size={30}
            onClick={() => setShowFilters(!showFilters)}
          />
        </Col>
        <Col
          span={1}
          className=" d-flex justify-content-center align-items-center"
        >
          <VscClearAll cursor="pointer" size={20} onClick={handleReset} />
        </Col>
      </Row>

      <PaginatedTable
        data={data}
        columns={columns}
        handlePageChange={handlePageChange}
        loading={loading}
        currentPage={dataState.page}
      />
    </>
  );
};

export default Products;
