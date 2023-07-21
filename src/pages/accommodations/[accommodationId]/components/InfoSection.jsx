import React, { useContext } from "react";
import { Grid, Stack, Typography } from "@mui/material";
import { LanguageContext } from "configuration/app-context-manager/LanguageContext";
import { useLocation } from "react-router";
import { LinkWithScroll } from "common/components/LinkWithScroll";

const InfoSection = ({ data }) => {
  const { language } = useContext(LanguageContext);
  const location = useLocation();

  function getAccommodationInfo() {
    const pathInfo = location.pathname.split("/")[3];

    const localData = data[language].localAccommodations.accommodations;
    const lmtData = data[language].lmtAccommodations.accommodations;

    let accommodationInfo = localData.find((acc) => acc.link === pathInfo);

    if (accommodationInfo === undefined) {
      accommodationInfo = lmtData.find((acc) => acc.link === pathInfo);
    }

    return accommodationInfo;
  }
  const specificAcc = getAccommodationInfo();

  return (
    <>
      <Grid container spacing={6}>
        <Grid item spacing={2} xs={12} md={6}>
          <Stack mb={5}>
            <Typography variant="h6" color={"var(--clr-primary)"}>
              {getAccommodationInfo().name}
            </Typography>
            <Typography>{specificAcc.personNumber}</Typography>
          </Stack>
          <Stack mb={5}>
            <Typography variant="h6" color={"var(--clr-primary)"}>
              {language === "pt" ? "Descrição" : "Description"}
            </Typography>
            <Typography>{specificAcc.description}</Typography>
          </Stack>
          <Stack>
            <Typography variant="h6" color={"var(--clr-primary)"}>
              {language === "pt" ? "Alguma Dúvida?" : "Want to know more?"}
            </Typography>
            <LinkWithScroll
              style={{
                color: "black",
              }}
              to={`/${language}/contacts`}
            >
              <Typography>
                {language === "pt" ? "Contacte-nos" : "Contact us"}
              </Typography>
            </LinkWithScroll>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6} mb={10}>
          <Typography variant="h6" mb={3} color={"var(--clr-primary)"}>
            {language === "pt" ? "Comodidades" : "Commodities"}
          </Typography>
          <Grid container spacing={3} mb={5}>
            {Object.keys(specificAcc.comodities).map((key, index) => {
              return (
                <Grid item xs={6}>
                  <Typography fontWeight={600} fontSize={16} key={index}>
                    {key}:
                  </Typography>
                  {specificAcc.comodities[key].map((value, subIndex) => {
                    return <Typography key={subIndex}>{value}</Typography>;
                  })}
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default InfoSection;
