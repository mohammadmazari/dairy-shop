import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { useState } from "react";
import Slide from "@mui/material/Slide";
import { BsPatchCheck } from "react-icons/bs";
import { IoIosCloseCircleOutline } from "react-icons/io";

import { useNavigate } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { Cart } from "../../App";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Modaladcart({id}) {
  const [isshow, setisshow] = useState(false);
  const [open, setOpen] = React.useState(false);
  const {cart,setcart } = React.useContext(Cart);
  const handleClickOpen = () => {
    setOpen(true);
    setisshow(true);
    const newcart = [...cart , id]
    setcart([...new Set(newcart)])
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      {!isshow ? (
        <Button
          style={{
            fontFamily: "ycan",
            width: "100%",
            color: "white",
            padding: "0.5rem",
            fontSize: "15px",
            fontWeight: "extrabold",
            backgroundColor: "#2ca528",
            display: "flex",
            gap: "10px",
            alignItems: "center",
          }}
          onClick={handleClickOpen}
        >
          افزودن به سبد خرید
          <HiOutlineShoppingCart size={"20px"} />
        </Button>
      ) : (
        <Button
          style={{
            fontFamily: "ycan",
            width: "100%",
            color:"#2ca528",
            fontWeight:'bold',
            padding: "0.5rem",
            fontSize: "15px",
            fontWeight: "extrabold",
            border: "2px solid #2ca528",
            display: "flex",
            gap: "10px",
            alignItems: "center",
            borderRadius:"10px"
          }}
          // onClick={handleClickOpen}
        >
         مشاهده سبد خرید
          <HiOutlineShoppingCart size={"20px"} />
        </Button>
      )}

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        style={{
          padding: "20px",
        }}
      >
        <DialogContent>
          <div
            style={{
              fontFamily: "ycan",
              display: "flex",
              gap: "100px",
              flexDirection: "row-reverse",
              color: "green",
              paddingBottom: "15px",
              borderBottom: "1px solid #c7c2c3",
            }}
          >
            <span
              style={{ fontSize: "14px", cursor: "pointer" }}
              onClick={handleClose}
            >
              <IoIosCloseCircleOutline
                style={{ fontSize: "24px", color: "gray" }}
              />
            </span>
            کالا به سبد خرید شما افزوده شد
          </div>
        </DialogContent>
        <DialogActions>
          <div style={{ width: "100%", textAlign: "right", padding: "20px" }}>
            <button
              onClick={() => {
                handleClose();
              }}
              style={{
                borderRadius: "20px",
                border: "2px solid green",
                width: "100%",
                textAlign: "center",
                padding: "10px 10px ",

                fontSize: "14px",
                borderRadius: "10px",
              }}
            >
              مشاهده سبد خرید
            </button>
          </div>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
