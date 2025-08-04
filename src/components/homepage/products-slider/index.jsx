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
          src="https://www.limelight.pk/cdn/shop/files/Unstitched-Collection-_1425x445_66a4189e-0a3c-47af-b05a-09b662685999.jpg?v=1753354247&width=1920"
          alt={"banner"}
          height={400}
          width={"100%"}
          className="w-100  rounded-3"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://www.limelight.pk/cdn/shop/files/Web_Signature_Banner_b2301545-b2be-4bab-845e-fb67f208f152.jpg?v=1754310747&width=1920"
          alt={"banner"}
          height={400}
          width={"100%"}
          className="w-100  rounded-3"
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src="https://www.limelight.pk/cdn/shop/files/Main_PC_Banner_New_Size_Iqra_ef5eb63a-e765-4c88-8ba4-2f2ce6ca290f.jpg?v=1754310835&width=1920"
          alt={"banner"}
          height={400}
          width={"100%"}
          className="w-100  rounded-3"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default ProductSlider;
