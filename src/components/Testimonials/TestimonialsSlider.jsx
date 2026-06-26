import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Autoplay, Pagination } from "swiper/modules";

import { testimonialsData } from "../data/testimonialsData";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialsSlider() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      slidesPerView={3}
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        300: {
          slidesPerView: 1,
        },

        768: {
          slidesPerView: 2,
        },

        992: {
          slidesPerView: 3,
        },
      }}
    >
      {testimonialsData.map((item) => (
        <SwiperSlide key={item.id} className="h-auto" >
          <TestimonialCard {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}