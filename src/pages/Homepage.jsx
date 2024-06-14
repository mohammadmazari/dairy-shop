import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/footer";
import Slider from "../components/content/Slider";
import Categoryslider from "../components/content/Categoryslider";
import Specialsale from "../components/content/Specialsale";
import MenuHeader from "../components/content/MenuHeader";
import Triple_banner from "../components/content/Triple_banner";

function Homepage() {
  return (
    <>
      <div className="p-5">
        <Header />
        {/* menu */}
        <MenuHeader />
        {/* slider baner */}
        <Slider />
        {/* slider category */}
        <Categoryslider />
        <br />
        {/* special sale */}
        <Specialsale />
        {/* triple banner */}
        <Triple_banner/>
        <Footer />
      </div>
    </>
  );
}

export default Homepage;
