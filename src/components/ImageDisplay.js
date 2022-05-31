import * as React from "react";
import { Container, Fab, Stack, styled } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from "next/image";

export const CustomFab = styled(Fab)(({ theme }) => ({
  color: "white",
  backgroundColor: "#54b6ab",
  "&:hover": {
    backgroundColor: "#54b6ab80",
  },
}));

const pitchImages = [
  "/images/pitch1.jpeg",
  "/images/pitch5.jpeg",
  "/images/pitch4.jpeg",
  "/images/pitch2.jpg",
];

function ImageDisplay() {
  const scrollStack = React.useRef();

  const scrollLeft = () => {
    scrollStack.current.scrollLeft -= 250;
  };

  const scrollRight = () => {
    scrollStack.current.scrollLeft += 250;
  };
  return (
    <Container
      maxWidth={"lg"}
      sx={{
        height: 300,
        padding: 3,
        position: "relative",
      }}
    >
      <CustomFab
        size="medium"
        onClick={scrollLeft}
        sx={{
          position: "absolute",
          top: "50%",
          left: 3,
          zIndex: 2,
        }}
      >
        <ArrowBackIosIcon fontSize="medium" />
      </CustomFab>
      <Stack
        ref={scrollStack}
        direction="row"
        // overflow="hidden"
        columnGap={2}
        sx={{
          "& > span": {
            borderRadius: 5,
          },
        }}
      >
        {pitchImages.map((image, index) => (
          <Image
            src={image}
            height={300}
            width={400}
            alt=""
            objectFit="cover"
            key={index}
            layout={"fixed"}
          />
        ))}
      </Stack>
      <CustomFab
        size="medium"
        onClick={scrollRight}
        sx={{
          position: "absolute",
          top: "50%",
          right: 3,
          zIndex: 2,
        }}
      >
        <ArrowForwardIosIcon fontSize="medium" />
      </CustomFab>
    </Container>
  );
}

export default ImageDisplay;
