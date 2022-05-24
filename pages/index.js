import Head from "next/head";
import { Box, Typography } from "@mui/material";
import Link from "../src/Link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        component="main"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h2" textAlign={"center"}>
          Welcome to <Link href="about">Next.js!</Link> integrated with{" "}
          <Link href="contact">Material-UI!</Link>
        </Typography>
      </Box>
    </>
  );
}
