import React from "react";
import { useEffect } from "react";
import Myprofile from "../../components/profile/Myprofile";
import { useNavigate } from "react-router-dom";
import authvalidation from "../../hooks/auth";
import Lottie from "react-lottie-player";
import comments from '../../animation/my-comments.json'

function Mycomments() {
  const navigate = useNavigate();
  useEffect(() => {
    const validaion = authvalidation("useracount");
    if (!validaion) {
      navigate("/");
    }
    document.title = "حساب کاربری";
  });
  return (
    <div>
      <Myprofile>
        <div className="m-auto w-full mt-10 md:mt-0 md:inline-flex md:w-[80%] h-auto  border p-2 md:p-10 md:flex-col md:gap-10 font-ycan">
          <div>
            <p className="text-sm md:text-lg font-extrabold text-color3 border-b-2 border-red-500 inline-block pb-2  ">
              نظرات من
            </p>
          </div>
          <div className="text-center mt-10 md:mt-0 font-thin text-sm md:text-md flex justify-center ">
            <button className="bg-[#0f253d] text-white p-1 text-[0.8rem] md:p-3 rounded-s-xl  flex flex-col justify-center gap-2 items-center w-36">
              <span>در انتظار تایید</span>
              <span> 0</span>
            </button>
            <button className=" p-1 text-[0.8rem] md:p-3 border border-gray-400 rounded-e-xl  flex flex-col gap-2 items-center w-36">
              <span>نظرات من</span>
              <span> 0</span>
            </button>
          </div>
          <div className="flex  px-20 justify-center  bg-gray-100 rounded py-3 h-[400px] my-5 flex-col items-center ">
            <div className="text-center">
              <p className="text-[0.7rem] md:text-[1rem] text-gray-500">
                پیامی وجود ندارد
              </p>
             <Lottie loop play animationData={comments}  className="w-[200px] md:w-[300px] mt-10 md:mt-5"/>
            </div>
          </div>
        </div>
      </Myprofile>
    </div>
  );
}

export default Mycomments;
