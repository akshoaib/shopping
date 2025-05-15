import styles from "./category-box.module.css";
const CategoryBox = ({ category, handleCategoryClick }) => {
  return (
    <>
      <div
        className={`${styles.categoryBox}`}
        onClick={() => handleCategoryClick(category._id)}
      >
        <img
          width={"100%"}
          style={{
            aspectRatio: "1/1",
          }}
          src={category?.image}
          alt={category?.name}
        />
        <div className={styles.categoryBoxContent}>
          <p>{category?.name}</p>
        </div>
      </div>
    </>
  );
};

export default CategoryBox;
