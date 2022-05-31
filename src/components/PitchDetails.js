import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import ShareLocationIcon from "@mui/icons-material/ShareLocation";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import BathroomOutlinedIcon from "@mui/icons-material/BathroomOutlined";
import ImageDisplay from "./ImageDisplay";
import { modalContext } from "./Layout";
import { BookingForm } from "./BookingForm";

const details = [
  {
    name: "Size",
    value: "150 x 72 (metres)",
    icon: <FitScreenIcon fontSize="small" htmlColor="#54b6ab" />,
  },
  {
    name: "Location",
    value: "Tarkwa - Esiama Rd, Tarkwa",
    icon: <ShareLocationIcon fontSize="small" htmlColor="#54b6ab" />,
  },
  {
    name: "Flood Lights",
    value: "Yes",
    icon: <LightbulbOutlinedIcon fontSize="small" htmlColor="#54b6ab" />,
  },
  {
    name: "Dressing Rooms",
    value: "No",
    icon: <BathroomOutlinedIcon fontSize="small" htmlColor="#54b6ab" />,
  },
];

function PitchDetails() {
  const { setOpen, setBackdropComponent } = useContext(modalContext);
  const handleToggle = () => {
    setBackdropComponent("form");
    setOpen(true);
  };
  return (
    <>
      <Container
        sx={{
          pt: 5,
          pb: 5,
        }}
      >
        <Grid container columnSpacing={3} rowSpacing={3}>
          <Grid
            container
            item
            rowSpacing={3}
            xs={12}
            lg={6}
            xl={6}
            columnSpacing={2}
          >
            <Grid item xs={12}>
              <Typography variant="h4">Details of Pitch</Typography>
            </Grid>
            {details.map((detail, index) => (
              <Grid item xs="auto" key={index}>
                <Stack spacing={2} direction="row">
                  {detail.icon}
                  <Typography variant="body2" noWrap>
                    {detail.name} : {detail.value}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
          <Grid item xs={12} lg={6}>
            <Card sx={{ maxWidth: 275 }}>
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <Typography
                  variant="h6"
                  color="#54b6ab"
                  sx={{ textTransform: "uppercase" }}
                >
                  Rate -{" "}
                  <Typography variant="body1" color="white" component="span">
                    per hour
                  </Typography>
                </Typography>
                <Typography variant="h4">
                  <Typography component="sup" variant="caption">
                    GH
                  </Typography>{" "}
                  30.00
                </Typography>
                <Button
                  variant="contained"
                  fullWidth
                  color="primary"
                  sx={{ color: "white" }}
                  onClick={handleToggle}
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <ImageDisplay />
          </Grid>
        </Grid>
      </Container>
      {/* <ImageDisplay /> */}
    </>
  );
}

export default PitchDetails;
