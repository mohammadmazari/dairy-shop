import React from "react";
import { useEffect } from "react";
import Myprofile from "../../components/profile/Myprofile";
import Lottie from "react-lottie-player";
import recentlyvisited from "../../animation/recently-visitec.json"
import { useNavigate } from "react-router-dom";
import authvalidation from "../../hooks/auth";
function RecentlyVisited() {
  //authvalidation
  const navigate = useNavigate()
  useEffect(() => {
    const validaion = authvalidation("useracount");
    if (!validaion) {
      navigate("/");
    }
    document.title ="حسابت کاربری";
  });

  return (
    <div>
      <Myprofile>
        <div className="m-auto w-full mt-10 md:mt-0 md:inline-flex md:w-[80%] h-auto  border p-2 md:p-10 md:flex-col md:gap-10 font-ycan">
          <div>
            <p className="text-sm md:text-lg font-extrabold text-color3 border-b-2 border-red-500 inline-block pb-2  ">
              اخرین کالاهای دیده شده
            </p>
          </div>
          <div className="text-center mt-10 md:mt-0 font-thin text-sm md:text-md flex justify-center "></div>
          <div className="flex  px-20 justify-center  bg-gray-100 rounded py-3 h-[400px] my-5 flex-col items-center ">
            <p className="text-[0.7rem] md:text-[1rem] text-gray-500">
          کالای وجود ندارد
            </p>
            <Lottie
              loop
              play
              animationData={recentlyvisited}
              className="w-[150px] md:w-[250px] mt-10 md:mt-15"
            />
          </div>
        </div>
      </Myprofile>
    </div>
  );
}

export default RecentlyVisited;
