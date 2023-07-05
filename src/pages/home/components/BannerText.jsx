import { Typography, Button, Stack, useMediaQuery } from "@mui/material";
import React, { useContext } from "react";
import { LanguageContext } from "configuration/app-context-manager/LanguageContext";

const BannerText = ({ data }) => {
  const { language } = useContext(LanguageContext);
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
        {data.title}
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
        {data.text}
      </Typography>
      <Button
        // quando poderes mete este botão a ir para baixo
        variant="contained"
        size={isMobile ? "small" : "large"}
      >
        {language === "pt" ? "Ver Mais!" : "See More!"}
      </Button>
    </Stack>
  );
};

export default BannerText;
