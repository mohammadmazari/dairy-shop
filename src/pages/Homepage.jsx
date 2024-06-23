import React, { createContext, useEffect, useState } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/footer";
import Slider from "../components/content/Slider";
import Categoryslider from "../components/content/Categoryslider";
import Specialsale from "../components/content/Specialsale";
import MenuHeader from "../components/content/MenuHeader";
import Triple_banner from "../components/content/Triple_banner";
import myproducts from "../products/products.json";
export const Context = createContext();
function Homepage() {
  const [products, setporducts] = useState(myproducts);
  return (
    <>
      <div className="p-2 ">
        <Context.Provider value={products}>
 
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
            <Triple_banner />
          <Footer />
   

        </Context.Provider>
      </div>
    </>
  );
}

export default Homepage;
