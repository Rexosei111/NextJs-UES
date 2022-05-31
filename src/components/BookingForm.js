import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import React, { useContext } from "react";
import { modalContext } from "./Layout";

export default function BookingForm() {
  const { setOpen } = useContext(modalContext);
  return (
    <>
      <DialogTitle>Booking Form</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please fill this form to book this playground
        </DialogContentText>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
          component="form"
          action="#"
          method="POST"
        >
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="outlined"
          />
          <TextField
            autoFocus
            margin="dense"
            id="phone"
            label="Phone Number"
            type="number"
            fullWidth
            variant="outlined"
          />
          <TextField
            autoFocus
            margin="dense"
            id="Description"
            label="Description of your intended activities"
            type="text"
            multiline
            rows={5}
            fullWidth
            variant="outlined"
          />
        </Box>
        <DialogActions>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => setOpen(false)}
          >
            cancel
          </Button>
          <Button variant="contained" color="primary">
            Book
          </Button>
        </DialogActions>
      </DialogContent>
    </>
  );
}
