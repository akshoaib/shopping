import { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";
import RatingForm from "./rating-form";
import useProduct from "@/hooks/useProduct";

const Rating = ({ rating, productId }) => {
  const { rateProduct } = useProduct();

  const [rate, setRate] = useState(rating);
  const [showRatingForm, setShowRatingForm] = useState(false);

  const handleRateProduct = (rating) => {
    rateProduct(rating, productId, (resp) => {
      setShowRatingForm(false);
    });
  };

  useEffect(() => {
    setRate(rating);
  }, [rating]);
  return (
    <>
      <div className="d-flex flex-column gap-1 my-2 ">
        <div className="mx-auto">
          {Array.from({ length: 5 }).map((_, index) => (
            <CiStar
              key={index}
              color={index < rate ? "orange" : "gray"}
              size={20}
              onClick={() => {
                setRate(index + 1);
                setShowRatingForm(true);
              }}
            />
          ))}
        </div>

        {showRatingForm && (
          <RatingForm
            rating={rate}
            handleRateProduct={handleRateProduct}
            setShowRatingForm={setShowRatingForm}
            savedRating={rating}
            setRate={setRate}
          />
        )}
      </div>
    </>
  );
};
export default Rating;
