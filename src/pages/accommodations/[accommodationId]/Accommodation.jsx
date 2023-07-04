import React from "react";
import ImageSection from "./components/ImageSection";
import InfoSection from "./components/InfoSection";
import Container from "@mui/material/Container";
import Data from "../data/index.json";

export const Accommodation = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 10 }}>
      <ImageSection />
      <InfoSection data={Data} />
    </Container>
  );
};
