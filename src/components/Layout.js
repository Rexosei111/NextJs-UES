import { Backdrop, Container, Dialog } from "@mui/material";
import { Box } from "@mui/system";
import React, { createContext, useState } from "react";
import BackDrop from "./BackDrop";
import Footer from "./Footer";
import TopNav from "./TopNav";

export const modalContext = createContext();
export default function Layout({ children }) {
  const [open, setOpen] = useState(false);
  const [backdropComponent, setBackdropComponent] = useState(null);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <modalContext.Provider
        value={{ open, setOpen, backdropComponent, setBackdropComponent }}
      >
        <BackDrop />
        <TopNav />

        <Container maxWidth="xl" disableGutters sx={{ flexGrow: 1 }}>
          {children}
        </Container>
      </modalContext.Provider>
      <Footer />
    </Box>
  );
}
