import { Box, Container, Typography } from "@mui/material";
import React from "react";

export const Banner = ({ hasImage }) => {
  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          maxWidth: "100vw",
          minHeight: "200px",
          background: "var(--clr-primary)",
        }}
        mt={!hasImage ? -0.5 : undefined}
      >
        {hasImage ? (
          <img src="" alt="" />
        ) : (
          <Box display="flex" alignItems="center" minHeight="200px">
            <Container maxWidth="md">
              <Typography variant="h6" color="secondary" mb={2}>
                Praesent dolor arcu
              </Typography>
              <Typography variant="body1" color="secondary">
                Fusce ultrices tortor sed lacus porttitor dignissim. Phasellus
                tincidunt posuere fringilla. Pellentesque habitant morbi
                tristique senectus et netus et malesuada fames ac turpis
                egestas. Praesent dolor arcu, semper accumsan mi ac, malesuada
                semper nulla. Morbi eget mollis leo.
              </Typography>
            </Container>
          </Box>
        )}
      </Box>
    </>
  );
};
