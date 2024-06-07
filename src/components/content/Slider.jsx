import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../../styles/slidermenu.css";
import { EffectCreative } from "swiper/modules";
import { CiSquareChevLeft } from "react-icons/ci";
import { CiSquareChevRight } from "react-icons/ci";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Slider() {
  return (
    <>
      <Swiper
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative, Autoplay, Pagination, Navigation]}
        className="mySwiper relative"
        autoplay={{
          delay: 10000,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        loop={true}
      >
        <SwiperSlide>
            <img src="../../image/banner_SlideBanner_3mhSBt_afc66f92-74b5-4aae-8791-7bc984feaa26.webp" />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
        <div className=" absolute bottom-10 right-10 z-20 ">
          <button className="swiper-button-prev ">
            <CiSquareChevRight className="text-[50px] text-white " />
          </button>

          <button className="swiper-button-next mx-3">
            <CiSquareChevLeft className="text-[50px] text-white" />
          </button>
        </div>
      </Swiper>
    </>
  );
}
