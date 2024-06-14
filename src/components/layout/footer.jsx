import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { SiInstagram } from "react-icons/si";
import { RiTelegramFill } from "react-icons/ri";
import { SiAparat } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";
import img1 from "../../../public/image/footer/download.svg";
import img2 from "../../../public/image/footer/c5.webp";
import img3 from "../../../public/image/footer/c4.webp";
import { animateScroll as scroll } from "react-scroll";

function Footer() {
  const scrollToTop = () => {
    scroll.scrollToTop({ smooth: "easeInOutQuad" });
  };
  return (
    <div className=" relative overflow-hidden bg-[#0c283f] text-white rounded-xl p-2 md:p-5 font-ycan mt-10 font-normal text-[0.7rem] md:text-[1rem]">
      <div className="flex justify-between mt-4 pb-10 border-b border-gray-400">
        <div>
          <p className="bg-white rounded-md text-blue-400  p-3 font-medium px-10">
            دیری شاپ
          </p>
        </div>
        <div>
          <button
            className="flex items-center gap-2 bg-white text-color p-3 rounded-md"
            onClick={scrollToTop}
          >
            بازگشت به بالا
            <MdOutlineKeyboardArrowUp size={"25px"} />
          </button>
        </div>
      </div>
      {/* info */}
      <div className="flex flex-col flex-col-reverse gap-5 md:flex md:flex-row  mt-7 md:justify-between">
        <div>
          <p>تلفن : 09034941322</p>
          <br />
          <p>ایمیل: info@dairy-shop.ir</p>
        </div>
        <div className="flex  items-center gap-4 bg-white rounded-xl  text-color p-4">
          <p>شبکه های اجتماعی </p>
          <ul className="flex gap-3 text-[28px] [&_li]:cursor-pointer">
            <li>
              <SiInstagram color="#f07b4d" />
            </li>
            <li>
              <RiTelegramFill color="#08abdf" />
            </li>
            <li>
              <SiAparat color="#ff005b" />
            </li>
            <li>
              <FaYoutube color="red" />
            </li>
          </ul>
        </div>
      </div>
      {/* access */}
      <div className="mt-20 ">
        <div className="hidden md:flex ">
          <div className=" w-[40%]">
            <h1 className="text-[1.2rem] pb-5">دسترسی سریع </h1>
            <ul className="flex flex-col text-[0.8rem] gap-3">
              <li>
                <a href="#">بلاگ</a>
              </li>
              <li>
                <a href="#">قیمت گوشی</a>
              </li>
              <li>
                <a href="#">گوشی سامسونگ</a>
              </li>
              <li>
                <a href="#">گوشی ایفون</a>
              </li>
              <li>
                <a href="#">گوشی شیاعومی</a>
              </li>
              <li>
                <a href="#">گوشی پوکو</a>
              </li>
              <li>
                <a href="#">مقایسه گوشی</a>
              </li>
              <li>
                <a href="#">هندزفری بلوتوثی</a>
              </li>
              <li>
                <a href="#">لپتاپ ایسوس</a>
              </li>
            </ul>
          </div>
          <div className="  w-[40%]">
            <h3 className="text-[1.2rem] pb-5"> پرفروش ترین محصولات </h3>
            <ul className="flex flex-col text-[0.8rem] gap-3">
              <li>
                <a href="#">گوشی a14</a>
              </li>
              <li>
                <a href="#"> ایفون 13</a>
              </li>
              <li>
                <a href="#"> پوکو x5 توت 12</a>
              </li>
              <li>
                <a href="#"> ساعت هوشمند</a>
              </li>
              <li>
                <a href="#"> پرینتر</a>
              </li>
              <li>
                <a href="#"> هارد اکسترنال</a>
              </li>
              <li>
                <a href="#">مقایسه گوشی</a>
              </li>
              <li>
                <a href="#">هندزفری بلوتوثی</a>
              </li>
              <li>
                <a href="#">لپتاپ ایسوس</a>
              </li>
            </ul>
          </div>
          <div className="  w-[40%]">
            <h3 className="text-[1.2rem] pb-5"> درباره ما </h3>
            <ul className="flex flex-col text-[0.8rem] gap-3">
              <li>
                <a href="#">دیری شاپ در یک نگاه</a>
              </li>
              <li>
                <a href="#"> اهداف و تعهدات ما</a>
              </li>
              <li>
                <a href="#"> سرگذشت دیری شاپ</a>
              </li>
              <li>
                <a href="#"> سوالات متداول</a>
              </li>
              <li>
                <a href="#"> تماس با ما</a>
              </li>
            </ul>
          </div>
        </div>
        {/* access 2 */}
        <div className="mt-10">
          <div className="hidden md:flex ">
            <div className=" w-[40%]">
              <h1 className="text-[1.2rem] pb-5">پیش از خرید</h1>
              <ul className="flex flex-col text-[0.8rem] gap-3">
                <li>
                  <a href="#">راهنمای خرید اقساطی</a>
                </li>
                <li>
                  <a href="#">خرید سازمانی</a>
                </li>
                <li>
                  <a href="#"> راهنمای خرید از دیری شاپ</a>
                </li>
                <li>
                  <a href="#"> روش های خرید از دیری شاپ </a>
                </li>
                <li>
                  <a href="#">راهنمای خرید اقساطی</a>
                </li>
              </ul>
            </div>
            <div className=" w-[40%]">
              <h3 className="text-[1.2rem] pb-5">پس از خرید</h3>
              <ul className="flex flex-col text-[0.8rem] gap-3">
                <li>
                  <a href="#">تضمین رجیستری</a>
                </li>
                <li>
                  <a href="#"> رویه بازگردانی کالا</a>
                </li>
                <li>
                  <a href="#"> سوالات متداول</a>
                </li>
                <li>
                  <a href="#"> رهگیری سفارش </a>
                </li>
                <li>
                  <a href="#">راهنمای خرید اقساطی</a>
                </li>
              </ul>
            </div>
            <div className=" w-[40%]">
              <h3 className="text-[1.2rem] pb-5"> قوانین و مقررات </h3>
              <ul className="flex flex-col text-[0.8rem] gap-3">
                <li>
                  <a href="#">قوانین و مقررات</a>
                </li>
                <li>
                  <a href="#">حریم خصوصی کاربران</a>
                </li>
                <li>
                  <a href="#"> از زبان مشتریان دیری شاپ</a>
                </li>
                <li>
                  <a href="#"> چرا دیری شاپ </a>
                </li>
                <li>
                  <a href="#">راهنمای خرید اقساطی</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* //acordion for mobil */}
        <div className="md:hidden">
          <Accordion sx={{ backgroundColor: "transparent", color: "white" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              دسترسع سریع
            </AccordionSummary>
            <AccordionDetails>
              <ul className="flex flex-col text-[0.8rem] gap-3">
                <li>
                  <a href="#">بلاگ</a>
                </li>
                <li>
                  <a href="#">قیمت گوشی</a>
                </li>
                <li>
                  <a href="#">گوشی سامسونگ</a>
                </li>
                <li>
                  <a href="#">گوشی ایفون</a>
                </li>
                <li>
                  <a href="#">گوشی شیاعومی</a>
                </li>
                <li>
                  <a href="#">گوشی پوکو</a>
                </li>
                <li>
                  <a href="#">مقایسه گوشی</a>
                </li>
                <li>
                  <a href="#">هندزفری بلوتوثی</a>
                </li>
                <li>
                  <a href="#">لپتاپ ایسوس</a>
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ backgroundColor: "transparent", color: "white" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              پرفروش ترین محصولات
            </AccordionSummary>
            <AccordionDetails>
              <ul className="flex flex-col text-[0.8rem] gap-3">
                <li>
                  <a href="#">گوشی a14</a>
                </li>
                <li>
                  <a href="#"> ایفون 13</a>
                </li>
                <li>
                  <a href="#"> پوکو x5 توت 12</a>
                </li>
                <li>
                  <a href="#"> ساعت هوشمند</a>
                </li>
                <li>
                  <a href="#"> پرینتر</a>
                </li>
                <li>
                  <a href="#"> هارد اکسترنال</a>
                </li>
                <li>
                  <a href="#">مقایسه گوشی</a>
                </li>
                <li>
                  <a href="#">هندزفری بلوتوثی</a>
                </li>
                <li>
                  <a href="#">لپتاپ ایسوس</a>
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ backgroundColor: "transparent", color: "white" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              قوانین و مقررات
            </AccordionSummary>
            <AccordionDetails>
              <ul className="flex flex-col text-[0.8rem] gap-3">
                <li>
                  <a href="#">قوانین و مقررات</a>
                </li>
                <li>
                  <a href="#">حریم خصوصی کاربران</a>
                </li>
                <li>
                  <a href="#"> از زبان مشتریان دیری شاپ</a>
                </li>
                <li>
                  <a href="#"> چرا دیری شاپ </a>
                </li>
                <li>
                  <a href="#">راهنمای خرید اقساطی</a>
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ backgroundColor: "transparent", color: "white" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              پیش از خرید
            </AccordionSummary>
            <AccordionDetails>
              <ul className="flex flex-col text-[0.8rem] gap-3">
                <li>
                  <a href="#">راهنمای خرید اقساطی</a>
                </li>
                <li>
                  <a href="#">خرید سازمانی</a>
                </li>
                <li>
                  <a href="#"> راهنمای خرید از دیری شاپ</a>
                </li>
                <li>
                  <a href="#"> روش های خرید از دیری شاپ </a>
                </li>
                <li>
                  <a href="#">راهنمای خرید اقساطی</a>
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ backgroundColor: "transparent", color: "white" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              پس از خرید
            </AccordionSummary>
            <AccordionDetails>
              <ul className="flex flex-col text-[0.8rem] gap-3">
                <li>
                  <a href="#">تضمین رجیستری</a>
                </li>
                <li>
                  <a href="#"> رویه بازگردانی کالا</a>
                </li>
                <li>
                  <a href="#"> سوالات متداول</a>
                </li>
                <li>
                  <a href="#"> رهگیری سفارش </a>
                </li>
                <li>
                  <a href="#">راهنمای خرید اقساطی</a>
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ backgroundColor: "transparent", color: "white" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              درباره ما
            </AccordionSummary>
            <AccordionDetails>
              <ul className="flex flex-col text-[0.8rem] gap-3">
                <li>
                  <a href="#">دیری شاپ در یک نگاه</a>
                </li>
                <li>
                  <a href="#"> اهداف و تعهدات ما</a>
                </li>
                <li>
                  <a href="#"> سرگذشت دیری شاپ</a>
                </li>
                <li>
                  <a href="#"> سوالات متداول</a>
                </li>
                <li>
                  <a href="#"> تماس با ما</a>
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>
        </div>
        {/* images */}
        <div className="flex mt-16 [&_div]:w-[15%] md:[&_div]:w-[6%] pb-20  gap-4 items-center justify-end">
          <div className="bg-white p-2  flex items-center h-[100px] rounded cursor-pointer">
            <img src={img1} width={"100%"} height={"100%"} />
          </div>
          <div className="bg-white p-2  flex items-center h-[100px] rounded cursor-pointer">
            <img src={img2} />
          </div>
          <div className="bg-white p-2  flex items-center h-[100px] rounded cursor-pointer">
            <img src={img3} />
          </div>
        </div>
      </div>
      <p className="bg-[#001528] text-center text-[0.6rem] md:text-sm p-5 absolute bottom-0 w-full right-0">
        ۱۴۰۳-1391 تمامی حقوق مادی و معنوی این سایت متعلق به دیری شاپ می‌باشد.
      </p>
    </div>
  );
}

export default Footer;
