import React from "react";
import { CiMobile4 } from "react-icons/ci";
import { TbDeviceMobileBolt } from "react-icons/tb";
import { CgSmartphoneChip } from "react-icons/cg";
import { MdSpeakerPhone } from "react-icons/md";
import { MdPhonelinkSetup } from "react-icons/md";
import { TbDeviceMobileDollar } from "react-icons/tb";
import { FaAngleLeft } from "react-icons/fa6";
import { MdOutlineMobileFriendly } from "react-icons/md";
import { MdLaptop } from "react-icons/md";
import { MdOutlineHeadphones } from "react-icons/md";
import { IoWatchOutline } from "react-icons/io5";
import { TbSolarElectricity } from "react-icons/tb";
import { MdOutlineScreenshotMonitor } from "react-icons/md";
import { MdOutlineAddHomeWork } from "react-icons/md";
function MenuHeader() {
  return (
    <>
      <div className="hidden xl:flex h-[70px]  text-gray-500 mt-2 text-[13px] font-vazir  items-center gap-5">
        {/* //item 1 */}
        <div className="flex relative group/menu h-full items-center justify-center  cursor-pointer">
          <p className="title-slide-menu ">
            <span>
              <MdOutlineMobileFriendly className="text-[18px]" />
            </span>
            <span>موبایل</span>
          </p>
          <div className=" hidden group-hover/menu:block absolute top-[70px] right-0  bg-white rounded-xl py-8  border  flex flex-col gap-10 z-10 shadow items-start ">
            <div className=" relative flex flex-col gap-10 text-gray-500">
              {/* //underslide mobile */}
              <div className="menu-slide group/color1">
                <FaAngleLeft className="text-color  absolute left-5 group-hover/color1:text-blue-400" />
                <span>موبایل</span>
                <span>
                  <CiMobile4 />
                </span>
                <div className="unde-slide-menu group-hover/color1:block">
                  <a href="#" className="flex items-center gap-5">
                    <span>قیمت گوشی</span>
                    <span>
                      <FaAngleLeft />
                    </span>
                  </a>
                  <div className="flex  mt-5  text-[13px] flex-wrap [&_a]:w-[45%]  gap-5">
                    <a href="#">گوشی اپل</a>
                    <a href="#">گوشی سامسونگ</a>
                    <a href="#">گوشی نوکیا</a>
                    <a href="#">گوشی گوگل</a>
                    <a href="#">گوشی داریا</a>
                    <a href="#">گوشی پوکو</a>
                    <a href="#">گوشی رملی</a>
                    <a href="#">گوشی اپل</a>
                    <a href="#">گوشی جی پلاس</a>
                    <a href="#">گوشی اردو</a>
                    <a href="#">گوشی هواوی</a>
                    <a href="#">گوشی هواوی</a>
                    <a href="#">گوشی هواوی</a>
                    <a href="#">گوشی هواوی</a>
                  </div>
                </div>
              </div>
              <div className="menu-slide group/color1">
                <FaAngleLeft className="text-color  absolute left-5 group-hover/color1:text-blue-400 group-hover/color1:transition-all" />
                <span>لوازم جانبی موبایل</span>
                <span>
                  <TbDeviceMobileBolt />
                </span>
                <div className="unde-slide-menu group-hover/color1:block">
                  <a href="#" className="flex items-center gap-5">
                    <span>قیمت گوشی</span>
                    <span>
                      <FaAngleLeft />
                    </span>
                  </a>
                  <div className="flex  mt-5  text-[13px] flex-wrap [&_a]:w-[45%]  gap-5">
                    <a href="#">گوشی اپل</a>
                    <a href="#">گوشی سامسونگ</a>
                    <a href="#">گوشی نوکیا</a>
                    <a href="#">گوشی گوگل</a>
                    <a href="#">گوشی داریا</a>
                    <a href="#">گوشی پوکو</a>
                    <a href="#">گوشی رملی</a>
                    <a href="#">گوشی اپل</a>
                    <a href="#">گوشی جی پلاس</a>
                    <a href="#">گوشی اردو</a>
                    <a href="#">گوشی هواوی</a>
                    <a href="#">گوشی هواوی</a>
                    <a href="#">گوشی هواوی</a>
                    <a href="#">گوشی هواوی</a>
                    <a href="#">گوشی هواوی</a>
                    <a href="#">گوشی هواوی</a>
                  </div>
                </div>
              </div>
              <div className="menu-slide group/color1">
                <FaAngleLeft className="text-color  absolute left-5 group-hover/color1:text-blue-400" />
                <span>قطعات موبایل</span>
                <span>
                  <CgSmartphoneChip />
                </span>
              </div>
              <div className="menu-slide group/color1">
                <FaAngleLeft className="text-color  absolute left-5 group-hover/color1:text-blue-400" />
                <span>گوشی بر اساس عملکرد</span>
                <span>
                  <MdSpeakerPhone />
                </span>
              </div>
              <div className="menu-slide group/color1">
                <FaAngleLeft className="text-color  absolute left-5 group-hover/color1:text-blue-400" />

                <span>گوشی بر اساس حافظه </span>
                <span>
                  <MdPhonelinkSetup />
                </span>
              </div>
              <div className="menu-slide group/color1">
                <FaAngleLeft className="text-color  absolute left-5 group-hover/color1:text-blue-400" />

                <span>گوشی بر اساس قیمت</span>
                <span>
                  <TbDeviceMobileDollar />
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* //item 2 */}
        <div className="flex relative group/menu h-full items-center justify-center cursor-pointer">
          <p className="title-slide-menu ">
            <span>
              <MdLaptop className="text-[18px]" />
            </span>
            <span>لپتاپ و کامپیوتر</span>
          </p>
          <div className="  hidden group-hover/menu:block absolute top-[70px] right-0  bg-white rounded-xl py-8  border  flex flex-col gap-10 z-10 shadow items-start ">
            <div className=" relative flex flex-col gap-10">
              {/* //underslide mobile */}
              <div className="menu-slide group/color1">
                <FaAngleLeft className="text-color  absolute left-5 group-hover/color1:text-blue-400" />
                <span>موبایل</span>
                <span>
                  <CiMobile4 />
                </span>
                <div className="unde-slide-menu group-hover/color1:block">
                  <a href="#" className="flex items-center gap-5">
                    <span>قیمت گوشی</span>
                    <span>
                      <FaAngleLeft />
                    </span>
                  </a>
                  <div className="flex  mt-5  text-[13px] flex-wrap [&_a]:w-[45%]  gap-5">
                    <a href="#">گوشی اپل</a>
                    <a href="#">گوشی سامسونگ</a>
                    <a href="#">گوشی نوکیا</a>
                    <a href="#">گوشی گوگل</a>
                    <a href="#">گوشی داریا</a>
                    <a href="#">گوشی پوکو</a>
                    <a href="#">گوشی رملی</a>
                    <a href="#">گوشی اپل</a>
                    <a href="#">گوشی جی پلاس</a>
                    <a href="#">گوشی اردو</a>
                    <a href="#">گوشی هواوی</a>
                    <a href="#">گوشی هواوی</a>
                    <a href="#">گوشی هواوی</a>
                    <a href="#">گوشی هواوی</a>
                  </div>
                </div>
              </div>
              <div className="menu-slide group/color1">
                <FaAngleLeft className="text-color  absolute left-5 group-hover/color1:text-blue-400 group-hover/color1:transition-all" />
                <span>لوازم جانبی موبایل</span>
                <span>
                  <TbDeviceMobileBolt />
                </span>
                <div className="unde-slide-menu group-hover/color1:block">
                  <a href="#" className="flex items-center gap-5">
                    <span>قیمت گوشی</span>
                    <span>
                      <FaAngleLeft />
                    </span>
                  </a>
                  <div className="flex  mt-5  text-[13px] flex-wrap [&_a]:w-[45%]  gap-5">
                    <a href="#">گوشی اپل</a>
                    <a href="#">گوشی سامسونگ</a>
                    <a href="#">گوشی نوکیا</a>
                    <a href="#">گوشی گوگل</a>
                    <a href="#">گوشی داریا</a>
                    <a href="#">گوشی پوکو</a>
                    <a href="#">گوشی رملی</a>
                    <a href="#">گوشی اپل</a>
                    <a href="#">گوشی جی پلاس</a>
                    <a href="#">گوشی اردو</a>
                    <a href="#">گوشی هواوی</a>
                    <a href="#">گوشی هواوی</a>
                    <a href="#">گوشی هواوی</a>
                    <a href="#">گوشی هواوی</a>
                    <a href="#">گوشی هواوی</a>
                    <a href="#">گوشی هواوی</a>
                  </div>
                </div>
              </div>
              <div className="menu-slide group/color1">
                <FaAngleLeft className="text-color  absolute left-5 group-hover/color1:text-blue-400" />
                <span>قطعات موبایل</span>
                <span>
                  <CgSmartphoneChip />
                </span>
              </div>
              <div className="menu-slide group/color1">
                <FaAngleLeft className="text-color  absolute left-5 group-hover/color1:text-blue-400" />
                <span>گوشی بر اساس عملکرد</span>
                <span>
                  <MdSpeakerPhone />
                </span>
              </div>
              <div className="menu-slide group/color1">
                <FaAngleLeft className="text-color  absolute left-5 group-hover/color1:text-blue-400" />

                <span>گوشی بر اساس حافظه </span>
                <span>
                  <MdPhonelinkSetup />
                </span>
              </div>
              <div className="menu-slide group/color1">
                <FaAngleLeft className="text-color  absolute left-5 group-hover/color1:text-blue-400" />

                <span>گوشی بر اساس قیمت</span>
                <span>
                  <TbDeviceMobileDollar />
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* //item 3 */}
        <div className="flex relative group/menu h-full items-center justify-center cursor-pointer">
          <p className="title-slide-menu ">
            <span>
              <MdOutlineHeadphones className="text-[18px]" />
            </span>
            <span> هندزفری و هدفون </span>
          </p>
          <div className="  hidden group-hover/menu:block absolute top-[70px] right-0  bg-white rounded-xl py-8  border  flex flex-col gap-10 z-10 shadow items-start ">
            <div className=" relative flex flex-col gap-10">
              {/* //underslide mobile */}
              <div className="menu-slide group/color1">
                <FaAngleLeft className="text-color  absolute left-5 group-hover/color1:text-blue-400" />
                <span>موبایل</span>
                <span>
                  <CiMobile4 />
                </span>
                <div className="unde-slide-menu group-hover/color1:block">
                  <a href="#" className="flex items-center gap-5">
                    <span>قیمت گوشی</span>
                    <span>
                      <FaAngleLeft />
                    </span>
                  </a>
                  <div className="flex  mt-5  text-[13px] flex-wrap [&_a]:w-[45%]  gap-5">
                    <a href="#">گوشی اپل</a>
                    <a href="#">گوشی سامسونگ</a>
                    <a href="#">گوشی نوکیا</a>
                    <a href="#">گوشی گوگل</a>
                    <a href="#">گوشی داریا</a>
                    <a href="#">گوشی پوکو</a>
                    <a href="#">گوشی رملی</a>
                    <a href="#">گوشی اپل</a>
                    <a href="#">گوشی جی پلاس</a>
                    <a href="#">گوشی اردو</a>
                    <a href="#">گوشی هواوی</a>
                    <a href="#">گوشی هواوی</a>
                    <a href="#">گوشی هواوی</a>
                    <a href="#">گوشی هواوی</a>
                  </div>
                </div>
              </div>
              <div className="menu-slide group/color1">
                <FaAngleLeft className="text-color  absolute left-5 group-hover/color1:text-blue-400 group-hover/color1:transition-all" />
                <span>لوازم جانبی موبایل</span>
                <span>
                  <TbDeviceMobileBolt />
                </span>
                <div className="unde-slide-menu group-hover/color1:block">
                  <a href="#" className="flex items-center gap-5">
                    <span>قیمت گوشی</span>
                    <span>
                      <FaAngleLeft />
                    </span>
                  </a>
                  <div className="flex  mt-5  text-[13px] flex-wrap [&_a]:w-[45%]  gap-5">
                    <a href="#">گوشی اپل</a>
                    <a href="#">گوشی سامسونگ</a>
                    <a href="#">گوشی نوکیا</a>
                    <a href="#">گوشی گوگل</a>
                    <a href="#">گوشی داریا</a>
                    <a href="#">گوشی پوکو</a>
                    <a href="#">گوشی رملی</a>
                    <a href="#">گوشی اپل</a>
                    <a href="#">گوشی جی پلاس</a>
                    <a href="#">گوشی اردو</a>
                    <a href="#">گوشی هواوی</a>
                    <a href="#">گوشی هواوی</a>
                    <a href="#">گوشی هواوی</a>
                    <a href="#">گوشی هواوی</a>
                    <a href="#">گوشی هواوی</a>
                    <a href="#">گوشی هواوی</a>
                  </div>
                </div>
              </div>
              <div className="menu-slide group/color1">
                <FaAngleLeft className="text-color  absolute left-5 group-hover/color1:text-blue-400" />
                <span>قطعات موبایل</span>
                <span>
                  <CgSmartphoneChip />
                </span>
              </div>
              <div className="menu-slide group/color1">
                <FaAngleLeft className="text-color  absolute left-5 group-hover/color1:text-blue-400" />
                <span>گوشی بر اساس عملکرد</span>
                <span>
                  <MdSpeakerPhone />
                </span>
              </div>
              <div className="menu-slide group/color1">
                <FaAngleLeft className="text-color  absolute left-5 group-hover/color1:text-blue-400" />

                <span>گوشی بر اساس حافظه </span>
                <span>
                  <MdPhonelinkSetup />
                </span>
              </div>
              <div className="menu-slide group/color1">
                <FaAngleLeft className="text-color  absolute left-5 group-hover/color1:text-blue-400" />

                <span>گوشی بر اساس قیمت</span>
                <span>
                  <TbDeviceMobileDollar />
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* //item 4 */}
        <div className="flex relative group/menu h-full items-center justify-center cursor-pointer">
          <p className="title-slide-menu ">
            <span>
              <IoWatchOutline className="text-[18px]" />
            </span>
            <span> ساعت وبند هوشمند </span>
          </p>
          <div className=" hidden group-hover/menu:block absolute top-[70px] right-0  bg-white rounded-xl py-8  border  flex flex-col gap-10 z-10 shadow items-start ">
            <div className=" relative flex flex-col gap-10">
              {/* //underslide mobile */}
              <div className="menu-slide group/color1">
                <FaAngleLeft className="text-color  absolute left-5 group-hover/color1:text-blue-400" />
                <span>موبایل</span>
                <span>
                  <CiMobile4 />
                </span>
                <div className="unde-slide-menu group-hover/color1:block">
                  <a href="#" className="flex items-center gap-5">
                    <span>قیمت گوشی</span>
                    <span>
                      <FaAngleLeft />
                    </span>
                  </a>
                  <div className="flex  mt-5  text-[13px] flex-wrap [&_a]:w-[45%]  gap-5">
                    <a href="#">گوشی اپل</a>
                    <a href="#">گوشی سامسونگ</a>
                    <a href="#">گوشی نوکیا</a>
                    <a href="#">گوشی گوگل</a>
                    <a href="#">گوشی داریا</a>
                    <a href="#">گوشی پوکو</a>
                    <a href="#">گوشی رملی</a>
                    <a href="#">گوشی اپل</a>
                    <a href="#">گوشی جی پلاس</a>
                    <a href="#">گوشی اردو</a>
                    <a href="#">گوشی هواوی</a>
                    <a href="#">گوشی هواوی</a>
                    <a href="#">گوشی هواوی</a>
                    <a href="#">گوشی هواوی</a>
                  </div>
                </div>
              </div>
              <div className="menu-slide group/color1">
                <FaAngleLeft className="text-color  absolute left-5 group-hover/color1:text-blue-400 group-hover/color1:transition-all" />
                <span>لوازم جانبی موبایل</span>
                <span>
                  <TbDeviceMobileBolt />
                </span>
                <div className="unde-slide-menu group-hover/color1:block">
                  <a href="#" className="flex items-center gap-5">
                    <span>قیمت گوشی</span>
                    <span>
                      <FaAngleLeft />
                    </span>
                  </a>
                  <div className="flex  mt-5  text-[13px] flex-wrap [&_a]:w-[45%]  gap-5">
                    <a href="#">گوشی اپل</a>
                    <a href="#">گوشی سامسونگ</a>
                    <a href="#">گوشی نوکیا</a>
                    <a href="#">گوشی گوگل</a>
                    <a href="#">گوشی داریا</a>
                    <a href="#">گوشی پوکو</a>
                    <a href="#">گوشی رملی</a>
                    <a href="#">گوشی اپل</a>
                    <a href="#">گوشی جی پلاس</a>
                    <a href="#">گوشی اردو</a>
                    <a href="#">گوشی هواوی</a>
                    <a href="#">گوشی هواوی</a>
                    <a href="#">گوشی هواوی</a>
                    <a href="#">گوشی هواوی</a>
                    <a href="#">گوشی هواوی</a>
                    <a href="#">گوشی هواوی</a>
                  </div>
                </div>
              </div>
              <div className="menu-slide group/color1">
                <FaAngleLeft className="text-color  absolute left-5 group-hover/color1:text-blue-400" />
                <span>قطعات موبایل</span>
                <span>
                  <CgSmartphoneChip />
                </span>
              </div>
              <div className="menu-slide group/color1">
                <FaAngleLeft className="text-color  absolute left-5 group-hover/color1:text-blue-400" />
                <span>گوشی بر اساس عملکرد</span>
                <span>
                  <MdSpeakerPhone />
                </span>
              </div>
              <div className="menu-slide group/color1">
                <FaAngleLeft className="text-color  absolute left-5 group-hover/color1:text-blue-400" />

                <span>گوشی بر اساس حافظه </span>
                <span>
                  <MdPhonelinkSetup />
                </span>
              </div>
              <div className="menu-slide group/color1">
                <FaAngleLeft className="text-color  absolute left-5 group-hover/color1:text-blue-400" />

                <span>گوشی بر اساس قیمت</span>
                <span>
                  <TbDeviceMobileDollar />
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* //item 5 */}
        <div className="flex relative group/menu h-full items-center justify-center cursor-pointer">
          <p className="title-slide-menu ">
            <span>
              <TbSolarElectricity className="text-[18px]" />
            </span>
            <span> لوازم برقی </span>
          </p>
          <div className="  hidden group-hover/menu:block absolute top-[70px]  bg-white rounded-xl py-8  border  flex flex-col gap-10 z-10 shadow items-start -right-32 ">
            <div className=" relative flex flex-col gap-10">
              {/* //underslide mobile */}
              <div className="menu-slide group/color1">
                <FaAngleLeft className="text-color  absolute left-5 group-hover/color1:text-blue-400" />
                <span>موبایل</span>
                <span>
                  <CiMobile4 />
                </span>
                <div className="unde-slide-menu group-hover/color1:block">
                  <a href="#" className="flex items-center gap-5">
                    <span>قیمت گوشی</span>
                    <span>
                      <FaAngleLeft />
                    </span>
                  </a>
                  <div className="flex  mt-5  text-[13px] flex-wrap [&_a]:w-[45%]  gap-5">
                    <a href="#">گوشی اپل</a>
                    <a href="#">گوشی سامسونگ</a>
                    <a href="#">گوشی نوکیا</a>
                    <a href="#">گوشی گوگل</a>
                    <a href="#">گوشی داریا</a>
                    <a href="#">گوشی پوکو</a>
                    <a href="#">گوشی رملی</a>
                    <a href="#">گوشی اپل</a>
                    <a href="#">گوشی جی پلاس</a>
                    <a href="#">گوشی اردو</a>
                    <a href="#">گوشی هواوی</a>
                    <a href="#">گوشی هواوی</a>
                    <a href="#">گوشی هواوی</a>
                    <a href="#">گوشی هواوی</a>
                  </div>
                </div>
              </div>
              <div className="menu-slide group/color1">
                <FaAngleLeft className="text-color  absolute left-5 group-hover/color1:text-blue-400 group-hover/color1:transition-all" />
                <span>لوازم جانبی موبایل</span>
                <span>
                  <TbDeviceMobileBolt />
                </span>
                <div className="unde-slide-menu group-hover/color1:block">
                  <a href="#" className="flex items-center gap-5">
                    <span>قیمت گوشی</span>
                    <span>
                      <FaAngleLeft />
                    </span>
                  </a>
                  <div className="flex  mt-5  text-[13px] flex-wrap [&_a]:w-[45%]  gap-5">
                    <a href="#">گوشی اپل</a>
                    <a href="#">گوشی سامسونگ</a>
                    <a href="#">گوشی نوکیا</a>
                    <a href="#">گوشی گوگل</a>
                    <a href="#">گوشی داریا</a>
                    <a href="#">گوشی پوکو</a>
                    <a href="#">گوشی رملی</a>
                    <a href="#">گوشی اپل</a>
                    <a href="#">گوشی جی پلاس</a>
                    <a href="#">گوشی اردو</a>
                    <a href="#">گوشی هواوی</a>
                    <a href="#">گوشی هواوی</a>
                    <a href="#">گوشی هواوی</a>
                    <a href="#">گوشی هواوی</a>
                    <a href="#">گوشی هواوی</a>
                    <a href="#">گوشی هواوی</a>
                  </div>
                </div>
              </div>
              <div className="menu-slide group/color1">
                <FaAngleLeft className="text-color  absolute left-5 group-hover/color1:text-blue-400" />
                <span>قطعات موبایل</span>
                <span>
                  <CgSmartphoneChip />
                </span>
              </div>
              <div className="menu-slide group/color1">
                <FaAngleLeft className="text-color  absolute left-5 group-hover/color1:text-blue-400" />
                <span>گوشی بر اساس عملکرد</span>
                <span>
                  <MdSpeakerPhone />
                </span>
              </div>
              <div className="menu-slide group/color1">
                <FaAngleLeft className="text-color  absolute left-5 group-hover/color1:text-blue-400" />

                <span>گوشی بر اساس حافظه </span>
                <span>
                  <MdPhonelinkSetup />
                </span>
              </div>
              <div className="menu-slide group/color1">
                <FaAngleLeft className="text-color  absolute left-5 group-hover/color1:text-blue-400" />

                <span>گوشی بر اساس قیمت</span>
                <span>
                  <TbDeviceMobileDollar />
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* //item 6 */}
        <div className="flex relative group/menu h-full items-center justify-center cursor-pointer">
          <p className="title-slide-menu ">
            <span>
              <MdOutlineScreenshotMonitor className="text-[18px]" />
            </span>
            <span> تصویری </span>
          </p>
          <div className="  hidden group-hover/menu:block absolute top-[70px]   bg-white rounded-xl py-8  border  flex flex-col gap-10 z-10 shadow items-start -right-32 ">
            <div className=" relative flex flex-col gap-10">
              {/* //underslide mobile */}
              <div className="menu-slide group/color1">
                <FaAngleLeft className="text-color  absolute left-5 group-hover/color1:text-blue-400" />
                <span>موبایل</span>
                <span>
                  <CiMobile4 />
                </span>
                <div className="unde-slide-menu group-hover/color1:block">
                  <a href="#" className="flex items-center gap-5">
                    <span>قیمت گوشی</span>
                    <span>
                      <FaAngleLeft />
                    </span>
                  </a>
                  <div className="flex  mt-5  text-[13px] flex-wrap [&_a]:w-[45%]  gap-5">
                    <a href="#">گوشی اپل</a>
                    <a href="#">گوشی سامسونگ</a>
                    <a href="#">گوشی نوکیا</a>
                    <a href="#">گوشی گوگل</a>
                    <a href="#">گوشی داریا</a>
                    <a href="#">گوشی پوکو</a>
                    <a href="#">گوشی رملی</a>
                    <a href="#">گوشی اپل</a>
                    <a href="#">گوشی جی پلاس</a>
                    <a href="#">گوشی اردو</a>
                    <a href="#">گوشی هواوی</a>
                    <a href="#">گوشی هواوی</a>
                    <a href="#">گوشی هواوی</a>
                    <a href="#">گوشی هواوی</a>
                  </div>
                </div>
              </div>
              <div className="menu-slide group/color1">
                <FaAngleLeft className="text-color  absolute left-5 group-hover/color1:text-blue-400 group-hover/color1:transition-all" />
                <span>لوازم جانبی موبایل</span>
                <span>
                  <TbDeviceMobileBolt />
                </span>
                <div className="unde-slide-menu group-hover/color1:block">
                  <a href="#" className="flex items-center gap-5">
                    <span>قیمت گوشی</span>
                    <span>
                      <FaAngleLeft />
                    </span>
                  </a>
                  <div className="flex  mt-5  text-[13px] flex-wrap [&_a]:w-[45%]  gap-5">
                    <a href="#">گوشی اپل</a>
                    <a href="#">گوشی سامسونگ</a>
                    <a href="#">گوشی نوکیا</a>
                    <a href="#">گوشی گوگل</a>
                    <a href="#">گوشی داریا</a>
                    <a href="#">گوشی پوکو</a>
                    <a href="#">گوشی رملی</a>
                    <a href="#">گوشی اپل</a>
                    <a href="#">گوشی جی پلاس</a>
                    <a href="#">گوشی اردو</a>
                    <a href="#">گوشی هواوی</a>
                    <a href="#">گوشی هواوی</a>
                    <a href="#">گوشی هواوی</a>
                    <a href="#">گوشی هواوی</a>
                    <a href="#">گوشی هواوی</a>
                    <a href="#">گوشی هواوی</a>
                  </div>
                </div>
              </div>
              <div className="menu-slide group/color1">
                <FaAngleLeft className="text-color  absolute left-5 group-hover/color1:text-blue-400" />
                <span>قطعات موبایل</span>
                <span>
                  <CgSmartphoneChip />
                </span>
              </div>
              <div className="menu-slide group/color1">
                <FaAngleLeft className="text-color  absolute left-5 group-hover/color1:text-blue-400" />
                <span>گوشی بر اساس عملکرد</span>
                <span>
                  <MdSpeakerPhone />
                </span>
              </div>
              <div className="menu-slide group/color1">
                <FaAngleLeft className="text-color  absolute left-5 group-hover/color1:text-blue-400" />

                <span>گوشی بر اساس حافظه </span>
                <span>
                  <MdPhonelinkSetup />
                </span>
              </div>
              <div className="menu-slide group/color1">
                <FaAngleLeft className="text-color  absolute left-5 group-hover/color1:text-blue-400" />

                <span>گوشی بر اساس قیمت</span>
                <span>
                  <TbDeviceMobileDollar />
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* //item 7 */}
        <div className="flex relative group/menu h-full items-center justify-center cursor-pointer">
          <p className="title-slide-menu ">
            <span>
              <MdOutlineAddHomeWork className="text-[18px]" />
            </span>
            <span> لوازم خانگی </span>
          </p>
          <div className=" hidden group-hover/menu:block absolute top-[70px]   bg-white rounded-xl py-8  border  flex flex-col gap-10 z-10 shadow items-start -right-48 ">
            <div className=" relative flex flex-col gap-10">
              {/* //underslide mobile */}
              <div className="menu-slide group/color1">
                <FaAngleLeft className="text-color  absolute left-5 group-hover/color1:text-blue-400" />
                <span>موبایل</span>
                <span>
                  <CiMobile4 />
                </span>
                <div className="unde-slide-menu group-hover/color1:block">
                  <a href="#" className="flex items-center gap-5">
                    <span>قیمت گوشی</span>
                    <span>
                      <FaAngleLeft />
                    </span>
                  </a>
                  <div className="flex  mt-5  text-[13px] flex-wrap [&_a]:w-[45%]  gap-5">
                    <a href="#">گوشی اپل</a>
                    <a href="#">گوشی سامسونگ</a>
                    <a href="#">گوشی نوکیا</a>
                    <a href="#">گوشی گوگل</a>
                    <a href="#">گوشی داریا</a>
                    <a href="#">گوشی پوکو</a>
                    <a href="#">گوشی رملی</a>
                    <a href="#">گوشی اپل</a>
                    <a href="#">گوشی جی پلاس</a>
                    <a href="#">گوشی اردو</a>
                    <a href="#">گوشی هواوی</a>
                    <a href="#">گوشی هواوی</a>
                    <a href="#">گوشی هواوی</a>
                    <a href="#">گوشی هواوی</a>
                  </div>
                </div>
              </div>
              <div className="menu-slide group/color1">
                <FaAngleLeft className="text-color  absolute left-5 group-hover/color1:text-blue-400 group-hover/color1:transition-all" />
                <span>لوازم جانبی موبایل</span>
                <span>
                  <TbDeviceMobileBolt />
                </span>
                <div className="unde-slide-menu group-hover/color1:block">
                  <a href="#" className="flex items-center gap-5">
                    <span>قیمت گوشی</span>
                    <span>
                      <FaAngleLeft />
                    </span>
                  </a>
                  <div className="flex  mt-5  text-[13px] flex-wrap [&_a]:w-[45%]  gap-5">
                    <a href="#">گوشی اپل</a>
                    <a href="#">گوشی سامسونگ</a>
                    <a href="#">گوشی نوکیا</a>
                    <a href="#">گوشی گوگل</a>
                    <a href="#">گوشی داریا</a>
                    <a href="#">گوشی پوکو</a>
                    <a href="#">گوشی رملی</a>
                    <a href="#">گوشی اپل</a>
                    <a href="#">گوشی جی پلاس</a>
                    <a href="#">گوشی اردو</a>
                    <a href="#">گوشی هواوی</a>
                    <a href="#">گوشی هواوی</a>
                    <a href="#">گوشی هواوی</a>
                    <a href="#">گوشی هواوی</a>
                    <a href="#">گوشی هواوی</a>
                    <a href="#">گوشی هواوی</a>
                  </div>
                </div>
              </div>
              <div className="menu-slide group/color1">
                <FaAngleLeft className="text-color  absolute left-5 group-hover/color1:text-blue-400" />
                <span>قطعات موبایل</span>
                <span>
                  <CgSmartphoneChip />
                </span>
              </div>
              <div className="menu-slide group/color1">
                <FaAngleLeft className="text-color  absolute left-5 group-hover/color1:text-blue-400" />
                <span>گوشی بر اساس عملکرد</span>
                <span>
                  <MdSpeakerPhone />
                </span>
              </div>
              <div className="menu-slide group/color1">
                <FaAngleLeft className="text-color  absolute left-5 group-hover/color1:text-blue-400" />

                <span>گوشی بر اساس حافظه </span>
                <span>
                  <MdPhonelinkSetup />
                </span>
              </div>
              <div className="menu-slide group/color1">
                <FaAngleLeft className="text-color  absolute left-5 group-hover/color1:text-blue-400" />

                <span>گوشی بر اساس قیمت</span>
                <span>
                  <TbDeviceMobileDollar />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuHeader;
