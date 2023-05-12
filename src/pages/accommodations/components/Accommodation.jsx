import { Box, Button, Container, Typography } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LinkWithScroll } from "common/components/LinkWithScroll";
import { LanguageContext } from "configuration/app-context-manager/LanguageContext";

const Accommodation = ({ data }) => {
  const { language } = useContext(LanguageContext);
  return (
    <LinkWithScroll to={`/${language}/accommodations/${data.link}`}>
      <Box
        sx={{
          position: "relative",
          textAlign: "center",
          width: "100vw",
          maxHeight: "400px",
          overflow: "hidden",
          marginBottom: 2,
          "&:hover img": {
            transform: "scale(1.05)",
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
            <Typography variant="h6" color="secondary" mb={{ xs: 1, md: 2 }}>
              {data.name}
            </Typography>
            <Typography variant="body1" color="secondary" mb={{ xs: 2, md: 3 }}>
              {data.description}
            </Typography>
            <Link to={data.buttonLink} style={{ textDecoration: "none" }}>
              <Button variant="contained" color="primary">
                {language === "pt" ? "Reserve Online!" : "Book Online!"}
              </Button>
            </Link>
          </Container>
        </Box>
      </Box>
    </LinkWithScroll>
  );
};

export default Accommodation;
