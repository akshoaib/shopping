import { useNavigate } from "react-router-dom";
import ProductCategoriesSkeleton from "./product-categories-skeleton";
import { APP_ROUTES } from "@/config/app-routes";

const ProductCategories = ({ loading, categories }) => {
  const navigate = useNavigate();
  return (
    <>
      {loading ? (
        <ProductCategoriesSkeleton />
      ) : (
        categories?.map((category) => (
          <div key={category.id} className="">
            {console.log("category", category)}
            <div
              onClick={() =>
                navigate(APP_ROUTES.public.PRODUCTS_LISTING(category._id))
              }
              className="p-2 "
            >
              <img
                src={category.image}
                alt={category.name}
                width={100}
                height={100}
                className="rounded-circle"
              />
              <p className="text-center">{category.name}</p>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default ProductCategories;
