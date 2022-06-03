// import * as React from "react";
// import { Container, Fab, Stack, styled } from "@mui/material";
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import Image from "next/image";

// export const CustomFab = styled(Fab)(({ theme }) => ({
//   color: "white",
//   backgroundColor: "#54b6ab",
//   "&:hover": {
//     backgroundColor: "#54b6ab80",
//   },
// }));

// const pitchImages = [
//   "/images/pitch1.jpeg",
//   "/images/pitch5.jpeg",
//   "/images/pitch4.jpeg",
//   "/images/pitch2.jpg",
// ];

// function ImageDisplay() {
//   const scrollStack = React.useRef();

//   const scrollLeft = () => {
//     scrollStack.current.scrollLeft -= 250;
//   };

//   const scrollRight = () => {
//     scrollStack.current.scrollLeft += 250;
//   };
//   return (
//     <Container
//       maxWidth={"lg"}
//       sx={{
//         height: 300,
//         padding: 3,
//         position: "relative",
//       }}
//     >
//       <CustomFab
//         size="medium"
//         onClick={scrollLeft}
//         sx={{
//           position: "absolute",
//           top: "50%",
//           left: 3,
//           zIndex: 2,
//         }}
//       >
//         <ArrowBackIosIcon fontSize="medium" />
//       </CustomFab>
//       <Stack
//         ref={scrollStack}
//         direction="row"
//         // overflow="hidden"
//         columnGap={2}
//         sx={{
//           "& > span": {
//             borderRadius: 5,
//           },
//         }}
//       >
//         {pitchImages.map((image, index) => (
//           <Image
//             src={image}
//             height={300}
//             width={400}
//             alt=""
//             objectFit="cover"
//             key={index}
//             layout={"fixed"}
//           />
//         ))}
//       </Stack>
//       <CustomFab
//         size="medium"
//         onClick={scrollRight}
//         sx={{
//           position: "absolute",
//           top: "50%",
//           right: 3,
//           zIndex: 2,
//         }}
//       >
//         <ArrowForwardIosIcon fontSize="medium" />
//       </CustomFab>
//     </Container>
//   );
// }

// export default ImageDisplay;

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import sliderStyles from "../styles/slider.module.css";

// import required modules
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper";
import Image from "next/image";

const pitchImages = [
  "/images/pitch1.jpeg",
  "/images/pitch5.jpeg",
  "/images/pitch4.jpeg",
  "/images/pitch2.jpg",
];
export default function ImageDisplay() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        centeredSlides={true}
        freeMode={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        }}
        modules={[Autoplay, FreeMode, Pagination, Navigation]}
        className={sliderStyles.swiper}
      >
        {pitchImages.map((image, index) => (
          <SwiperSlide key={index} className={sliderStyles.mySlider}>
            {({ isActive }) => (
              <Image
                src={image}
                height={300}
                width={500}
                alt=""
                objectFit="cover"
                layout={"responsive"}
                style={{ opacity: !isActive ? 0.3 : 1 }}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
