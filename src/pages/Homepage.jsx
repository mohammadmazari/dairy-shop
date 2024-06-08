import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/footer";
import Slider from "../components/content/Slider";
import Categoryslider from "../components/content/Categoryslider";

function Homepage() {
  return (
    <>
      <div className="p-3">
        <Header />
        {/* slider baner */}
        <Slider />
        {/* slider category */}
        <Categoryslider />
        <Footer />
      </div>
    </>
  );
}

export default Homepage;
