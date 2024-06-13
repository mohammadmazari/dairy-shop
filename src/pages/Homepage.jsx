import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/footer";
import Slider from "../components/content/Slider";
import Categoryslider from "../components/content/Categoryslider";
import Specialsale from "../components/content/Specialsale";
import MenuHeader from "../components/content/MenuHeader";

function Homepage() {
  return (
    <>
      <div className="p-3">
        <Header />
        {/* menu */}
     <MenuHeader/>
        {/* slider baner */}
        <Slider />
        {/* slider category */}
        <Categoryslider />
        <br />
        {/* special sale */}
        <Specialsale />
        <Footer />
      </div>
    </>
  );
}

export default Homepage;
