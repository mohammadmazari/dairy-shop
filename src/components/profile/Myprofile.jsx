import React, { useState ,useEffect} from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { FiBox } from "react-icons/fi";
import { AiOutlineLike } from "react-icons/ai";
import { TiMessages } from "react-icons/ti";
import { FiMapPin } from "react-icons/fi";
import { BiMessageAlt } from "react-icons/bi";
import { IoEyeOutline } from "react-icons/io5";
import { RiUserFollowLine } from "react-icons/ri";
import { BiLogOut } from "react-icons/bi";
import { FaChevronLeft } from "react-icons/fa";
import Header from "../layout/Header";
import Footer from "../layout/footer";
import MenuHeader from "../content/MenuHeader";
import { Link, NavLink } from "react-router-dom";
import authvalidation from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
function Myprofile({ children }) {
  //authvalication
  const navigate = useNavigate()
  useEffect(() => {
    const validaion = authvalidation("useracount");
    if (!validaion) {
      navigate("/");
    }
    document.title = "حساب کاربری";
  });
  //inro user 
  const [info, setphone] = useState(() => {
    const phoneuser = JSON.parse(localStorage.getItem("useracount"));
    return phoneuser;
  });
  const [tokenauth, settokenauth] = useState();
  useEffect(() => {
    settokenauth(authvalidation("useracount"));
  }, []);
  return (
    <>
      <div className="p-1">
        <Header />
      </div>
      <MenuHeader />
      <div className="mt-2 w-full md:w-[20%] md:inline-block ">
        <div>
          <div className="font-ycan flex flex-col gap-2  px-2">
            <Link to="/profile">
              <p className="flex items-center gap-2 text-color3 mt-4 ">
                <FaRegUserCircle />
                مشتری گرامی
              </p>
            </Link>
            <p className="text-[0.8rem] ms-5 inline-block md:hidden">
              {info && <span>{info.phone}</span>}
            </p>
          </div>
          <div className=" md:block mt-10 font-ycan text-[#0f253d] text-sm px-4 md:px-0 bg-gray-50 border rounded">
            <ul className="flex flex-col  [&_li]:flex [&_li]:gap-2 relative [&_li_span]:absolute [&_li_span]:inline-block [&_li_span]:md:hidden [&_li_span]:left-3 [&_li_span]:text-[#b0882c] border md:border-0 rounded [&_li]:py-3 [&_li]:px-3 [&_li]:border-b [&_li]:items-center">
              <NavLink to="/my-orders">
                <li>
                  <span>
                    <FaChevronLeft size={"12px"} />
                  </span>
                  <FiBox size={"20px"} />
                  سفارش های من
                </li>
              </NavLink>
              <NavLink to="/myfavorits">
                <li>
                  <span>
                    <FaChevronLeft size={"12px"} />
                  </span>
                  <AiOutlineLike size={"20px"} />
                  کالای های مورد علاقه
                </li>
              </NavLink>
              <NavLink to="/my-comments">
                <li>
                  <span>
                    <FaChevronLeft size={"12px"} />
                  </span>
                  <TiMessages size={"20px"} />
                  نظرات
                </li>
              </NavLink>
              <NavLink to="/my-addresses">
                <li>
                  <span>
                    <FaChevronLeft size={"12px"} />
                  </span>
                  <FiMapPin size={"20px"} />
                  نشانی ها
                </li>
              </NavLink>
              <NavLink to="/notifications">
                <li>
                  <span>
                    <FaChevronLeft size={"12px"} />
                  </span>
                  <BiMessageAlt size={"20px"} />
                  پیام ها
                </li>
              </NavLink>
              <NavLink to="/recently-visited">
                <li>
                  <span>
                    <FaChevronLeft size={"12px"} />
                  </span>
                  <IoEyeOutline size={"20px"} />
                  اخرین کالای دیده شده
                </li>
              </NavLink>
              <NavLink to="/profile">
                <li>
                  <span>
                    <FaChevronLeft size={"12px"} />
                  </span>
                  <RiUserFollowLine size={"20px"} />
                  مشخصات فردی
                </li>
              </NavLink>
              <li onClick={()=>{
                localStorage.removeItem("useracount");
                settokenauth(authvalidation("useracount"))
              }}
              className=" hover:cursor-pointer">
                <span>
                  <FaChevronLeft size={"12px"} />
                </span>
                <BiLogOut size={"20px"} />
                خروج
              </li>
            </ul>
          </div>
        </div>
      </div>
      {children}
      <Footer />
    </>
  );
}

export default Myprofile;
