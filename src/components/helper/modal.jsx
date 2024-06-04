import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TbBackground } from "react-icons/tb";
import { PiHandWaving } from "react-icons/pi";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({ userinfo }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    const getlocal = localStorage.getItem("useracount");
    if (getlocal) {
  
      return;
    } else {
      const user = JSON.stringify(userinfo);
      localStorage.setItem("useracount", user);
    }
  };

  return (
    <React.Fragment>
      <Button
        style={{
          fontFamily: "ycan",
          width: "100%",
          color: "white",
          padding: "0.5rem",
          fontSize: "17px",
          backgroundColor: "#60a5fa",
        }}
        onClick={handleClickOpen}
      >
        ثبت نام
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <div style={{ fontFamily: "ycan" , display:'flex' , gap:'5px' , flexDirection:"row-reverse"}}>
            <sapn style={{fontSize:'14px'}}>
              <PiHandWaving style={{fontSize:"24px"}}/>
            </sapn>{" "}
            ثبت نام شما با موفقیت انجام شد
          </div>
        </DialogContent>
        <DialogActions>
          <div style={{ width: "100%", textAlign: "right" }}>
            <button
              onClick={handleClose}
              style={{
                backgroundColor: "#ff3557",
                padding: "10px 10px ",
                color: "white",
                fontSize: "14px",
                borderRadius:'10px'
              }}
            >
              بازکشت
            </button>
          </div>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
