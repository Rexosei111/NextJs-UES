import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Footer from "./Footer";
import TopNav from "./TopNav";

export default function Layout({ children }) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <TopNav />
      <Container maxWidth="xl" disableGutters sx={{ flexGrow: 1 }}>
        {children}
      </Container>
      <Footer />
    </Box>
  );
}
