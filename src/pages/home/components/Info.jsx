import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

export const Info = ({ title, text, imageFirst }) => {
  return (
    <Box my={10}>
      <Grid
        display="grid"
        alignItems="center"
        container
        columnSpacing={5}
        gridTemplateColumns={{
          xs: "1fr",
          md: imageFirst ? "1.2fr 1fr" : "1fr 1.2fr",
        }}
        gridTemplateAreas={
          imageFirst
            ? { xs: '"col1" "col2"', md: '"col1 col2"' }
            : { xs: '"col1" "col2"', md: '"col2 col1"' }
        }
      >
        {/* IMAGE */}
        <Grid item gridArea="col1" mb={{ xs: 2 }}>
          <Box
            display="flex"
            sx={{
              justifyContent: {
                xs: "center",
                md: imageFirst ? "left" : "right",
              },
            }}
          >
            <img
              src={require("assets/images/region.png")}
              alt={title}
              style={{ maxHeight: "400px" }}
            />
          </Box>
        </Grid>
        {/* IMAGE */}
        <Grid item gridArea="col2">
          <Container maxWidth="xs">
            <Box
              border="0.5px solid var(--clr-primary)"
              width="100%"
              height="450px"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              maxHeight="500px"
            >
              <Container maxWidth="md">
                <Typography variant="h6" color="primary">
                  {title}
                </Typography>
                <Typography variant="body1" color="common.black" mt={5}>
                  {text}
                </Typography>
              </Container>
            </Box>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
};
