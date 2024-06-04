import React, { useState } from "react";
import { VscLayout } from "react-icons/vsc";

function Login({ setshowform }) {
  const [value, setvalue] = useState({ value: "" });
  const [error, seterror] = useState(false);

  const submithandle = (e) => {
    e.preventDefault();
    if (!value.value) {
      seterror(true);
    } else {
      seterror(false);
      alert("خوش امدید");
    }
  };
  return (
    <>
      <form className="form w-full sm:w-2/4  md:w-[400px] font-ycan">
        <p className="font-vazir font-bold text-blue-400 text-lg pb-2">
          دیری شاپ{" "}
        </p>
        <p className="text-[10px] w-full text-start">سلام خوش امدید!</p>
        <p className="text-sm py-3 w-full text-start text-gray-800">
          لطفا شماره موبایل یا ایمیل خود را وارد کنید
        </p>
        <input
          type="text"
          className={`input border border-blue-400 ${error && "error"}`}
          value={value.value}
          onChange={(e) => setvalue({ value: e.target.value })}
        />
        {error && (
          <p className="text-[12px] w-full text-start text-red-600 transition">
            لطفا این قیمت را خالی نگذارید !
          </p>
        )}
        <button
          className="submitbtn font-medium border-none bg-blue-400 text-white"
          onClick={submithandle}
        >
          ورود
        </button>
        <p className="w-full text-start text-[12px] my-3">
          حساب کاربری ندارید ؟
          <button
            className="mx-3 text-blue-400 cursor-pointer"
            onClick={() => setshowform(1)}
          >
            ثبت نام
          </button>
        </p>
      </form>
    </>
  );
}

export default Login;
