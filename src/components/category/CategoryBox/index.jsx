import styles from "./category-box.module.css";
import categoryImage from "../../../assets/category.jpg";
const CategoryBox = ({ category, handleCategoryClick }) => {
  console.log("dfdfdf: ", category);

  return (
    <>
      <div
        className={`${styles.categoryBox}`}
        onClick={() => handleCategoryClick(category._id)}
      >
        <img width={"100%"} src={categoryImage} alt={category?.name} />
        <div className={styles.categoryBoxContent}>
          <p>{category?.name}</p>
        </div>
      </div>
    </>
  );
};

export default CategoryBox;
