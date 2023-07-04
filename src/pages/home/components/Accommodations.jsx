import {
  Box,
  Container,
  Typography,
  Button,
  useMediaQuery,
} from "@mui/material";
import { LanguageContext } from "configuration/app-context-manager/LanguageContext";
import React, { useContext } from "react";
import { LinkWithScroll } from "common/components/LinkWithScroll";

export const Accommodations = ({ data }) => {
  const { language } = useContext(LanguageContext);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <Box
      my={10}
      width="100vw"
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      alignItems="center"
      justifyContent="center"
    >
      {data.map((d, id) => (
        <Box
          key={id}
          sx={{
            backgroundImage: `url(${require(`assets/images/${d.image}`)})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            maxWidth: "100vw",
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
                {d.title}
              </Typography>
              <Typography
                variant="body1"
                color="secondary"
                my={4}
                textAlign="center"
              >
                {d.text}
              </Typography>
              <LinkWithScroll to={d.link} style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth={isMobile}
                >
                  {language === "pt" ? "Saiba Mais" : "See More"}
                </Button>
              </LinkWithScroll>
            </Container>
          </Box>
        </Box>
      ))}
    </Box>
  );
};
