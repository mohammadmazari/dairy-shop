import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { IoIosCloseCircleOutline } from "react-icons/io";
import img from "../../../public/image/static_sendingProduct.webp";
export default function Modalexpress2({ name }) {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button style={{ fontFamily: "ycan" }} onClick={handleClickOpen}>
        {name}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className="w-full sm:w-[550] p-2 text-sm sm:text-md font-ycan ">
          <div>
          <div className="flex justify-between">
            <p>اطلاعات ارسال محصول</p>
            <button onClick={handleClose}>
              <IoIosCloseCircleOutline size={"25px"} />
            </button>
          </div>
            <p className="text-[0.5rem] sm:text-sm px-2 sm:px-10 py-10 font-extralight">
              شما می‌توانید علاوه بر اینکه سفارش‌های خود را در محل موردنظرتان
              تحویل بگیرید، این امکان فراهم است که سفارش‌تان را در یکی از 5 شعب
              دیری شاپ در شهر تهران دریافت فرمایید. لازم بذکر است که محصولات
              بزرگ و سنگین امکان تحویل در شعب را ندارند. همچنین لوازم خانگی کوچک
              برای مثال: ( پلو پز، قهوه ساز، آبمیوه ‌گیری ) را صرفا می‌توان در
              دو شعبه بازار موبایل ایران شماره ۱ و ۲ تحویل گرفت. کارشناسان ما در
              تمام شعب دیری شاپ آماده پاسخگویی و راهنمایی به شما برای خرید
              هستند.
            </p>
          </div>
        </div>
      </Dialog>
    </React.Fragment>
  );
}
