import useCategory from "@/hooks/useCategory";
import { useState, useEffect } from "react";
import CategoryBox from "./CategoryBox";
import { Col, Row } from "antd";
import SideDrawer from "../shared-components/SideDrawer";
import AddCategoryForm from "./AddCategoryForm";
import CustomButton from "../shared-components/custom-button";
import AddProductForm from "./AddProductForm";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "@/config/app-routes";
import PageLoader from "../shared-components/page-loader";

const Category = () => {
  const { loading, getCategories } = useCategory();
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);

  const [openCategoryDrawer, setOpenCategoryDrawer] = useState(false);
  const [openProductDrawer, setOpenProductDrawer] = useState(false);

  const handleGetCategories = () => {
    getCategories((resp) => {
      setCategories(resp);
    });
  };

  const showCategoryDrawer = () => {
    setOpenCategoryDrawer(true);
  };

  const showProductDrawer = () => {
    setOpenProductDrawer(true);
  };

  const onCloseCategoryDrawer = () => {
    setOpenCategoryDrawer(false);
  };

  const onCloseProductDrawer = () => {
    setOpenProductDrawer(false);
  };

  const handleCategoryClick = (_id) => {
    navigate(APP_ROUTES.private_admin.PRODUCTS(_id));
  };
  useEffect(() => {
    handleGetCategories();
  }, []);

  return (
    <>
      <PageLoader loading={loading} />
      <div className="d-flex justify-content-end gap-2">
        <CustomButton
          type="primary"
          title="Add Category"
          handleClick={showCategoryDrawer}
        />

        <CustomButton
          type="primary"
          title="Add Product"
          handleClick={showProductDrawer}
        />
      </div>

      <SideDrawer
        onClose={onCloseCategoryDrawer}
        open={openCategoryDrawer}
        title="Add Category"
      >
        <AddCategoryForm
          handleGetCategories={handleGetCategories}
          onCloseSideDrawer={onCloseCategoryDrawer}
        />
      </SideDrawer>

      <SideDrawer
        onClose={onCloseProductDrawer}
        open={openProductDrawer}
        title="Add Product"
      >
        <AddProductForm
          handleGetCategories={handleGetCategories}
          onCloseSideDrawer={onCloseProductDrawer}
        />
      </SideDrawer>
      <Row className="my-2" gutter={[16, 16]}>
        {categories?.length > 0 &&
          categories?.map((category) => {
            return (
              <Col span={4}>
                <CategoryBox
                  key={category.id}
                  category={category}
                  handleCategoryClick={handleCategoryClick}
                />
              </Col>
            );
          })}
      </Row>
    </>
  );
};

export default Category;
