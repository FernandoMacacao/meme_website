import { Box, Button, Container, Typography } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "configuration/app-context-manager/LanguageContext";
import { useNavigate } from "react-router-dom";

const BannerContent = ({ data }) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`${data.buttonLink}`);
  };
  const { language } = useContext(LanguageContext);
  return (
    <Box
      sx={{
        position: "relative",
        textAlign: "center",
        width: "100vw",
        maxHeight: "400px",
        overflow: "hidden",
        marginBottom: 2,
        "&:hover img": {
          transform: data.available === "True" ? "scale(1.05)" : "none",
        },
        "&::after": {
          content: "''",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "common.black",
          opacity: 0,
          transition: "opacity 0.5s",
        },
        "&:hover::after": {
          opacity: 0.2,
        },
      }}
    >
      <img
        alt={data.name}
        src={`${require(`assets/images/${data.image}`)}`}
        style={{
          width: "100vw",
          maxHeight: "400px",
          objectFit: "cover",
          display: "block",
          transition: "transform 0.5s",
          filter: "brightness(70%)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          zIndex: 1000,
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h6"
            color="secondary"
            mb={{ xs: 1, md: 2 }}
            sx={{ textShadow: "0px 0px 3px var(--common-black)" }}
          >
            {data.name}
          </Typography>
          <Typography
            variant="body1"
            color="secondary"
            mb={{ xs: 2, md: 3 }}
            sx={{ textShadow: "0px 0px 2px var(--common-black)" }}
          >
            {data.description}
          </Typography>
          {data.available === "True" ? (
            <Button variant="contained" color="primary" onClick={onClick}>
              {language === "pt" ? "Reserve Online!" : "Book Online!"}
            </Button>
          ) : (
            <Button color="primary" variant="contained" disabled>
              {language === "pt" ? "Indisponível" : "Unavailable"}
            </Button>
          )}
        </Container>
      </Box>
    </Box>
  );
};

export default BannerContent;