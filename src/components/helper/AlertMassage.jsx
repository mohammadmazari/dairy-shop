import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { IoIosCloseCircleOutline } from "react-icons/io";

export default function AlertMassage({ children }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <div variant="outlined" onClick={handleClickOpen}>
        {children[0]}
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogActions>
          <div className="flex justify-between px-0 md:px-1 w-full">
          <p className="font-ycan text-gray-500 font-extrabold">{children[2]}</p>
            <button className="py-2 " onClick={handleClose}>
              <IoIosCloseCircleOutline size="20px" />
            </button>
        
          </div>
   
        </DialogActions>
        <DialogActions>
        <div>{children[1]}</div>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
