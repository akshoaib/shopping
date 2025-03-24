import ProductCategoriesSkeleton from "./product-categories-skeleton";

const ProductCategories = ({ loading, categories }) => {
  return (
    <>
      {loading ? (
        <ProductCategoriesSkeleton />
      ) : (
        categories?.map((category) => (
          <div key={category.id} className="">
            <div className="p-2 ">
              <img
                src={category.image}
                alt={category.name}
                width={100}
                height={100}
                className="rounded-circle "
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
