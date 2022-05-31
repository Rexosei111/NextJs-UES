import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useContext } from "react";
import heroImage from "../../public/images/touch.jpeg";
import { modalContext } from "./Layout";

export default function HeroSection() {
  const { setOpen, setBackdropComponent } = useContext(modalContext);
  return (
    <Container
      maxWidth="xl"
      sx={{
        height: "calc(100vh - 64px - 50px)",
        backgroundColor: "rgba(0,0,0,0.4)",
        backgroundImage: "url('/images/ball2.jpg')",
        backgroundPosition: "center bottom",
        backgroundBlendMode: "overlay",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h2" color="text.secondary">
          Welcome,
        </Typography>
        <Typography color="text.primary" variant="h4">
          To UMaT Ethihad Sports PlayGround
          <span role="img" aria-label="ball" style={{ fontSize: "30px" }}>
            ⚽
          </span>
        </Typography>
        <Typography variant="h6" color={"text.secondary"}>
          Book our playground for your sporting activities
        </Typography>
        <ButtonGroup variant="contained" sx={{ mt: 2 }}>
          <Button
            sx={{ color: "white" }}
            onClick={() => {
              setBackdropComponent("form");
              setOpen(true);
            }}
          >
            Book Now
          </Button>
          <Button variant="outlined" color="secondary" sx={{ ml: 2 }}>
            Terms and Conditions
          </Button>
        </ButtonGroup>
      </Container>
    </Container>
  );
}
