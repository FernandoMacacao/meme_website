import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { LinkWithScroll } from "common/components/LinkWithScroll";
import React from "react";

function AccommodationImage({ data }) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        backgroundImage: `url(${require(`assets/images/${data.image}`)})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minWidth: "50vw",
        minHeight: "50vh",
      }}
    >
      <Box
        minHeight="50vh"
        maxWidth="100vw"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h6" color="secondary" textAlign="center">
            {data.title}
          </Typography>
          <Typography
            variant="body1"
            color="secondary"
            my={4}
            textAlign="center"
          >
            {data.text}
          </Typography>
          <LinkWithScroll to={data.link} style={{ textDecoration: "none" }}>
            <Button variant="contained" color="primary" fullWidth={isMobile}>
              Saiba Mais!
            </Button>
          </LinkWithScroll>
        </Container>
      </Box>
    </Box>
  );
}

export default AccommodationImage;
