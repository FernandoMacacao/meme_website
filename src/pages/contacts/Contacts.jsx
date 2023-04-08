import { SectionHeader } from "common/components/SectionHeader";
import { LanguageContext } from "configuration/app-context-manager/LanguageContext";
import React, { useContext } from "react";
import Data from "./data/index.json";
import { Box } from "@mui/material";

export const Contacts = () => {
  const { language } = useContext(LanguageContext);
  return (
    <Box my={10}>
      <SectionHeader
        title={Data[language].title}
        subtitle={Data[language].subtitle}
      />
    </Box>
  );
};
