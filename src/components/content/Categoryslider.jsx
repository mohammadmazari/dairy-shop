import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from "swiper/modules";
//images
import img1 from "../../../public/image/categoryheader/banner_CircleCategories_1OkxTf_3df5aedb-33ef-4200-a81a-a1444bcedf0e.webp";
import img2 from "../../../public/image/categoryheader/banner_CircleCategories_B574Ao_90b3facc-fc2c-4044-818d-596da0f3df78.webp";
import img3 from "../../../public/image/categoryheader/banner_CircleCategories_bKYtgp_4aff6a4f-2ed8-4153-8368-b73fb6f16906.webp";
import img4 from "../../../public/image/categoryheader/banner_CircleCategories_bvLDVP_a32ff3c7-d94a-43a8-98e5-6c8890d06e50.webp";
import img5 from "../../../public/image/categoryheader/banner_CircleCategories_FgGs07_040c7036-93f8-4a6d-8ff5-dedb88183674.webp";
import img6 from "../../../public/image/categoryheader/banner_CircleCategories_fQ1JW9_41fda70e-7de4-40b9-abb1-cd09f48a21d2.webp";
import img7 from "../../../public/image/categoryheader/banner_CircleCategories_IRf271_a72a1ec9-16db-4c56-8ccd-fbaaa3392903.webp";
import img8 from "../../../public/image/categoryheader/banner_CircleCategories_MIBn1s_75fda196-8a2f-4d07-bc9c-b49c252c9849.webp";
import img9 from "../../../public/image/categoryheader/banner_CircleCategories_OA82Op_8c4dff51-efe4-489a-b7f7-8a25856bb187.webp";
import img10 from "../../../public/image/categoryheader/banner_CircleCategories_oBqfhC_a9f23d81-83c5-4054-9163-083454a073dc.webp";
import img11 from "../../../public/image/categoryheader/banner_CircleCategories_ZF2YTy_bc869e82-f53c-40bb-b05c-65c5139585ee.webp";
import img12 from "../../../public/image/categoryheader/banner_CircleCategories_Y7NJVr_53eb4a9b-166c-4851-95c7-b02ef4a7c7be.webp";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

