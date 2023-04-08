import { SectionHeader } from "common/components/SectionHeader";
import React, { useContext } from "react";
import Typography from "@mui/material/Typography";
import { LanguageContext } from "configuration/app-context-manager/LanguageContext";
import Data from "./data/index.json";
import { Box, Container } from "@mui/material";

export const Policy = () => {
  const { language } = useContext(LanguageContext);
  return (
    <Box my={10}>
      <SectionHeader
        title={Data[language].title}
        subtitle={Data[language].subtitle}
      />
      <Container maxWidth="md">
        {Data[language].texts.map((t, id) => (
          <Typography
            variant="body1"
            color="textPrimary"
            key={id}
            mb={id === 3 ? undefined : 2}
            textAlign="center"
          >
            {t.text}
          </Typography>
        ))}
      </Container>
    </Box>
  );
};
