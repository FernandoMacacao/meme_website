import React from "react";
import ImageSection from "./components/ImageSection";
import InfoSection from "./components/InfoSection";
import Container from "@mui/material/Container";

export const Accommodation = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 10 }}>
      <ImageSection />
      <InfoSection />
    </Container>
  );
};
