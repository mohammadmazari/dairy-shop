import React from "react";
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
function Specialsale() {
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
            nextEl:'.swiper-button-next-1',
            prevEl:'.swiper-button-prev-1',
          }}
          slidesPerView={4}
          modules={[Navigation]}
          className="mySwiper-sale relative h-[360px]"
          breakpoints={{
            300:{
                slidesPerView:1
            },
            400:{
                slidesPerView:1
            },
            590:{
                slidesPerView:2
            },
            900:{
                slidesPerView:3
            },
            1150:{
                slidesPerView:4
            }
          }}
        >
          <SwiperSlide>
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
                <img src={img1} className="h-[100%] w-[200px]" />
              </div>
              <div className="info-product h-[50px] px-14 text-color font-ycan text-[13px]">
                <p>
                  تبلت لنوو مدل Tab M7 4G TB-7306X ظرفیت 32 گیگابایت رم 2
                  گیگابایت
                </p>
              </div>
              <div className="price-product flex px-14   w-full py-3 items-center justify-between">
                <div>
                  <span className="bg-red-500 p-1 text-[13px] text-white rounded">
                    10%
                  </span>
                </div>
                <div className="flex flex-col px-4 font-ycan font-medium  text-[13px] ">
                  <span className="text-red-500">4,950,000 تومان</span>
                  <span className="text-color text- line-through">
                    5,450,000 <span className="text-[10px]">تومان</span>
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
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
                <img src={img2} className="h-[100%] w-[200px]" />
              </div>
              <div className="info-product h-[50px] px-14 text-color font-ycan text-[13px]">
                <p>هندزفری بی سیم جی بی ال مدل Wave 200 </p>
              </div>
              <div className="price-product flex px-14   w-full py-3 items-center justify-between">
                <div>
                  <span className="bg-red-500 p-1 text-[13px] text-white rounded">
                    5%
                  </span>
                </div>
                <div className="flex flex-col px-4 font-ycan font-medium  text-[13px] ">
                  <span className="text-red-500">4,950,000 تومان</span>
                  <span className="text-color text- line-through">
                    1,450,000 <span className="text-[10px]">تومان</span>
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
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
                <img src={img3} className="h-[100%] w-[200px]" />
              </div>
              <div className="info-product h-[50px] px-14 text-color font-ycan text-[13px]">
                <p>
                  گوشی موبایل آنر مدل X8a ظرفیت 128 گیگابایت رم 8 گیگابایت
                  CRT-LX2
                </p>
              </div>
              <div className="price-product flex px-14   w-full py-3 items-center justify-between">
                <div>
                  <span className="bg-red-500 p-1 text-[13px] text-white rounded">
                    2%
                  </span>
                </div>
                <div className="flex flex-col px-4 font-ycan font-medium  text-[13px] ">
                  <span className="text-red-500">15,199,000 تومان</span>
                  <span className="text-color text- line-through">
                    15,450,000 <span className="text-[10px]">تومان</span>
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
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
                <img src={img4} className="h-[100%] w-[200px]" />
              </div>
              <div className="info-product h-[50px] px-14 text-color font-ycan text-[13px]">
                <p>اپل واچ SE Gen2 2023 سایز 44 میلی متری</p>
              </div>
              <div className="price-product flex px-14   w-full py-3 items-center justify-between">
                <div>
                  <span className="bg-red-500 p-1 text-[13px] text-white rounded">
                    2%
                  </span>
                </div>
                <div className="flex flex-col px-4 font-ycan font-medium  text-[13px] ">
                  <span className="text-red-500">14,000,000 تومان</span>
                  <span className="text-color text- line-through">
                    14,450,000 <span className="text-[10px]">تومان</span>
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
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
                <img src={img5} className="h-[100%] w-[200px]" />
              </div>
              <div className="info-product h-[50px] px-14 text-color font-ycan text-[13px]">
                <p>
                  گوشی موبايل سامسونگ گلکسی A54 5G ظرفیت 128 گیگابایت رم 8
                  گیگابایت
                </p>
              </div>
              <div className="price-product flex px-14   w-full py-3 items-center justify-between">
                <div>
                  <span className="bg-red-500 p-1 text-[13px] text-white rounded">
                    2%
                  </span>
                </div>
                <div className="flex flex-col px-4 font-ycan font-medium  text-[13px] ">
                  <span className="text-red-500">13,900,000 تومان</span>
                  <span className="text-color text- line-through">
                    15,450,000 <span className="text-[10px]">تومان</span>
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
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
                <img src={img6} className="h-[100%] w-[200px]" />
              </div>
              <div className="info-product h-[50px] px-14 text-color font-ycan text-[13px]">
                <p>کولر آبی 2800 برفاب مدل BF2</p>
              </div>
              <div className="price-product flex px-14   w-full py-3 items-center justify-between">
                <div>
                  <span className="bg-red-500 p-1 text-[13px] text-white rounded">
                    35%
                  </span>
                </div>
                <div className="flex flex-col px-4 font-ycan font-medium  text-[13px] ">
                  <span className="text-red-500">2,900,000 تومان</span>
                  <span className="text-color text- line-through">
                    3,000,000 <span className="text-[10px]">تومان</span>
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
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
                <img src={img7} className="h-[100%] w-[200px]" />
              </div>
              <div className="info-product h-[50px] px-14 text-color font-ycan text-[13px]">
                <p>
                  گوشی موبایل اپل مدل iPhone 11 TH/A نات اکتیو تک سیم کارت ظرفیت
                  64 گیگابایت رم 4 گیگابایت
                </p>
              </div>
              <div className="price-product flex px-14   w-full py-3 items-center justify-between">
                <div>
                  <span className="bg-red-500 p-1 text-[13px] text-white rounded">
                    3%
                  </span>
                </div>
                <div className="flex flex-col px-4 font-ycan font-medium  text-[13px] ">
                  <span className="text-red-500">27,900,000 تومان</span>
                  <span className="text-color text- line-through">
                    27,000,000 <span className="text-[10px]">تومان</span>
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
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
                <img src={img8} className="h-[100%] w-[200px]" />
              </div>
              <div className="info-product h-[50px] px-14 text-color font-ycan text-[13px]">
                <p>
                  لپ تاپ ایسر 15.6 اینچی مدل Aspire 5 A515 i5 1235U 8GB 512GB
                  RTX2050
                </p>
              </div>
              <div className="price-product flex px-14   w-full py-3 items-center justify-between">
                <div>
                  <span className="bg-red-500 p-1 text-[13px] text-white rounded">
                    3%
                  </span>
                </div>
                <div className="flex flex-col px-4 font-ycan font-medium  text-[13px] ">
                  <span className="text-red-500">27,900,000 تومان</span>
                  <span className="text-color text- line-through">
                    27,000,000 <span className="text-[10px]">تومان</span>
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
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
                <img src={img9} className="h-[100%] w-[200px]" />
              </div>
              <div className="info-product h-[50px] px-14 text-color font-ycan text-[13px]">
                <p>گوشی موبایل جی ال ایکس مدل F8 Plus دو سیم کارت </p>
              </div>
              <div className="price-product flex px-14   w-full py-3 items-center justify-between">
                <div>
                  <span className="bg-red-500 p-1 text-[13px] text-white rounded">
                    3%
                  </span>
                </div>
                <div className="flex flex-col px-4 font-ycan font-medium  text-[13px] ">
                  <span className="text-red-500">700,000 تومان</span>
                  <span className="text-color text- line-through">
                    800,000 <span className="text-[10px]">تومان</span>
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
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
                <img src={img10} className="h-[100%] w-[200px]" />
              </div>
              <div className="info-product h-[50px] px-14 text-color font-ycan text-[13px]">
                <p>هندزفری بی سیم جی بی ال مدل Wave 200 </p>
              </div>
              <div className="price-product flex px-14   w-full py-3 items-center justify-between">
                <div>
                  <span className="bg-red-500 p-1 text-[13px] text-white rounded">
                    3%
                  </span>
                </div>
                <div className="flex flex-col px-4 font-ycan font-medium  text-[13px] ">
                  <span className="text-red-500">700,000 تومان</span>
                  <span className="text-color text- line-through">
                    800,000 <span className="text-[10px]">تومان</span>
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
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
