import React, { useContext, useEffect, useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Countdown from "react-countdown";
//image
import img1 from "../../../public/image/saleimg/small_product-TLP-41583_9a218dec-c009-4dee-bef0-229f3a18c281.webp";
import img2 from "../../../public/image/saleimg/small_product-TLP-10968_9faa3d94-37b7-4442-bd4f-1feff1f63c84.webp";
import img3 from "../../../public/image/saleimg/small_product-TLP-21125_b1b7408e-51e3-4fe6-afca-37f442aae5b0.webp";
import img4 from "../../../public/image/saleimg/small_product-TLP-30701_1e2059a3-9ae7-4751-9705-8b5aed25c547.webp";
import img5 from "../../../public/image/saleimg/small_product-TLP-21704_2af6a8c4-6041-4295-afbd-4504cf76631a.webp";
import img6 from "../../../public/image/saleimg/small_product-TLP-35093_0f6bb1bb-e255-4d4b-bca8-052bc551d4df.webp";
import img7 from "../../../public/image/saleimg/small_product-TLP-36343_f7e2766c-6cf4-485d-ace5-21ff6b9b1e67.webp";
import img8 from "../../../public/image/saleimg/small_product-TLP-34999_5741717a-96b8-4d0b-86e2-01179498cbd7.webp";
import img9 from "../../../public/image/saleimg/small_product-TLP-16355_96122d5e-794b-4498-9e79-65a212d99f1e.webp";
import img10 from "../../../public/image/saleimg/small_product-TLP-21373_1f21e433-f8d5-45cf-aaee-703dad027159.webp";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { Context } from "../../pages/Homepage";
import {digitsEnToFa , addCommas} from 'persian-tools'
function Specialsale() {
  const product = useContext(Context);
  const [boxspecial , setboxspecial] = useState([]);
  useEffect(()=>{
    setboxspecial([...product.products.mobile ,...product.products.laptop ])
  },[])

  return (
    <div className="border h-[500px] w-full  border-[4px]  border-red-500 rounded-[20px] p-5 shadow overflow-hidden">
      <div className="header-sale flex justify-end">
        <button className="me-5 flex gap-1 items-center text-white ">
          <span>نمایش همه</span>
          <FaAngleLeft />
        </button>
      </div>
      <div>
        <Swiper
          navigation={{
            nextEl: ".swiper-button-next-1",
            prevEl: ".swiper-button-prev-1",
          }}
          slidesPerView={4}
          modules={[Navigation]}
          className="mySwiper-sale relative h-[360px]"
          breakpoints={{
            300: {
              slidesPerView: 1,
            },
            400: {
              slidesPerView: 1,
            },
            590: {
              slidesPerView: 2,
            },
            900: {
              slidesPerView: 3,
            },
            1150: {
              slidesPerView: 4,
            },
          }}
        >
          {boxspecial&&  boxspecial.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex flex-col gap-3 justify-center items-center cursor-pointer">
                <div className="time-box h-[20px] flex w-full px-14 justify-between font-ycan ">
                  <div>
                    <p className="text-red-500 font-extrabold">دیری شاپ</p>
                  </div>
                  <div>
                    <Countdown
                      date={Date.now() + 1799900}
                      daysInHours={true}
                      className="text-red-500"
                    ></Countdown>
                  </div>
                </div>
                <div className="img-sale h-[200px] border-t-4 border-red-500">
                  <img src={item.image} className="h-[100%] w-[200px]" />
                </div>
                <div className="info-product h-[50px] px-14 text-color font-ycan text-[13px]">
                  <p>
                   {item.name}
                  </p>
                </div>
                <div className="price-product flex px-14   w-full py-3 items-center justify-between">
                  <div>
                    <span className="bg-red-500 p-1 text-[13px] text-white rounded">
                      {digitsEnToFa(addCommas(item.discount.numberdis))}%
                    </span>
                  </div>
                  <div className="flex flex-col px-4 font-ycan font-medium  text-[13px] ">
                    <span className="text-red-500 font-extrabold">{digitsEnToFa(addCommas(item.price))} تومان</span>
                    <span className="text-color text- line-through">
                      {digitsEnToFa(addCommas(item.discount.price))} <span className="text-[10px]">تومان</span>
                    </span>
                  </div>
                </div>
              </div>
        
            </SwiperSlide>
          ))}

          <div className=" absolute top-[40%] left-0 pe-2 flex w-full justify-between z-20">
            <button className="swiper-button-next-1  bg-gray-200 rounded-full p-2 shadow ">
              <GoArrowRight />
            </button>
            <button className="swiper-button-prev-1  bg-gray-200 rounded-full p-2 shadow">
              <GoArrowLeft />
            </button>
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default Specialsale;
