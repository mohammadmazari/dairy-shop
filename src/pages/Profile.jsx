import React, { useState, useEffect } from "react";
import { FiUser } from "react-icons/fi";
import {  useNavigate } from "react-router-dom";
import authvalidation from "../hooks/auth";
import Myprofile from "../components/profile/Myprofile"
function Profile() {
  //is login or no
  const navigate = useNavigate();
  useEffect(() => {
    const validaion = authvalidation("useracount");
    if (!validaion) {
      navigate("/auth");
    }
    document.title = "حساب کاربری";
  });
  // info user from localstorage
  const [info, setinfo] = useState(() => {
    const infouser = JSON.parse(localStorage.getItem("useracount"));
    return infouser ? infouser : '';
  });
  return (
    <div className="mt-2">
      <Myprofile>
      <div className="hidden md:inline-flex w-[80%] h-[400px] border p-10 md:flex-col md:gap-10 font-ycan">
        <div>
          <p className="flex gap-2 items-center font-extrabold text-color3">
            <span>
              <FiUser className="text-color2" size={"25px"} />
            </span>
            <span>مشخصات فردی</span>
          </p>
        </div>
        <div className="flex gap-10 px-20 justify-between bg-gray-200 text-gray-500 rounded py-3">
          <div className="flex flex-col gap-4 items-center">
            <span>نام و نام خانوادگی</span>
            {info && (
              <p className="flex gap-1">
                <span> {info.name}</span>
                <span> {info.lastname}</span>
              </p>
            )}
          </div>
          <div className="flex flex-col gap-4 items-center">
            <span>پست الکترونیک</span>
            {info && (
              <p>
                <span> {info.email}</span>
              </p>
            )}
          </div>
          <div className="flex flex-col gap-4 items-center">
            <span>تلفن همره</span>
            {info && (
              <p>
                <span> {info.phone}</span>
              </p>
            )}
          </div>
        </div>
      </div>
      </Myprofile>
    </div>
  );
}

export default Profile;
