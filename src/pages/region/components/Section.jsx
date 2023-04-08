import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { LinkWithScroll } from "common/components/LinkWithScroll";
import React from "react";

const Section = ({ data }) => {
  const isFullWidth = useMediaQuery((theme) => theme.breakpoints.down("md"));
  return (
    <Box mt={5} display="flex" width="100vw" sx={{ overflowX: "hidden" }}>
      <Container maxWidth="lg">
        <Grid
          display="grid"
          container
          columnSpacing={5}
          gridTemplateColumns={{
            xs: "1fr",
            md: data.imageFirst ? "1fr 1fr" : "1fr 1fr",
          }}
          gridTemplateAreas={
            data.imageFirst
              ? { xs: '"col1" "col2"', md: '"col1 col2"' }
              : { xs: '"col1" "col2"', md: '"col2 col1"' }
          }
        >
          <Grid item gridArea="col1">
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
                src={require(`../../../assets/images/${data.image}`)}
                alt={data.title}
                width="100%"
              />
            </Box>
          </Grid>
          <Grid item gridArea="col2" mt={{ xs: 5, md: 0 }}>
            <Box
              display="flex"
              flexDirection="column"
              height="100%"
              justifyContent="center"
            >
              <Typography
                variant="h6"
                color="primary"
                sx={{
                  textAlign: { xs: "center", md: "left" },
                  mb: 3,
                }}
              >
                {data.title}
              </Typography>
              <Typography
                variant="body1"
                color={"common.black"}
                sx={{ textAlign: { xs: "center", md: "left" } }}
                mb={{ xs: 3, md: 6 }}
              >
                {data.text}
              </Typography>
              <LinkWithScroll to={data.link} style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth={isFullWidth}
                >
                  Ver no mapa
                </Button>
              </LinkWithScroll>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Section;
