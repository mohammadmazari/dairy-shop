import React, { useRef, useState } from "react";
import AlertDialogSlide from "../helper/modal";


const initioalstat = {
  name: "",
  lastname: "",
  phone: "",
  email: "",
  imageprofile: "",
};

function SingUp({ setshowform }) {
  const [userinfo, setuserinfo] = useState(initioalstat);

  const name = useRef();
  const lastname = useRef();
  const phone = useRef();
  const email = useRef();

  const sendinfhandler = (e) => {
    e.preventDefault();

    //validata information
    !userinfo.name
      ? (name.current.className = "input error")
      : (name.current.className = "input");
    !userinfo.lastname
      ? (lastname.current.className = "input error")
      : (lastname.current.className = "input");
    !userinfo.phone
      ? (phone.current.className = "input error")
      : (phone.current.className = "input");
    !userinfo.email
      ? (email.current.className = "input error")
      : (email.current.className = "input");
    if (
      !userinfo.name ||
      !userinfo.lastname ||
      !userinfo.phone ||
      !userinfo.email
    )
      return;

    const user = JSON.stringify(userinfo);
    localStorage.setItem("useracount", user);
  };
  return (
    <>
      <form className="form w-full sm:w-2/4  md:w-[400px] font-ycan">
        <p className="font-vazir font-bold text-blue-400 text-lg pb-2">
          دیری شاپ{" "}
        </p>
        <input
          className="input focus:border focus:border-blue-500 "
          type="text"
          placeholder="نام "
          maxLength={20}
          value={userinfo.name}
          onChange={(e) => setuserinfo({ ...userinfo, name: e.target.value })}
          ref={name}
        />
        <input
          className="input focus:border focus:border-blue-500"
          type="text"
          placeholder="نام خانودگی"
          maxLength={20}
          value={userinfo.lastname}
          onChange={(e) =>
            setuserinfo({ ...userinfo, lastname: e.target.value })
          }
          ref={lastname}
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
          value={userinfo.phone}
          onChange={(e) => setuserinfo({ ...userinfo, phone: e.target.value })}
          ref={phone}
        />
        <input
          className="input focus:border focus:border-blue-500"
          type="email"
          placeholder="ایمیل "
          value={userinfo.email}
          onChange={(e) => setuserinfo({ ...userinfo, email: e.target.value })}
          ref={email}
        />
        {/* btn submit */}

        {!userinfo.name ||
        !userinfo.lastname ||
        !userinfo.email ||
        !userinfo.phone ? (
          <button className="submitbtn font-medium" onClick={sendinfhandler}>
            ثبت نام
          </button>
        ) : (
          <AlertDialogSlide userinfo ={userinfo}/>
        )}
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
      {/* <AlertDialogSlide/> */}
    </>
  );
}

export default SingUp;
