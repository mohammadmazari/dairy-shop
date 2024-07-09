import React from "react";
import Myprofile from "../../components/profile/Myprofile";
import Lottie from "react-lottie-player";
import map from "..//../animation/map.json";
function Myaddresses() {
  return (
    <div>
      <Myprofile>
        <div className="m-auto w-full mt-10 md:mt-0 md:inline-flex md:w-[80%] h-auto  border p-2 md:p-10 md:flex-col md:gap-10 font-ycan">
          <div>
            <p className="text-sm md:text-lg font-extrabold text-color3 border-b-2 border-red-500 inline-block pb-2 px-2 ">
              نشانی ها
            </p>
          </div>

          <div className="flex px-20 justify-center  bg-gray-100 rounded py-3 h-[400px] my-5 flex-col items-center ">
            <div className="text-center">
              <p className="text-sm text-color">تابه حال نشانی ثبت نکرده اید</p>
              <Lottie
                loop
                play
                animationData={map}
                className="w-[200px] md:w-[300px]"
              />
              <p className="text-blue-500 mt-5 font-extrabold">افزودن نشانی جدید</p>
            </div>
          </div>
        </div>
      </Myprofile>
    </div>
  );
}

export default Myaddresses;
