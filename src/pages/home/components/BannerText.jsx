import { Typography, Button, Stack } from "@mui/material";
import React from "react";

const BannerText = () => {
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
        variant="h1"
        sx={{
          fontSize: { xs: "20px", sm: "28px", md: "36px", lg: "48px" },
        }}
        style={{
          margin: "auto",
          color: "white",
        }}
      >
        BannerText
      </Typography>
      <Typography
        variant="h4"
        sx={{
          fontSize: { xs: "20px", sm: "28px", md: "36px", lg: "48px" },
        }}
        style={{
          margin: "auto",
          color: "white",
        }}
      >
        Teste
      </Typography>
      <Button
        variant="outlined"
        size="large"
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "block",
            lg: "block",
            xl: "block",
          },
        }}
      >
        Ver Mais
      </Button>
      <Button
        variant="outlined"
        size="small"
        sx={{
          display: {
            xs: "block",
            sm: "block",
            md: "none",
            lg: "none",
            xl: "none",
          },
        }}
      >
        Ver Mais
      </Button>
    </Stack>
  );
};

export default BannerText;
