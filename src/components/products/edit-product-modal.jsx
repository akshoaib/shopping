import { useFormik } from "formik";
import CustomModal from "../shared-components/custom-modal";
import CustomSelect from "../shared-components/custom-select";
import useCategory from "@/hooks/useCategory";
import { useEffect, useState } from "react";
import CustomInput from "../shared-components/custom-input";
import CustomUpload from "../shared-components/custom-upload";
import CustomButton from "../shared-components/custom-button";
import CustomImage from "../shared-components/custom-image";
import { isValidUrl } from "@/utils";
import { editProductSchema } from "@/utils/validationSchemas/product";
import useProduct from "@/hooks/useProduct";
import { Col, Row } from "antd";
import FooterButtons from "../shared-components/footer-btns";
import LoaderButton from "../shared-components/loader-button";

const EditProductModal = ({
  isModalOpen,
  handleCloseEditProductModal,
  selectedProduct,
  dataState,
  setDataState,
}) => {
  const { getCategoryDropdown } = useCategory();
  const { loading, updateProduct } = useProduct();

  const [categories, setCategories] = useState([]);

  const handleGetCategoryDropdown = () => {
    getCategoryDropdown((resp) => {
      setCategories(resp);
    });
  };

  const {
    values,
    handleChange,
    handleSubmit,
    handleReset,
    errors,
    touched,
    handleBlur,
  } = useFormik({
    initialValues: {
      name: selectedProduct?.name || "",
      description: selectedProduct?.description || "",
      price: selectedProduct?.price || "",
      quantity: selectedProduct?.quantity || "",
      category: selectedProduct?.category || "",
      images: [],
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      const formData = new FormData();

      for (const key in values) {
        if (key === "images" && values.images?.length > 0) {
          for (let file = 0; file < values.images.length; file++) {
            formData.append("images", values.images[file]);
          }
        } else if (key !== "category" && key !== "images") {
          formData.append(key, values[key]);
        }
      }

      updateProduct(selectedProduct?._id, formData, (resp) => {
        setDataState({ ...dataState });
        handleCloseEditProductModal();
      });
    },
    validationSchema: editProductSchema,
  });

  useEffect(() => {
    handleGetCategoryDropdown();
  }, []);
  return (
    <>
      <CustomModal
        title="Edit Product"
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseEditProductModal}
        handleSave={handleSubmit}
        width="800px"
      >
        <Row>
          <Col span={12} className="px-1">
            {selectedProduct?.images && selectedProduct?.images?.length > 0 && (
              <>
                <div>
                  <CustomImage
                    className="rounded"
                    src={selectedProduct?.images[0]}
                    width="100%"
                    height={200}
                  />
                </div>
                <div className="d-flex gap-2 flex-wrap">
                  {selectedProduct?.images
                    ?.slice(1, selectedProduct?.images.length)
                    .map((img) => {
                      return (
                        <div>
                          <CustomImage
                            width={100}
                            height={100}
                            className="rounded"
                            src={img}
                          />
                        </div>
                      );
                    })}
                </div>
              </>
            )}
          </Col>
          <Col span={12}>
            <form>
              <CustomInput
                name="category"
                type="text"
                handleChange={handleChange}
                value={values.category.name}
                onBlur={handleBlur}
                touched={touched.category}
                label="Category"
                placeholder="Enter Category name"
                error={errors.category}
                disabled
              />
              <CustomInput
                name="name"
                type="text"
                handleChange={handleChange}
                value={values.name}
                onBlur={handleBlur}
                touched={touched.name}
                label="Product Name"
                placeholder="Enter product name"
                error={errors.name}
              />

              <CustomInput
                name="description"
                type="text"
                handleChange={handleChange}
                value={values.description}
                onBlur={handleBlur}
                touched={touched.description}
                label="Description"
                placeholder="Enter product description"
                error={errors.description}
              />
              <CustomInput
                name="price"
                type="text"
                handleChange={handleChange}
                value={values.price}
                onBlur={handleBlur}
                touched={touched.price}
                label="Price"
                placeholder="Enter Price"
                error={errors.price}
              />
              <CustomInput
                name="quantity"
                type="text"
                handleChange={handleChange}
                value={values.quantity}
                onBlur={handleBlur}
                touched={touched.quantity}
                label="Quantity"
                placeholder="Enter quantity"
                error={errors.quantity}
              />
              <div className="my-2"></div>
              <CustomUpload
                name="images"
                handleChange={handleChange}
                value={values.images}
                onBlur={handleBlur}
                touched={touched.images}
                label="Product Image"
                error={errors.images}
                data={categories}
              />
              <div className="my-2"></div>
              {isValidUrl(values.images) && (
                <CustomImage width="50%" height={50} src={values.images} />
              )}
              <FooterButtons
                title={loading ? <LoaderButton /> : "Save"}
                handleSubmit={handleSubmit}
                handleReset={handleReset}
                disabled={loading}
              />
            </form>
          </Col>
        </Row>
      </CustomModal>
    </>
  );
};
export default EditProductModal;
