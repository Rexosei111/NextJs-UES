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
      disableGutters
      sx={{
        height: "calc(100vh - 64px - 50px)",
        width: "100%",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, .6)",
        }}
      ></Box>
      <video
        autoPlay
        muted
        loop
        style={{ height: "100%", width: "100%", objectFit: "cover" }}
      >
        <source src="/images/videoplayback.mp4" type="video/mp4" />
      </video>
      <Container
        maxWidth="md"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          widht: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box>
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
        </Box>
      </Container>
    </Container>
  );
}
