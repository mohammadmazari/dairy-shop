import React, { useContext, useEffect, useState } from "react";
import Footer from "../components/layout/footer";
import Header from "../components/layout/Header";
import MenuHeader from "../components/content/MenuHeader";
import { useParams } from "react-router-dom";
import productjson from "../products/products.json";
import Infoproduct from "../components/content/Infoproduct";
import { animateScroll as scroll } from "react-scroll";
function ProductPage() {
  const { id } = useParams();
  const [product, setproduct] = useState([]);
  useEffect(() => {
    setproduct(
      [
        ...productjson.products.موبایل,
        ...productjson.products.لپتاپ,
        ...productjson.products.ساعت,
        ...productjson.products.هدفون,
      ].find((item) => item.id === +id)
    );

    scroll.scrollToTop({ duration: 0, smooth: true });
  }, []);
  const { name, category } = product;
  return (
    <div className="mt-1 p-2">
      <Header />
      <MenuHeader />
      {/* //row line */}
      <div className="flex text-[0.4rem] md:text-[0.6rem] font-ycan text-gray-500 gap-1 border-t py-3 border-b border-gray-300 last:text-[0.7re8]">
        <p>فروشگاه اینترنتی دیری شاپ</p>/<p>{category}</p>/<p>{name}</p>
      </div>
      {/* //info product*/}
      <Infoproduct product={product} />
      <Footer />
    </div>
  );
}

export default ProductPage;
