import React from "react";
import { useEffect } from "react";
import Myprofile from "../../components/profile/Myprofile";
import { useNavigate } from "react-router-dom";
import authvalidation from "../../hooks/auth";
function Myorders() {
    const navigate = useNavigate()
    useEffect(()=>{
      const validaion = authvalidation("useracount");
      if(!validaion){
        navigate("/")
      }
    })
  return (
    <Myprofile>
       <div className="m-auto w-full mt-10 md:mt-0 md:inline-flex md:w-[80%] h-auto  border p-2 md:p-10 md:flex-col md:gap-10 font-ycan">
        <div>
           <p className="text-sm md:text-lg font-extrabold text-color3 border-b-2 border-red-500 inline-block pb-2  ">سفارش های من</p>
           <div className="flex flex-col px-4  sm:flex-row sm:justify-center text-[0.8rem] md:text-sm mt-6 [&_button]:border  [&_button]:p-4 [&_button]:w-full sm:[&_button]:w-[150px]  [&_button]:flex [&_button]:gap-3 [&_button]:flex-col [&_button]:items-center ">
            <button className="rounded-t sm:rounded-s-xl bg-[#0f253d] text-white">
                <p>در اتنظار پرداخت</p>
                <p>0</p>
            </button>
            <button>
                <p>در حال پردازش</p>
                <p>0</p>
            </button>
            <button>
                <p>تحویل شده</p>
                <p>0</p>
            </button>
            <button>
                <p>مرجوعی</p>
                <p>0</p>
            </button>
            <button>
                <p>لغو شده و معلق</p>
                <p>0</p>
            </button>
           </div>
        </div>
        <div className="flex  px-20 justify-center  bg-gray-100 rounded py-3 h-[400px] my-5 flex-col items-center ">
            <div>
            <p className="text-[0.7rem] md:text-[1rem] text-gray-500">سفارش فعلی در این بخش وجود ندارد</p>
            <img src="https://www.technolife.ir//image/order.png" className="w-[100px] md:w-[200px] mt-2" />
            </div>
        </div>
      </div>
    </Myprofile>
  );
}

export default Myorders;
