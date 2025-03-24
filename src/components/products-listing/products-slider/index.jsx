import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProductSlider = ({ products }) => {
  return (
    <Swiper
      modules={[Pagination, Navigation, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      height={200}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop
      className="rounded-3 shadow-lg"
    >
      {products?.map((product, index) => {
        return (
          <SwiperSlide>
            <img
              src={product.images[0]}
              alt={product.name}
              height={300}
              width={"100%"}
              className="w-100 object-fit-cover rounded-3"
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ProductSlider;