export default function Categoryslider() {
  return (
    <>
      <Swiper
        slidesPerView={7}
        navigation={{
          nextEl: ".swiper-button-nextx",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Pagination, Navigation , Autoplay]}
        className="mySwiper-sedound h-[160px] md:h-[230px] relative px-5"
        breakpoints={{
          100: {
            slidesPerView: 2,
          },
          400: {
            slidesPerView: 3,
          },
          600: {
            slidesPerView: 4,
          },
          700: {
            slidesPerView: 5,
          },
          900: {
            slidesPerView: 6,
          },
        }}
        spaceBetween={7}
        autoplay={{
            delay:3000
        }}
      >
        <SwiperSlide>
          <div className="w-[140px] h-[150px] md:w-[160px] md:h-[200px]   flex flex-col gap-5">
            <div className="img-header h-4/6 flex justify-center mt-5 ">
              <img
                src={img1}
                className="border border-[2px] border-red-600  rounded-full p-1"
              />
            </div>
            <div className="info font-ycan font-medium text-color text-center">
              <p>اسپیکر</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[140px] h-[150px] md:w-[160px] md:h-[200px]  flex flex-col gap-5">
            <div className="img-header h-4/6 flex justify-center mt-5 ">
              <img
                src={img2}
                className="border border-[2px] border-red-600 rounded-full p-1"
              />
            </div>
            <div className="info font-ycan font-medium text-color text-center">
              <p>لپتاپ</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[140px] h-[150px] md:w-[160px] md:h-[200px]  flex flex-col gap-5">
            <div className="img-header h-4/6 flex justify-center mt-5 ">
              <img
                src={img3}
                className="border border-[2px] border-red-600 rounded-full p-1"
              />
            </div>
            <div className="info font-ycan font-medium text-color text-center">
              <p>لوازم جانبی</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[140px] h-[150px] md:w-[160px] md:h-[200px]  flex flex-col gap-5">
            <div className="img-header h-4/6 flex justify-center mt-5 ">
              <img
                src={img4}
                className="border border-[2px] border-red-600 rounded-full p-1"
              />
            </div>
            <div className="info font-ycan font-medium text-color text-center">
              <p>ساعت هوشمند</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[140px] h-[150px] md:w-[160px] md:h-[200px]  flex flex-col gap-5">
            <div className="img-header h-4/6 flex justify-center mt-5 ">
              <img
                src={img5}
                className="border border-[2px] border-red-600 rounded-full p-1"
              />
            </div>
            <div className="info font-ycan font-medium text-color text-center">
              <p>تلفن همراه</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[140px] h-[150px] md:w-[160px] md:h-[200px]  flex flex-col gap-5">
            <div className="img-header h-4/6 flex justify-center mt-5 ">
              <img
                src={img6}
                className="border border-[2px] border-red-600 rounded-full p-1"
              />
            </div>
            <div className="info font-ycan font-medium text-color text-center">
              <p>گیمینگ</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[140px] h-[150px] md:w-[160px] md:h-[200px]  flex flex-col gap-5">
            <div className="img-header h-4/6 flex justify-center mt-5 ">
              <img
                src={img7}
                className="border border-[2px] border-red-600 rounded-full p-1"
              />
            </div>
            <div className="info font-ycan font-medium text-color text-center">
              <p>لوازم خانگی</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[140px] h-[150px] md:w-[160px] md:h-[200px]  flex flex-col gap-5">
            <div className="img-header h-4/6 flex justify-center mt-5 ">
              <img
                src={img8}
                className="border border-[2px] border-red-600 rounded-full p-1"
              />
            </div>
            <div className="info font-ycan font-medium text-color text-center">
              <p>ماشین های اداری</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[140px] h-[150px] md:w-[160px] md:h-[200px]  flex flex-col gap-5">
            <div className="img-header h-4/6 flex justify-center mt-5 ">
              <img
                src={img9}
                className="border border-[2px] border-red-600 rounded-full p-1"
              />
            </div>
            <div className="info font-ycan font-medium text-color text-center">
              <p>لوازم جانبی موبایل</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[140px] h-[150px] md:w-[160px] md:h-[200px]  flex flex-col gap-5">
            <div className="img-header h-4/6 flex justify-center mt-5 ">
              <img
                src={img10}
                className="border border-[2px] border-red-600 rounded-full p-1"
              />
            </div>
            <div className="info font-ycan font-medium text-color text-center">
              <p>تبلت</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[140px] h-[150px] md:w-[160px] md:h-[200px]  flex flex-col gap-5">
            <div className="img-header h-4/6 flex justify-center mt-5 ">
              <img
                src={img11}
                className="border border-[2px] border-red-600 rounded-full p-1"
              />
            </div>
            <div className="info font-ycan font-medium text-color text-center">
              <p>هدفون</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[140px] h-[150px] md:w-[160px] md:h-[200px]  flex flex-col gap-5">
            <div className="img-header h-4/6 flex justify-center mt-5 ">
              <img
                src={img12}
                className="border border-[2px] border-red-600 rounded-full p-1"
              />
            </div>
            <div className="info font-ycan font-medium text-color text-center">
              <p>پاور بانک</p>
            </div>
          </div>
        </SwiperSlide>

        <div className=" absolute top-[40%] left-0 pe-2 flex w-full justify-between z-20">
          <button className="swiper-button-nextx  bg-gray-200 rounded-full p-2 shadow ">
            <IoIosArrowForward />
          </button>
          <button className="swiper-button-prev  bg-gray-200 rounded-full p-2 shadow">
            <IoIosArrowBack />
          </button>
        </div>
      </Swiper>
    </>
  );
}
