import { Typography, Button, Stack, useMediaQuery } from "@mui/material";
import React from "react";

const BannerText = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <Stack
      sx={{
        top: {
          xs: "125px",
          sm: "175px",
          md: "250px",
          lg: "300px",
          xl: "350px",
        },
      }}
      spacing={2}
      style={{
        position: "absolute",
        left: "50dvw",
        transform: "translate(-50%, 0)",
        zIndex: 1,
        alignItems: "center",
      }}
    >
      <Typography
        variant={isMobile ? "h4" : "h2"}
        sx={{
          textShadow: "0px 0px 3px var(--common-black)",
        }}
        style={{
          margin: "auto",
          color: "white",
        }}
      >
        BannerText
      </Typography>
      <Typography
        variant="h5"
        sx={{
          textShadow: "0px 0px 3px var(--common-black)",
          fontWeight: 400,
        }}
        style={{
          margin: "auto",
          color: "white",
        }}
      >
        Teste
      </Typography>
      <Button variant="contained" size={isMobile ? "small" : "large"}>
        Ver Mais
      </Button>
    </Stack>
  );
};

export default BannerText;
