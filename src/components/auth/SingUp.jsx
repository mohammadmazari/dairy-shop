import React from "react";


function SingUp({ setshowform }) {

  return (
    <form className="form w-full sm:w-2/4  md:w-[400px] font-ycan">
      <p className="font-vazir font-bold text-blue-400 text-lg pb-2">
        دیری شاپ{" "}
      </p>
      <input
        className="input focus:border focus:border-blue-500 "
        type="text"
        placeholder="نام "
        maxLength={20}
      />
      <input
        className="input focus:border focus:border-blue-500"
        type="text"
        placeholder="نام خانودگی"
        maxLength={20}
      />
      <input
        className="input"
        type="tel"
        name="phone"
        min={0}
        max={11}
        placeholder="شماره تلفن"
        dir="rtl"
        pattern="[0-9]{11}"
        title="لطفاً یک شماره تلفن معتبر 11 رقمی وارد کنید"
        required
      />
      <input
        className="input focus:border focus:border-blue-500"
        type="email"
        placeholder="ایمیل "
      />
      <button className="submitbtn font-medium">ثبت نام</button>
      <p className="w-full text-start text-[12px] my-3">
        حساب کاربری دارید ؟
        <button
          className="mx-3 text-blue-400 cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            setshowform(2);
          }}
        >
          ورود
        </button>
      </p>
    </form>
  );
}

export default SingUp;
