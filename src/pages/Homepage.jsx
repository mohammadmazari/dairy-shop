import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/footer";
import Slider from "../components/content/Slider";

function Homepage() {
  return (
    <div className="p-3">
      <Header />
      <Slider />
      <Footer />
    </div>
  );
}

export default Homepage;
