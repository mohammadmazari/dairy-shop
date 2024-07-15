import React, { useContext, useEffect, useState } from "react";
import { digitsEnToFa } from "persian-tools";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { IoMdShare } from "react-icons/io";
import { RiMessage3Line } from "react-icons/ri";
import { FaBalanceScaleLeft } from "react-icons/fa";
import { LuBadgeAlert } from "react-icons/lu";
import { PiHeartLight } from "react-icons/pi";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { IoStorefront } from "react-icons/io5";
import { MdOutlineCreditScore } from "react-icons/md";
import { GrStatusGood } from "react-icons/gr";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { IoStorefrontSharp } from "react-icons/io5";
import { FaChevronLeft } from "react-icons/fa";
import "swiper/css";
import { Pagination } from "swiper/modules";
import imgexpress from "../../../public/image/expres.svg";
import Modalexpress2 from "../helper/Modalexpress2";
import Modalexpress from "../helper/Modalexpress";

import { Cart } from "../../App";
import Modaladcart from "../helper/Modaladcart";
function Infoproduct({ product }) {
  const { cart, setcart } = useContext(Cart);
  const {
    id,
    name,
    colors,
    info,
    discount,
    express,
    image,
    galleryimage,
    price,
  } = product;
  const [selected, setselected] = useState();
  const [selectedcolor, setselectedcolor] = useState();
  const selectedhandler = (e) => {
    if (e.target.tagName === "SPAN") {
      setselected(e.target.parentElement.dataset.name);
      setselectedcolor(e.target.parentElement.dataset.color);
    }
  };
  // add to cart hander
  const addtocarthander = () => {
    const newcart = [...cart, product.id];
    setcart([...new Set(newcart)]);
  };

  return (
    <div className="flex flex-col p-2 xl:p-5 xl:flex-row justify-between gap-2 ">
      {/* //title product */}
      <div className="w-[100%] xl:w-[40%] order-2 xl:order-1">
        <div>
          <p className="text-sm xl:text-md font-ycan text-color font-extrabold ">
            {name}
          </p>
          <p className="flex gap-2 font-ycan text-[13px] mt-4 text-color pb-2 ">
            <span>نظرات کاربران </span>
            <span className="text-orange-700">{digitsEnToFa(1)}</span>
          </p>
          <div className="flex gap-4 flex-col [&_p]:font-ycan [&_p]:text-gray-700 [&_p]:text-sm">
            {colors && (
              <p className="flex gap-2 text-sm xl:text-md">
                <span>رنگ:</span>
                <span className="text-[17px]">{selectedcolor}</span>
              </p>
            )}
            <div className="flex gap-2">
              {colors &&
                colors.map((item, index) => (
                  <button
                    data-name={index}
                    data-color={item.name}
                    onClick={(e) => {
                      selectedhandler(e);
                    }}
                    key={item.name}
                    style={
                      selected == index ? { border: "1.9px solid blue" } : {}
                    }
                    className="w-[80px] text-[11px] bg-white p-[5px] font-extrabold text-gray-500 rounded  border border-gray-300 shadow flex  items-center"
                  >
                    <span
                      className={`w-[30%] opacity-75 h-[100%] rounded flex justify-center items-center`}
                      style={{ backgroundColor: `${item.code}` }}
                    >
                      {selected == index && (
                        <IoCheckmarkDoneSharp
                          color="white"
                          size="13px"
                          fontSize={"bold"}
                        />
                      )}
                    </span>
                    <span className="flex-grow">{item.name}</span>
                  </button>
                ))}
            </div>
          </div>
        </div>
        {/* // info orginall*/}
        <div className="border-t pt-8 mt-5 border-t-2 font-ycan text-color">
          <p className="text-sm">ویژگی های اصلی</p>
          <div className="p-2 mt-2 rounded border border-[#b78737]">
            <ul className="p-2 divide-y-1 text-sm text-color xl:text-md ">
              {info &&
                info.map((item, index) => (
                  <li key={index} className="flex gap-2 py-4  ">
                    <p className="text-gray-500 text-sm">{item.name}</p>
                    <p>{item.about}</p>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>

      {/* //imgages product */}
      <div className="font-ycan flex flex-col order-1 xl:order-2 items-center justify-center w-[100%] xl:w-[30%]">
        {/* //icons header */}
        <div>
          <div>
            <ul className="flex gap-3">
              <li className="relative group/activ p-2 shadow rounded-md border cursor-pointer">
                <IoMdShare />
                <div className="absolute -top-10 text-[10px] transition-opacity opacity-0 group-hover/activ:opacity-100 w-20 -right-5 border p-2 rounded-full shadow=xl text-center bg-white ">
                  اشتراک کذاری
                </div>
              </li>
              <li className="relative group/activ p-2 shadow rounded-md border cursor-pointer">
                <RiMessage3Line color="blue" />
                <div className="absolute -top-10 text-[10px] transition-opacity opacity-0 group-hover/activ:opacity-100 w-20 -right-5 border p-2 rounded-full shadow=xl text-center bg-white ">
                  نظرات کاربران
                </div>
              </li>
              <li className="relative group/activ p-2 shadow rounded-md border cursor-pointer">
                <FaBalanceScaleLeft />
                <div className="absolute -top-10 text-[10px] transition-opacity opacity-0 group-hover/activ:opacity-100 w-20 -right-5 border p-2 rounded-full shadow=xl text-center bg-white ">
                  مقایسه کالا
                </div>
              </li>
              <li className="relative group/activ p-2 shadow rounded-md border cursor-pointer">
                <LuBadgeAlert color="green" />
                <div className="absolute -top-10 text-[10px] transition-opacity opacity-0 group-hover/activ:opacity-100 w-20 -right-5 border p-2 rounded-full shadow=xl text-center bg-white ">
                  اطلاع رسانی
                </div>
              </li>
              <li className="relative group/activ p-2 shadow rounded-md border cursor-pointer">
                <PiHeartLight color="red" fontWeight={"bold"} />
                <div className="absolute -top-10 text-[10px] transition-opacity opacity-0 group-hover/activ:opacity-100 w-20 -right-5 border p-2 rounded-full shadow=xl text-center bg-white ">
                  مورد علاقه
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* //imgaes */}
        <div className="hidden xl:inline-block w-full mt-2 ">
          <img src={image} width={"100%"} height={"100%"} />
        </div>
        {/* //imgage galery */}
        <div className=" hidden xl:inline-block">
          <ul className="flex gap-4 justify-end">
            {galleryimage &&
              galleryimage.map((item, index) => (
                <li
                  className="w-[15%] bg-gray-300 border rounded-xl mt-10 "
                  key={index}
                >
                  <img src={item} width={"100%"} height={"100%"} />
                </li>
              ))}
          </ul>
        </div>
        {/* //slider form mobile responsive */}
        <Swiper
          className="w-[100%] xl:hidden h-[250px] text-center"
          pagination={{ el: ".swiper-pagination", type: "bullets" }}
          modules={[Pagination]}
        >
          {galleryimage &&
            galleryimage.map((item, index) => (
              <SwiperSlide key={index}>
                <img src={item} className=" max-w-[400px] m-auto h-[100%]" />
              </SwiperSlide>
            ))}
          <br />
        </Swiper>
      </div>

      {/* //add basket */}
      <div className=" w-[30%] -600 p-5  order-3 xl:order-3 hidden xl:inline-block">
        <div className="flex flex-col font-ycan  font-medium  text-gray-600 gap-10 bg-white border p-3 py-5 rounded-xl shadow-xl">
          <div className="bg-[#f2f8fd] p-3 flex [&_p]:flex [&_p]:items-center [&_p]:gap-3 gap-6 flex-col gap-4">
            <p>
              <span>
                <IoStorefront size={"20px"} />
              </span>
              <span>دیری شاپ</span>
            </p>
            <p>
              <span>
                <MdOutlineCreditScore size={"20px"} />
              </span>
              <span className="text-sm text-[#d7a93d]">
                موجود درانبار دیری شاپ (ارسال فوری)
              </span>
            </p>
            <p>
              <span>
                <GrStatusGood size={"20px"} />
              </span>
              <span className="text-sm"> 24 ماه گارانتی شرکتی</span>
            </p>
          </div>
          <div>
            {discount && (
              <p className="flex justify-between flex-row-reverse px-5 ">
                <span className="text-red-500 font-extrabold">
                  {digitsEnToFa(addCommas(price))}
                  <span className="text-[12px] ms-1">تومان</span>
                </span>
                <span className="line-through">
                  {digitsEnToFa(addCommas(discount.price))}
                  <span className="text-[12px] ms-1">تومان</span>
                </span>
              </p>
            )}
          </div>
          <Modaladcart
            onClick={() => {
              addtocarthander();
              console.log("kos");
            }}
            className="bg-[#009a32] text-white rounded-md flex p-3 justify-center items-center gap-5"
            id={product.id}
          ></Modaladcart>
        </div>
        {/* //express send */}
        {express && (
          <div className=" bg-white border p-3 py-5 rounded-xl shadow-xl mt-5">
            <div className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500   mt-5  font-ycan  bg-white border p-[2px] rounded shadow-xl">
              <div className="flex flex-row-reverse p-5  justify-between bg-white">
                <div>
                  <img src={imgexpress} />
                </div>
                <div className="text-color text-sm first:font-extrabold ">
                  <p>ارسال فردا</p>
                  <p className="flex items-center gap-1 flex-row-reverse mt-2 text-blue-500 font-vazir text-[0.8rem]">
                    <FaLongArrowAltLeft />
                    <Modalexpress name={"توضیحات بیشتر "} />
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-5 font-ycan text-sm text-color bg-[#fff3df] p-4 shadow border border-[#d8b67a] items-center rounded">
              <div className="flex gap-1 flex-row-reverse items-center font-medium">
                <Modalexpress2 name={"تحویل حصوری رایگان"} />
                <IoStorefrontSharp size={"1.3rem"} />
              </div>
              <div>
                <FaChevronLeft />
              </div>
            </div>
          </div>
        )}
      </div>
      {express && (
        <div className="xl:hidden order-3 bg-white border p-3 py-5 rounded-xl shadow-xl mt-5">
          <div className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500   mt-5  font-ycan  bg-white border p-[2px] rounded shadow-xl">
            <div className="flex flex-row-reverse p-5  justify-between bg-white">
              <div>
                <img src={imgexpress} />
              </div>
              <div className="text-color text-sm first:font-extrabold ">
                <p>ارسال فردا</p>
                <p className="flex items-center gap-1 flex-row-reverse mt-2 text-blue-500 font-vazir text-[0.8rem]">
                  <FaLongArrowAltLeft />
                  <Modalexpress name={"توضیحات بیشتر "} />
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-5 font-ycan text-sm text-color bg-[#fff3df] p-4 shadow border border-[#d8b67a] items-center rounded">
            <div className="flex gap-1 flex-row-reverse items-center font-medium">
              <Modalexpress2 name={"تحویل حصوری رایگان"} />
              <IoStorefrontSharp size={"1.3rem"} />
            </div>
            <div>
              <FaChevronLeft />
            </div>
          </div>
        </div>
      )}
      {/* //add basket for moblile */}
      <div className="xl:hidden fixed bottom-0 text-color right-0 flex flex-col justify-center items-center gap-2 font-ycan shadow-lg border-t py-1 bg-[#f4f2f2] z-30 w-full">
        <div className="w-full flex justify-start gap-10 px-10 flex-row-reverse ">
          <p className="text-red-600 font-extrabold">
            {digitsEnToFa(addCommas(price))}
            <span className="text-sm ms-1">تومان</span>
          </p>
          <p className="">
            {discount && (
              <>
                <span className="line-through">
                  {digitsEnToFa(addCommas(discount.price))}
                </span>
                <span className="me-8 bg-red-600 text-white py- px-2 rounded font-light">
                  {digitsEnToFa(discount.numberdis)}%
                </span>
              </>
            )}
          </p>
        </div>
        <div className="w-full">
          <button
            onClick={() => {
              addtocarthander();
            }}
            className="bg-[#009a32] w-full text-white rounded-md flex p-3 justify-center items-center gap-5"
          >
            افزودن به سبد خرید <HiOutlineShoppingCart size={"20px"} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Infoproduct;
