import { Dialog, Slide } from "@mui/material";
import React, { useContext } from "react";
import { modalContext } from "./Layout";
import BookingForm from "./BookingForm";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function MyDialog() {
  const { open, setOpen, backdropComponent } = useContext(modalContext);
  return (
    <Dialog
      open={open}
      onClose={() => {
        setOpen(false);
      }}
      TransitionComponent={Transition}
    >
      <BookingForm />
    </Dialog>
  );
}
