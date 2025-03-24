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
      // height={100}
      // navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      loop
      className="rounded-3 shadow-lg"
    >
      {/* {products?.map((product, index) => {
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
      })} */}
      <SwiperSlide>
        <img
          src="https://www.limelight.pk/cdn/shop/collections/SIGNATURE_EMBROIDERED_UNSTITCHED_8c6aeb77-d798-4df1-a7ed-d3e33152349e.jpg?v=1742377387"
          alt={"banner"}
          height={300}
          width={"100%"}
          className="w-100 object-fit-cover rounded-3"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://www.limelight.pk/cdn/shop/collections/1200x330-sleepware_32140f59-d445-42e5-8f39-74ac64a7a12c.jpg?v=1703148591"
          alt={"banner"}
          height={300}
          width={"100%"}
          className="w-100 object-fit-cover rounded-3"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default ProductSlider;
