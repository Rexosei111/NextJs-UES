import Head from "next/head";
import { Backdrop, Box, Typography } from "@mui/material";
import Link from "../src/Link";
import HeroSection from "../src/components/HeroSection";
import PitchDetails from "../src/components/PitchDetails";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
      <PitchDetails />
    </>
  );
}
