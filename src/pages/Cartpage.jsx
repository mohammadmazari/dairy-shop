import React, { useContext, useState } from "react";
import Header from "../components/layout/Header";
import MenuHeader from "../components/content/MenuHeader";
import Footer from "../components/layout/footer";
import { IoStorefront } from "react-icons/io5";
import { GrStatusGood } from "react-icons/gr";
import { BsBox } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { FiPlus } from "react-icons/fi";
import { MdMinimize } from "react-icons/md";
import { digitsEnToFa, addCommas } from "persian-tools";
import { FiChevronLeft } from "react-icons/fi";
import { Cart } from "../App";
import emptybasket from "../animation/emptybasket.json";
import Lottie from "react-lottie-player";
import { useNavigate } from "react-router-dom";


function Cartpage() {
  const { cart, setcart } = useContext(Cart);
  const [newcart, setnewcart] = useState(() => {
    if (cart.length > 0) {
      return cart.filter(
        (prodcut, index, self) =>
          index === self.findIndex((p) => p.id === prodcut.id)
      );
    } else {
      return [];
    }
  });
  console.log(newcart);
  const minnumberhandler = (id) => {
    const newp = cart.filter((item) => {
      return item.id === id ? { ...item, total: item.total-- } : item;
    });
    cart.map((item) => {
      if (item.id === id) {
        setcart(newp);
        
      }
    });
  };
  const addnumberhandler = (id) => {
    const newp = cart.filter((item) => {
      return item.id === id && item.total < 10
        ? { ...item, total: item.total++ }
        : item;
    });
    cart.map((item) => {
      if (item.id === id && item.total <= 10) {
        setcart(newp);
      }
    });
  };
  const deletehandler = (id) => {
    const newp = cart.filter((item) => item.id != id);
    setcart(newp);
    setnewcart([])
  };
  const navigate = useNavigate();
  return (
    <div className="px-3 mt-1">
      <Header/>
      <MenuHeader />
      {newcart.length > 0 ? (
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-0">
          {/* //products */}
          <div className=" max-w-[900px]">
            {newcart.length > 0 && (
              <div className="font-ycan flex justify-between text-[0.6rem] md:text-sm mt-20 px-3 w-full md:px-10">
                <p className="font-extrabold ">
                  سبد خردید شما
                  <span className="ms-2 text-red-400">
                    {digitsEnToFa(cart.length)} کالا
                  </span>
                </p>
                <button
                  onClick={() => {
                    setcart("");
                    setnewcart([]);
                  }}
                  className="flex gap-1 items-center "
                >
                  حذف کل سبد خرید
                  <AiOutlineDelete size="18px" />
                </button>
              </div>
            )}
            {newcart.length > 0 ? (
              <div className=" md:flex md:gap-10 md:justify-between pt-5 px-3 md:px-10 font-ycan text-color text-[0.8rem] md:text-sm">
                <div className="md:flex-grow">
                  {/* //content */}
                  {newcart.length > 0
                    ? newcart.map((item) => (
                        <div
                          className="border py-5 px-3 rounded-xl border-gray-400 mt-3"
                          key={item.id}
                        >
                          <div className="flex justify-between">
                            <div className="flex flex-col gap-7 mt-3 [&_p]:flex [&_p]:gap-3 [&_p]:items-center [&_p]:text-gray-600 ">
                              <p className="text-[0.7rem] md:text-sm font-extrabold">
                                {item.name && item.name}
                              </p>
                              <p className="mt-5 text-[0.6rem] md:text-sm">
                                <span>
                                  <IoStorefront size={"18px"} />
                                </span>
                                <span>دیری شاپ</span>
                              </p>
                              <p className="text-[0.6rem] md:text-sm">
                                <span>
                                  <GrStatusGood size={"18px"} />
                                </span>
                                <span> 24 ماه گارانتی شرکتی</span>
                              </p>
                              <p className=" text-[0.6rem] md:text-sm">
                                <span>
                                  <BsBox size={"17px"} />
                                </span>
                                <span className=" text-[#d7a93d]">
                                  موجود درانبار دیری شاپ (ارسال فوری)
                                </span>
                              </p>
                            </div>
                            <div className="w-[220px] h-[120px] sm:h-[150px] md:w-[250px] md:h-[200px]">
                              <img src={item.image} />
                            </div>
                          </div>
                          <div className="flex flex-row-reverse justify-between mt-10 md:flex md:flex-row md:justify-between md:px-8">
                            {item.selectedcolor && (
                              <div>
                                <span className="w-[80px] text-[10px] bg-white p-[5px] flex items-center justify-between px-2 font-extrabold text-gray-500 rounded  border border-gray-300 shadow flex  items-center">
                                  <span
                                    className={`w-[25px]  h-[25px] rounded block `}
                                    style={{
                                      backgroundColor: `${item.selectedcolor.code}`,
                                    }}
                                  ></span>
                                  <span>{item.selectedcolor.name}</span>
                                </span>
                              </div>
                            )}
                            <div className="flex items-center ">
                              <p className="text-red-600 text-[0.8rem] md:text-[0.9rem] font-extrabold">
                                <span>
                                  {digitsEnToFa(
                                    addCommas(item.total * item.price)
                                  )}
                                </span>
                                <span className="ms-1 text-[0.7rem] md:text-[0.8rem]">
                                  تومان
                                </span>
                              </p>
                            </div>
                            <div className="flex gap-5 md:gap-10">
                              <div>
                                <button
                                  onClick={() => {
                                    addnumberhandler(item.id);
                                  }}
                                  className={`${"w-[35px] h-[35px] md:w-[40px] md:h-[40px] flex items-center justify-center border rounded-xl border-gray-300 shadow"} ${
                                    item.total === 10 && "opacity-50"
                                  }`}
                                >
                                  <FiPlus color="blue" />
                                </button>
                              </div>
                              <div>
                                <p className=" relative flex items-center h-[40px]">
                                  <span>{item.total}</span>
                                  {item.total === 10 && (
                                    <span className="absolute -top-2 md:-top-5 -left-3 text-[0.5rem] md:text-[0.7rem] opacity-80">
                                      حداگتز
                                    </span>
                                  )}
                                </p>
                              </div>
                              <div>
                                {item.total === 1 ? (
                                  <button
                                    onClick={() => {
                                      deletehandler(item.id);
                                    }}
                                    className="w-[35px] h-[35px] md:w-[40px] md:h-[40px] flex items-center justify-center border rounded md:rounded-xl border-gray-300 md:shadow"
                                  >
                                    <AiOutlineDelete color="blue" size="20px" />
                                  </button>
                                ) : (
                                  <button
                                    onClick={() => {
                                      minnumberhandler(item.id);
                                    }}
                                    className="w-[35px] h-[35px] md:w-[40px] md:h-[40px] flex items-center justify-center border rounded-xl border-gray-300 shadow"
                                  >
                                    <MdMinimize
                                      color="blue"
                                      style={{ marginBottom: "10px" }}
                                    />
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    : "محصولی وجود ندارد"}
                </div>
              </div>
            ) : (
              ""
            )}
          </div>

          {/* //cart */}
          {newcart.length > 0 && (
            <main className="mx-auto font-ycan w-[100%] lg:w-auto">
              <p className="font-extrabold text-gray-900 px-5 ">صورت حساب</p>

              <div className="bg-white border border-1 w-[100%] rounded-xl px-3 md:px-10 lg:w-[350px] h-[300px] mt-4 [&_p]:flex [&_p]:mt-6 [&_p]:text-sm [&_p]:justify-between">
                <p>
                  <span>قیمت محصولات</span>

                  <span>
                    {digitsEnToFa(
                      addCommas(
                        newcart.reduce((acc, product) => {
                          return acc + product.price * product.total;
                        }, 0)
                      )
                    )}
                    <span className="ms-1 text-[0.7rem]">تومان</span>
                  </span>
                </p>
                <p className="text-red-500">
                  <span>تخفیف محصولات </span>
                  <span>
                    {digitsEnToFa(
                      addCommas(
                        newcart.reduce((acc, product) => {
                          return (
                            acc +
                            product.price * product.total -
                            product.discount.price * product.total
                          );
                        }, 0)
                      )
                    )}
                    <span className="ms-1 text-[0.7rem]">تومان</span>
                  </span>
                </p>
                <p className="font-extrabold text-color">
                  <span>جمع کل </span>
                  <span>
                    {digitsEnToFa(
                      addCommas(
                        newcart.reduce((acc, product) => {
                          return acc + product.discount.price * product.total;
                        }, 0)
                      )
                    )}
                  </span>
                </p>
                <button className="mt-10 bg-green-600 w-full p-3 text-white rounded-xl ">
                  ادامه خرید
                </button>
              </div>
            </main>
          )}
        </div>
      ) : (
        <div className="w-[100%] flex flex-col items-center justify-center">
          <Lottie
            animationData={emptybasket}
            play
            className="w-[200px] md:w-[300px] py-10 "
          />
          <p className="text-[0.7rem] font-ycan w-full text-center md:text-sm text-gray-500">
            سبد خرید شما خالی است
          </p>
          <button
            onClick={() => {
              navigate("/");
            }}
            className="w-full flex justify-center items-center text-center mt-5 text-[0.8rem] text-blue-400 md:text-[1.1rem]"
          >
            بازگشت به صحفه اصلی
            <FiChevronLeft size="18px" />
          </button>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Cartpage;
