import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../../styles/slidermenu.css";
import { EffectCreative } from "swiper/modules";
import { CiSquareChevLeft } from "react-icons/ci";
import { CiSquareChevRight } from "react-icons/ci";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import img1 from "../../../public/image/banner_SlideBanner_SCy2e5_b350727e-8bf1-4051-9c98-0cd2d57a8647.webp";
import img2 from "../../../public/image/banner_SlideBanner_FrIE5b_2c3dc25e-ad83-4a47-a062-65317ba14f16.webp";
import img3 from "../../../public/image/banner_SlideBanner_h4o6Ia_a45595ae-72bb-4b6d-a997-26f1d887a2f3.webp";
import img4 from "../../../public/image/banner_SlideBanner_J3UIKO_40f844ff-502a-4342-b648-c9122016ba17.webp";
import img5 from "../../../public/image/banner_SlideBanner_Fk0ObC_0de31bb9-cfc8-4b9e-87e1-d1b005636ad3.webp";
import img6 from "../../../public/image/banner_SlideBanner_FrIE5b_2c3dc25e-ad83-4a47-a062-65317ba14f16.webp";

export default function Slider() {
  return (
    <>
      <Swiper
        modules={[EffectCreative, Autoplay, Pagination, Navigation]}
        pagination={{
          clickable: true,
          type: "bullets",
          el: ".swiper-pagination",
        }}
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
        className="mySwiper relative"
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        loop={true}
        height={2000}
      >
        <SwiperSlide>
          <img src={img1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img src={img6} />
        </SwiperSlide>
        <div className="btn-argoman absolute bottom-10 right-10 z-20   h-[30%] ">
          <button className="swiper-button-prev ">
            <CiSquareChevRight className="text-[50px] text-white " />
          </button>
          <button className="swiper-button-next mx-3">
            <CiSquareChevLeft className="text-[50px] text-white" />
          </button>

          <div className="swiper-pagination  mt-4 absolute top-[50px] "></div>
        </div>
      </Swiper>
    </>
  );
}
