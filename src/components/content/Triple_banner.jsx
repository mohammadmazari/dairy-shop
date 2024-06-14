import React from "react";
import img1 from "../../../public/image/triple_banner/banner_CenterTripletBanners_1EXPHl_a4213bbd-ed60-4d09-a129-dc76618559dc (1).webp";
import img2 from "../../../public/image/triple_banner/banner_CenterTripletBanners_QG7jMm_179a27b4-bab9-4b33-8755-9fa5d92e77de.webp";
import img3 from "../../../public/image/triple_banner/banner_CenterTripletBanners_UMzfd2_986c87c9-0158-4993-b543-85a5a25740ca.webp";

function Triple_banner() {
  return (
    <div className="mt-16">
      <div className="flex flex-col md:flex md:flex-row-reverse gap-10 flex-grow [&_a]:rounded-[25px] [&_a]:overflow-hidden ">
        <a href="#">
          <img src={img1} />
        </a>
        <a href="#">
          <img src={img2} className="h-full" />
        </a>
        <a href="#">
          <img src={img3} />
        </a>
      </div>
    </div>
  );
}

export default Triple_banner;
