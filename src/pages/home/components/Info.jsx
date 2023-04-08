import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

export const Info = ({ data }) => {
  return (
    <Box my={10}>
      <Grid
        display="grid"
        alignItems="center"
        container
        columnSpacing={5}
        gridTemplateColumns={{
          xs: "1fr",
          md: data.imageFirst ? "1.2fr 1fr" : "1fr 1.2fr",
        }}
        gridTemplateAreas={
          data.imageFirst
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
                md: data.imageFirst ? "left" : "right",
              },
            }}
          >
            <img
              src={require("assets/images/region.png")}
              alt={data.title}
              style={{ maxHeight: "400px" }}
            />
          </Box>
        </Grid>
        {/* TEXT */}
        <Grid item gridArea="col2">
          <Container maxWidth="xl">
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
                  {data.title}
                </Typography>
                <Typography variant="body1" color="common.black" mt={5}>
                  {data.text}
                </Typography>
              </Container>
            </Box>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
};
