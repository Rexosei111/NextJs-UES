import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

export default function Footer() {
  return (
    <Container
      sx={{
        height: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.paper",
      }}
      maxWidth="xl"
    >
      <Typography variant="h3" color={(theme) => theme.palette.text.secondary}>
        Footer
      </Typography>
    </Container>
  );
}
