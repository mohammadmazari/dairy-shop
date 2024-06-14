import React, { useState } from "react";
import "../../styles/header.css";
import { LuUser2 } from "react-icons/lu";
import { PiUser } from "react-icons/pi";
import { PiShoppingCartLight } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import Modalmenu from "./modalmenu";
import { FaAngleLeft } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";
import { CiShoppingBasket } from "react-icons/ci";
import { AiOutlineLike } from "react-icons/ai";
import { MdPayment } from "react-icons/md";
import { digitsEnToFa, addCommas, phoneNumberValidator } from "persian-tools";
function Header() {
  return (
    <>
      {/* //responsev mobile */}
      <div className="flex justify-between  items-center   text-color md:hidden">
        <div>
          <Modalmenu />
        </div>

        <div>
          <h1 className="text-[20px] font-vazir font-bold text-blue-400">
            دیری شاپ
          </h1>
        </div>
        <div className="text-[25px] border p-2 rounded-xl shadow ">
          <LuUser2 />
        </div>
      </div>
      {/* row2 */}
      <div className="flex mt-4 text-color gap-6 items-center md:hidden">
        <div className="  flex-grow gap-3 items-center text-[25px] ">
          {/* <FiSearch /> */}
          <input
            type="text"
            placeholder="جستجو"
            className="inputbtn text-color text-gray-600 focus:outline-none"
          />
        </div>
        <div className="text-[25px] border p-2 rounded-xl shadow">
          <PiShoppingCartLight />
        </div>
      </div>

      {/* responsev pc */}
      <div className="flex items-center gap-9 mt-1 hidden md:flex">
        <div>
          <h1 className="text-[20px] font-vazir font-bold text-blue-400">
            دیری شاپ
          </h1>
        </div>
        <div className="  flex-grow gap-3 items-center text-[25px] relative ">
          <input
            type="text"
            placeholder="محصول, برند یا نام محصول خود را جستجو کنید"
            className="inputbtn w-4/6  font-vazir font-light text-gray-800 focus:outline-none p-5 ps-12"
          />
          <CiSearch className=" absolute top-4 right-3 text-color" />
        </div>
        {/* //basket and user */}
        <div className="flex  items-center gap-6 text-[25px]">
          {/* shop icon */}
          <div className=" relative group/hoveractiv border p-2 rounded-xl shadow hover:cursor-pointer ">
            <PiShoppingCartLight />
            <div className=" invisible group-hover/hoveractiv:visible group-hover/hoveractiv:opacity-100 opacity-0 absolute top-12 transition-all left-0 rounded shadow-xl p-3 text-[15px] w-[200px] font-ycan  font-thin">
              <div>
                <p>سبد خرید شما خالی است ! </p>
              </div>
            </div>
          </div>
          {/* //user icon */}
          <div className="relative group/hoveractiv border p-2 rounded-xl shadow hover:cursor-pointer">
            <PiUser />
            <div className=" menu-user md:group-hover/hoveractiv:visible md:group-hover/hoveractiv:opacity-100">
              <ul className="[&_li]:flex [&_li]:items-center [&_li]:text-[15px] [&_li]:font-ycan [&_li]:flex-row-reverse [&_li]:justify-between [&_li]:p-4 [&_li]:text-gray-800 [&_li]:transition-all">
                <li className="hover:bg-gray-100 group/activ">
                  <span>
                    <FaAngleLeft size={"17px"} className=" group-hover/activ:text-blue-500 group-hover/activ:-translate-x-1" />
                  </span>
                  <span>
                    <p className="inline-block">حساب کاربری</p>
                    <span className="text-[10px] ms-1">مشتری گرامی</span>
                  </span>
                </li>
                <li className="hover:bg-gray-100 group/activ border-b ">
                  <span>
                    <FaAngleLeft size={"17px"} className=" group-hover/activ:text-blue-500 group-hover/activ:-translate-x-1"/>
                  </span>
                  <span>ویرایش اطلاعات فردی</span>
                </li>
                <li className="hover:bg-gray-100 flex ">
                  <span className="flex items-center gap-1">
                    <span>{digitsEnToFa(addCommas(1000))}</span>
                    <span>تومان</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <span>
                      <MdPayment size={"25px"} />
                    </span>
                    <span>کیف پول</span>
                  </span>
                </li>
                <li className="hover:bg-gray-100 group/activ">
                  <span>
                    <FaAngleLeft size={"17px"} className=" group-hover/activ:text-blue-500 group-hover/activ:-translate-x-1"/>
                  </span>
                  <span className="flex items-center gap-2">
                    <span>
                      <AiOutlineLike size={"25px"} />
                    </span>
                    <span> لیست علاقه مندی</span>
                  </span>
                </li>
                <li className="hover:bg-gray-100 group/activ">
                  <span>
                    <FaAngleLeft size={"17px"} className=" group-hover/activ:text-blue-500 group-hover/activ:-translate-x-1"/>
                  </span>
                  <span className="flex items-center gap-2">
                    <span>
                      <CiShoppingBasket size={"25px"} />
                    </span>
                    <span> سفارش های من</span>
                  </span>
                </li>
                <li className="hover:bg-gray-100">
                  <span></span>
                  <span className="flex items-center gap-2">
                    <span>
                      <IoIosLogOut size={"25px"} />
                    </span>
                    <span> خروج از حساب کاربری</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
