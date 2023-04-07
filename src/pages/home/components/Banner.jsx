import { Box, Container, Typography } from "@mui/material";
import { LinkWithScroll } from "common/components/LinkWithScroll";
import { LanguageContext } from "configuration/app-context-manager/LanguageContext";
import React, { useContext } from "react";

export const Banner = ({ hasImage, image }) => {
  const { language } = useContext(LanguageContext);

  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          maxWidth: "100vw",
          minHeight: "200px",
          background: "var(--clr-primary)",
        }}
        mt={!hasImage ? -0.5 : undefined}
      >
        {hasImage ? (
          <LinkWithScroll to={`/${language}/accommodations`}>
            <Box
              sx={{
                position: "relative",
                textAlign: "center",
                maxWidth: "100vw",
                minHeight: "200px",
                overflow: "hidden",
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
                alt="Serra da Estrela"
                src={`${require(`assets/images/${image}`)}`}
                style={{
                  height: "200px",
                  width: "100%",
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
                  <Typography
                    variant="h6"
                    color="secondary"
                    mb={{ xs: 1, md: 2 }}
                  >
                    Serra da Estrela
                  </Typography>
                  <Typography
                    variant="body1"
                    color="secondary"
                    mb={{ xs: 2, md: 3 }}
                  >
                    Nam ut ligula tortor. Aenean gravida orci sapien, at gravida
                    metus egestas quis. Aliquam erat volutpat. Nullam tristique
                    sem tellus, ut volutpat neque blandit at.
                  </Typography>
                </Container>
              </Box>
            </Box>
          </LinkWithScroll>
        ) : (
          <Box display="flex" alignItems="center" minHeight="200px">
            <Container maxWidth="md">
              <Typography variant="h6" color="secondary" mb={2}>
                Praesent dolor arcu
              </Typography>
              <Typography variant="body1" color="secondary">
                Fusce ultrices tortor sed lacus porttitor dignissim. Phasellus
                tincidunt posuere fringilla. Pellentesque habitant morbi
                tristique senectus et netus et malesuada fames ac turpis
                egestas. Praesent dolor arcu, semper accumsan mi ac, malesuada
                semper nulla. Morbi eget mollis leo.
              </Typography>
            </Container>
          </Box>
        )}
      </Box>
    </>
  );
};
