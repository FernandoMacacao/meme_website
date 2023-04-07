import { Box, Container, Typography } from "@mui/material";
import { SectionHeader } from "common/components/SectionHeader";
import React from "react";

export const Details = () => {
  return (
    <Box my={10}>
      <SectionHeader
        title="Lorem Ipsum"
        subtitle="Nam ut ligula tortor. Aenean gravida orci sapien."
      />
      <Container maxWidth="md">
        <Typography variant="body1" color="textPrimary" textAlign="center">
          Etiam sed leo magna. In efficitur egestas purus a cursus. Donec in
          lorem neque. Aenean rhoncus ultrices enim nec accumsan. Integer
          imperdiet cursus dictum. Mauris porta leo et tincidunt posuere. Nulla
          tortor dolor, dignissim non consectetur a, vehicula a diam. Aliquam
          cursus orci in elit ultricies, in bibendum dolor consectetur. Integer
          pharetra enim dolor, sit amet volutpat metus laoreet eu.
        </Typography>
        <Typography
          variant="body1"
          color="textPrimary"
          textAlign="center"
          mt={3}
        >
          Quisque ac metus id purus volutpat auctor. Pellentesque diam magna,
          efficitur vitae nisi a, egestas sagittis velit. Suspendisse potenti.
          Phasellus nec massa auctor, accumsan odio ac, faucibus ex. Vestibulum
          consectetur sapien libero, sed volutpat dolor congue id. Nunc quis dui
          imperdiet turpis iaculis mattis ac nec enim. Aenean eleifend rutrum
          tellus at feugiat.
        </Typography>
      </Container>
    </Box>
  );
};
