import React, { useContext, useEffect, useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Countdown from "react-countdown";
import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { Context } from "../../pages/Homepage";

import { digitsEnToFa, addCommas } from "persian-tools";
function Specialsale() {
  const product = useContext(Context);
  const [boxspecial, setboxspecial] = useState([]);
  useEffect(() => {
    setboxspecial([
      ...product.products.موبایل,
      ...product.products.لپتاپ,
      ...product.products.ساعت,
      ...product.products.هدفون,
    ]);
  }, []);

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
          {boxspecial &&
            boxspecial.map((item) => (
              <SwiperSlide key={item.id}>
                <Link to={`product/${item.id}`}>
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
                      <p>{item.name}</p>
                    </div>
                    <div className="price-product flex px-14   w-full py-3 items-center justify-between">
                      <div>
                        <span className="bg-red-500 p-1 text-[13px] text-white rounded">
                          {digitsEnToFa(addCommas(item.discount.numberdis))}%
                        </span>
                      </div>
                      <div className="flex flex-col px-4 font-ycan font-medium  text-[13px] ">
                        <span className="text-red-500 font-extrabold">
                          {digitsEnToFa(addCommas(item.price))} تومان
                        </span>
                        <span className="text-color text- line-through">
                          {digitsEnToFa(addCommas(item.discount.price))}{" "}
                          <span className="text-[10px]">تومان</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
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
