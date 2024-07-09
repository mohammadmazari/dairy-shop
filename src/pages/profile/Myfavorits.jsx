import React from "react";
import { useEffect } from "react";
import authvalidation from "../../hooks/auth";
import Myprofile from "../../components/profile/Myprofile";
import Lottie from "react-lottie-player";
import favoraite from "../../animation/Myfavorits.json";
function Myfavorits() {
  useEffect(() => {
    const validaion = authvalidation("useracount");
    if (!validaion) {
      navigate("/");
    }
    document.title = "حسابت کاربری";
  });
  return (
    <div>
      <Myprofile>
        <div className="m-auto w-full mt-10 md:mt-0 md:inline-flex md:w-[80%] h-auto  border p-2 md:p-10 md:flex-col md:gap-10 font-ycan">
          <div>
            <p className="text-sm md:text-lg font-extrabold text-color3 border-b-2 border-red-500 inline-block pb-2  ">
              کالا های مورد علاقه من
            </p>
          </div>
          <div className="flex  px-20 justify-center  bg-gray-50 rounded py-10  my-5 flex-col items-center ">
            <div className="text-center">
              <p className="text-[0.7rem] md:text-[1rem] text-gray-500">
                لیست علاقه مندی شما خالی است
              </p>
              <Lottie
                loop
                play
                animationData={favoraite}
                className="w-[200px] md:w-[400px] mt-10"
              />
            </div>
          </div>
        </div>
      </Myprofile>
    </div>
  );
}

export default Myfavorits;
