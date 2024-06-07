import React, { useState } from "react";
import "../../styles/header.css";
import { LuUser2 } from "react-icons/lu";
import { PiUser } from "react-icons/pi";
import { PiShoppingCartLight } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import Modalmenu from "./modalmenu";

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

      {/* responsev compouter */}
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
        <div className="flex  items-center gap-6 text-[25px]">
          {/* shop icon */}
          <div className="border p-2 rounded-xl shadow hover:cursor-pointer ">
            <PiShoppingCartLight />
          </div>
          <div className="border p-2 rounded-xl shadow hover:cursor-pointer">
            <PiUser />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
