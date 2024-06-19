import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { IoIosCloseCircleOutline } from "react-icons/io";
import img from "../../../public/image/static_sendingProduct.webp";
export default function Modalexpress({ name }) {
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
          <div className="flex justify-between">
            <p>اطلاعات ارسال محصول</p>
            <button onClick={handleClose}>
              <IoIosCloseCircleOutline size={"25px"} />
            </button>
          </div>
          <div className="px-2 sm:px-10 text-justify">
            <div>
              <img src={img} className="w-[100%] h-[80px] sm:h-[150px]" alt="" />
              <p className="text-[0.5rem] sm:text-sm mt-3 font-extralight">
                همراهان عزیز دیری شاپ تمام تلاشمان این است که بتوانیم سفارشات
                شما را در سریع‌ترین زمان به دست‌تان برسانیم. به‌همین منظور در
                دیری شاپ چند روش برای ارسال سفارش‌ها در نظر گرفته‌ایم که شما می
                توانید با توجه به موقعیت مکانی خود، یکی از این روش‌‌ها را حین
                ثبت سفارش انتخاب نمایید.
              </p>
              <ul className="text-[0.5rem] sm:text-sm list-disc  font-medium px-4 mt-4">
                <li>ارسال سریع دیری شاپ (برای مناطق 22 گانه شهر تهران)</li>
                <li>ارسال عادی دیری شاپ (برای مناطق 22 گانه شهر تهران)</li>
                <li>پست پیشتاز (برای سراسر کشور)</li>
                <li>ماهکس (برای شهرهای تحت پوشش ماهکس)</li>
                <li>باربری</li>
              </ul>
              <p className="text-[0.5rem] sm:text-sm   mt-3 font-light">
                <span className="w-full font-medium block py-2">ارسال سریع دیری شاپ (برای مناطق 22 گانه شهر تهران)</span>
                <span>سرویس ارسال عادی دیری شاپ شامل مشتریان تهران و مناطق ۲۲گانه است. با انتخاب این روش شما سفارش خود را تا ۲۴ ساعت بعد از ثبت، دریافت خواهید کرد. این وضعیت ممکن است در روزهای تعطیل دستخوش تغییرات شود.همچنین ممکن است در برخی از روزهای تعطیل، امکان ارسال سفارشات ثبت شده در همان روز میسر نباشد.</span>
              </p>
              <p className="text-[0.5rem] sm:text-sm  mt-3 font-light">
                <span className="w-full font-medium  text-md block py-2">ارسال عادی دیری شاپ (برای مناطق 22 گانه شهر تهران)</span>
                <span>سرویس ارسال عادی دیری شاپ شامل مشتریان تهران و مناطق ۲۲گانه است. با انتخاب این روش شما سفارش خود را تا ۲۴ ساعت بعد از ثبت، دریافت خواهید کرد. این وضعیت ممکن است در روزهای تعطیل دستخوش تغییرات شود.همچنین ممکن است در برخی از روزهای تعطیل، امکان ارسال سفارشات ثبت شده در همان روز میسر نباشد.</span>
              </p>
              <p className="text-[0.5rem] sm:text-sm  mt-3 font-light">
                <span className="w-full font-medium  text-md block py-2">ارسال توسط پست پیشتاز (برای سراسر کشور)</span>
                <span>در روزهای کاری، چنانچه تا ساعت 13:30 (پنج‌شنبه‌ها تا ساعت 11:00) سفارش خود را نهایی کنید، سفارش شما همان روز تحویل مرکز پست خواهد شد. همچنین در هنگام ثبت سفارش می‌توانید زمان و ساعتی که سفارش شما تحویل شرکت پست می‌شود را مشاهده فرمایید. کد پیگیری مرسوله در قسمت جزئیات سفارش در حساب کاربری شما درج می‌شود. همچنین کد پیگیری مرسوله از طریق پیامک نیز به دست شما خواهد رسید. با استفاده از کد پیگیری پست پیشتاز می‌توانید وضعیت مرسوله خود را از سامانه رهگیری مرسولات پستی پیگیری نمایید.</span>
              </p>
              <p className="text-[0.5rem] sm:text-sm  mt-3 font-light">
                <span className="w-full font-medium  text-md block py-2">ماهکس (برای سراسر کشور)</span>
                <span>ماهکس یک سرویس حمل سریع در کشور است که در ۵۵۰ شهر ایران دارای نمایندگی بوده و با توجه به ارسال مستقیم به اکثر این شهرها روشی سریع جهت ارسال مرسوله به حساب می‌آید. در روزهای کاری، چنانچه تا ساعت 16:30 ( پنج شنبه ها تا ساعت ۱3:۰۰) سفارش خود را نهایی کنید، سفارش شما همان روز تحویل ماهکس خواهد شد. همچنین در هنگام ثبت سفارش می‌توانید زمان و ساعتی که سفارش شما تحویل شرکت ماهکس می‌شود را مشاهده فرمایید. کد پیگیری مرسوله در قسمت جزئیات سفارش در حساب کاربری شما درج می‌شود. همچنین کد پیگیری مرسوله از طریق پیامک نیز به دست شما خواهد رسید. با استفاده از کد پیگیری ماهکس می‌توانید وضعیت مرسوله خود را از سامانه رهگیری ماهکس پیگیری نمایید. </span>
              </p>
              <p className="text-[0.5rem] sm:text-sm  mt-3 font-light">
                <span className="w-full font-medium  text-md block py-2">ارسال با باربری</span>
                <span>ماهکس یک سرویس حمل سریع در کشور است که در ۵۵۰ شهر ایران دارای نمایندگی بوده و با توجه به ارسال مستقیم به اکثر این شهرها روشی سریع جهت ارسال مرسوله به حساب می‌آید. در روزهای کاری، چنانچه تا ساعت 1ارسال با باربری یکی دیگر از روش‌های ارسال است که شامل کالاهای بزرگ و حجیم می‌شود. برای مثال می‌توانید برای کالاهایی مثل یخچال با ابعاد بالاتر از ۷ فوت و تلویزیون‌های با ابعاد بالاتر از ۶۵ اینچ از روش ارسال باربری استفاده کنید. پس از تحویل سفارش شما به باربری، هماهنگی‌های لازم جهت تحویل کالا در شهر مقصد با شما انجام خواهد شد.</span>
              </p>
            </div>
          </div>
        </div>
      </Dialog>
    </React.Fragment>
  );
}
